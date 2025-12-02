// src/modules/payment/payment.service.ts
import { BadRequestException, Injectable, NotFoundException, Logger } from "@nestjs/common";
import { PrismaService } from "../../services/prisma.service";
import { Orders, Prisma, Wallet } from "@sana/db/generated/prisma";
import { PaymentResponseDto } from "./dto/create.payment.dto";
import { WalletService } from "../wallet/wallet.service";
import { IKCAdapter } from "./adaptors/ikc.adaptor";
import { ConfigService } from "@nestjs/config";
import { Payment, PaymentStatus } from '@sana/db/generated/prisma'
import { PaginatedResponseDto } from 'src/common/dto/common.dto';

export type Currency = "USD" | "IRR";

export interface CreatePaymentInput {
  tx?: Prisma.TransactionClient;
  userId: string;
  orderId?: string | null;
  type: "ORDER_PAYMENT" | "WALLET_TOPUP";
  idempotencyKey: string;
  legs: Array<{ currency: Currency; amountRequested: number }>;
}

export type PayMethod = "WALLET" | "GATEWAY";

export interface PayOptions {
  gatewayCode?: string;
  returnUrl?: string;
  callbackUrl?: string;
}

export interface PayResult {
  redirectUrl?: string;
}

export interface GatewaySession {
  token: string;
  body: any;
  redirectUrl: string;
  meta?: any;
}

export interface GatewayVerify {
  ok: boolean;
  message?: string;
  authority: string;
  externalRef?: string;
  paidAmountIRR: number;
  meta?: any;
}

export interface GatewayAdapter {
  code(): string;
  createSession(args: { amountIRR: number; orderRef: string; returnUrl?: string; callbackUrl?: string }): Promise<GatewaySession>;
  verifyCallback(payload: any): Promise<GatewayVerify>;
}

function computeTotalsByCurrency(legs: Array<{ currency: Currency; amountRequested: number }>): Map<Currency, number> {
  const totals = new Map<Currency, number>();
  for (const leg of legs) {
    const v = totals.get(leg.currency) ?? 0;
    totals.set(leg.currency, v + leg.amountRequested);
  }
  return totals;
}

@Injectable()
export class PaymentService {
  private readonly logger = new Logger(PaymentService.name);
  private gatewaysMap: Map<string, GatewayAdapter> = new Map();

  constructor(
    private readonly prisma: PrismaService,
    private readonly wallet: WalletService,
    private readonly ikc: IKCAdapter,
    private readonly config: ConfigService
  ) {
    this.gatewaysMap.set(this.ikc.code(), this.ikc);
  }

  private async createPaymentTx(tx: Prisma.TransactionClient, input: CreatePaymentInput) {
    const totals = computeTotalsByCurrency(input.legs);
    if (totals.size == 0) {
      throw new BadRequestException("legs cant be empty");
    }

    const payment = await tx.payment.create({
      data: {
        userId: input.userId,
        ordersId: input.orderId,
        idempotencyKey: input.idempotencyKey,
        type: input.type,
        status: "CREATED",
        currency: totals.size > 1 ? "XXX" : Array.from(totals.keys())[0],
        amountRequested: 0,
        amountCaptured: 0,
        walletAmount: 0,
        gatewayAmount: 0,
        PaymentLeg: {
          create: Array.from(totals.entries()).map(([currency, amt]) => ({
            currency,
            amountRequested: amt,
            amountCaptured: 0,
            walletAmount: 0,
            gatewayAmount: 0,
            status: "CREATED",
            method: "WALLET_THEN_GATEWAY",
          })),
        },
      },
      include: { PaymentLeg: true },
    });
    return payment;
  }

  async createPayment(input: CreatePaymentInput) {
    try {
      return await this.prisma.$transaction((tx) => this.createPaymentTx(tx, input));
    } catch (e: any) {
      if (e?.code === "P2002") {
        const existing = await this.prisma.payment.findFirst({
          where: { idempotencyKey: input.idempotencyKey },
          include: { PaymentLeg: true },
        });
        if (existing) return existing;
      }
      throw e;
    }
  }

  private remainingOfLeg(leg: { amountRequested: number; walletAmount: number; gatewayAmount: number }) {
    return Math.max(0, leg.amountRequested - (leg.walletAmount + leg.gatewayAmount));
  }

  private async reloadPaymentWithLegs(tx: Prisma.TransactionClient, paymentId: string) {
    const p = await tx.payment.findUnique({
      where: { id: paymentId },
      include: { PaymentLeg: true },
    });
    if (!p) throw new NotFoundException("Payment not found");
    return p;
  }

  async payPayment(paymentId: string, method: PayMethod, opts: PayOptions = {}): Promise<PaymentResponseDto> {
    return await this.prisma.$transaction(async (tx) => {
      const payment = await this.reloadPaymentWithLegs(tx, paymentId);

      if (payment.status === "SUCCEEDED") {
        throw new BadRequestException("Payment already completed");
      }

      if (["CANCELED"].includes(payment.status as string)) {
        throw new BadRequestException(`Payment is ${payment.status}`);
      }

      // get payment remaining value in irr
      const IRRpaymentLegs = payment.PaymentLeg.filter((leg) => {
        return leg.currency === "IRR";
      });

      let totalRemaining = IRRpaymentLegs.reduce((sum, leg) => {
        return sum + this.remainingOfLeg(leg);
      }, 0);

      if (totalRemaining <= 0) {
        throw new BadRequestException("Nothing to pay");
      }

      if (method === "WALLET") {
        // first reduce from wallet then check if there is anything remaining
        // make another transaction to pay for it
        const IRRwallet = await this.wallet.getOrCreateWallet(payment.userId, "IRR");
        const balance = IRRwallet.cachedBalance;
        totalRemaining = totalRemaining - balance;

        if (totalRemaining <= 0) {
          // can pay fully from wallet
          for (const leg of IRRpaymentLegs) {
            const rem = this.remainingOfLeg(leg);
            if (rem <= 0) continue;
            const payFromWallet = Math.min(rem, balance);
            await tx.transaction.create({
              data: {
                paymentLegId: leg.id,
                amount: payFromWallet,
                currency: "IRR",
                status: "SUCCEEDED",
                externalRef: `WALLET:${IRRwallet.id}`,
                type: "CHARGE",
                direction: "DEBIT",
              },
            });

            await tx.paymentLeg.update({
              where: { id: leg.id },
              data: {
                walletAmount: {
                  increment: payFromWallet,
                },
                amountCaptured: {
                  increment: payFromWallet,
                },
                status: rem === payFromWallet ? "SUCCEEDED" : "PARTIALLY_PAID",
              },
            });
          }
        }
      }

      if (totalRemaining === 0) {
        await tx.payment.update({
          where: { id: paymentId },
          data: { status: "SUCCEEDED" },
        });
        return { redirectUrl: "", body: { message: "Payment completed with wallet" } };
      }

      const uIRR = payment.PaymentLeg?.find((l) => l.currency === "IRR" && this.remainingOfLeg(l) > 0);

      if (!uIRR || this.remainingOfLeg(uIRR as any) <= 0) {
        throw new BadRequestException("Only IRR can be sent to gateway");
      }
      if (!opts.gatewayCode) {
        throw new BadRequestException("gatewayCode required");
      }
      const gw = this.gatewaysMap.get(opts.gatewayCode);
      if (!gw) throw new BadRequestException(`Unknown gateway: ${opts.gatewayCode}`);

      const irrRemaining = this.remainingOfLeg(uIRR as any);

      const trans = await tx.transaction.create({
        data: {
          amount: irrRemaining,
          currency: "IRR",
          direction: "CREDIT",
          type: "DEPOSIT",
          externalRef: "1",
          paymentLegId: uIRR.id,
          status: "PENDING",
        },
      });

      let callbackUrl = this.config.get("BACKEND_EXTERNAL_URL") + "/payments/callback/" + opts.gatewayCode + "/" + trans.id;

      const session = await gw.createSession({
        amountIRR: irrRemaining,
        orderRef: trans.id.toString(),
        returnUrl: opts.returnUrl,
        callbackUrl: callbackUrl,
      });

      await tx.transaction.update({
        data: {
          externalRef: session.token,
        },
        where: {
          id: trans.id,
        },
      });

      await tx.paymentLeg.update({
        where: { id: uIRR.id },
        data: {
          status: "PENDING",
          gatewayAmount: uIRR.gatewayAmount,
        },
      });

      await tx.payment.update({
        where: { id: paymentId },
        data: { status: "PENDING" },
      });

      return {
        body: session.body,
        redirectUrl: session.redirectUrl,
      };
    });
  }

  async handleGatewayCallback(gatewayCode: string, transId: number, callbackPayload: any): Promise<{ url: string }> {
    const gw = this.gatewaysMap.get(gatewayCode);
    if (!gw) throw new BadRequestException(`Unknown gateway: ${gatewayCode}`);

    const trans = await this.prisma.transaction.findFirst({
      where: {
        id: transId,
      },
      include: {
        paymentLeg: {
          select: {
            payment: {
              select: {
                order: true,
              },
            },
          },
        },
      },
    });
    if (!trans) {
      throw new BadRequestException("payment not found");
    }

    if (trans && trans.status === "SUCCEEDED") {
      return this.generateRedirectUrl(trans.paymentLeg.payment.order);
    }

    const verify = await gw.verifyCallback(callbackPayload);

    if (!verify.ok) {
      return {
        url: process.env.PAYMENT_FAILED
      }
    }

    this.logger.debug(verify, "BANK_GATEWAY_VERIFY");

    await this.prisma.$transaction(async (tx) => {
      const trans = await tx.transaction.findFirst({
        where: { externalRef: verify.authority },
        include: {
          paymentLeg: {
            include: {
              payment: true,
            },
          },
        },
      });
      if (!trans) {
        this.logger.warn(`Unknown callback authority=${verify.authority} gw=${gatewayCode}`);
        throw new NotFoundException("Transaction not found");
      }

      const leg = trans.paymentLeg;
      const payment = trans.paymentLeg.payment;
      if (!verify.ok) {
        if (!(await this._isFullyPaid(tx, payment.id))) {
          await tx.payment.update({ where: { id: payment.id }, data: { status: "FAILED" } });
          await tx.paymentLeg.update({
            where: { id: leg.id },
            data: { status: "FAILED" },
          });
        }
        return new BadRequestException(verify.message || "Payment failed");
      }

      const remaining = Math.max(0, leg.amountRequested - (leg.walletAmount + leg.gatewayAmount));
      const paid = Math.min(verify.paidAmountIRR, remaining);

      await tx.paymentLeg.update({
        where: { id: leg.id },
        data: {
          gatewayAmount: {
            increment: paid,
          },
          amountCaptured: {
            increment: paid,
          },
          status: paid === remaining ? "SUCCEEDED" : "PARTIALLY_PAID",
        },
      });

      const fully = await this._isFullyPaid(tx, payment.id);
      await tx.payment.update({
        where: { id: payment.id },
        data: { status: fully ? "SUCCEEDED" : "PARTIALLY_PAID" },
      });

      // FLIGHT order: If fully paid, update related flightOrder to PENDING_ISSUE
      if (fully && payment.type === "ORDER_PAYMENT" && payment.ordersId) {
        const order = await tx.orders.findUnique({ where: { id: payment.ordersId }, include: { flight: true } });
        if (order && order.product && order.product.toString().includes('FLIGHT') && order.flight) {
          await tx.flightOrder.update({ where: { id: order.flight.id }, data: { status: "PENDING_ISSUE" } });
        }
      }
      if (payment.type === "WALLET_TOPUP") {
        let w = await this.wallet.getOrCreateWallet(payment.userId, leg.currency);
        await tx.wallet.update({
          where: {
            id: w.id,
          },
          data: {
            cachedBalance: {
              increment: paid,
            },
          },
        });
      }
    });

    return this.generateRedirectUrl(trans.paymentLeg.payment.order);
  }

  generateRedirectUrl(order: Orders): { url: string } {
    switch (order.product) {
      case "VISA":
        return {
          url: process.env.VISA_CALLBACK_URL,
        };
      case "RESIDENCY":
        return {
          url: process.env.RESIDENCY_CALLBACK_URL,
        };
      case "WALLET":
        return {
          url: process.env.WALLET_CALLBACK_URL,
        };

        break;

      default:
        break;
    }
  }

  async chargeWallet(userId: string, currency: Currency, amount: number, gwCode: string) {
    const payment = await this.createPayment({
      userId: userId,
      type: "WALLET_TOPUP",
      idempotencyKey: `WALLET-${userId}-${Date.now()}`,
      legs: [{ currency, amountRequested: amount }],
    });

    return this.payPayment(payment.id, "GATEWAY", { gatewayCode: gwCode });
  }

  private async reduceFromWallet(tx: Prisma.TransactionClient, wallet: Wallet, reduceAmount: number, paymentLegId?: string) {
    this.logger.log(`Reducing payment of ${reduceAmount} from wallet ${wallet.id} (balance=${wallet.cachedBalance})`);

    if (reduceAmount <= 0) {
      this.logger.warn("Nothing to pay");
      throw new BadRequestException("Nothing to pay");
    }
    const balance = wallet.cachedBalance;
    if (balance <= 0) {
      this.logger.warn("Wallet empty");
      throw new BadRequestException("Wallet empty");
    }

    if (reduceAmount > balance) {
      this.logger.warn(`Insufficient wallet balance ${balance} to cover ${reduceAmount}`);
      throw new BadRequestException("Insufficient wallet balance");
    }

    const trans = tx.transaction.create({
      data: {
        amount: reduceAmount,
        currency: wallet.currency,
        status: "SUCCEEDED",
        externalRef: `WALLET:${wallet.id}`,
        type: "CHARGE",
        direction: "DEBIT",
        walletId: wallet.id,
        paymentLegId: paymentLegId,
      },
    });

    return trans;
  }

  private async _isFullyPaid(tx: Prisma.TransactionClient, paymentId: string) {
    const payment = await tx.payment.findUnique({
      where: { id: paymentId },
      include: { PaymentLeg: true },
    });
    if (!payment) return false;
    for (const l of payment.PaymentLeg as any[]) {
      const rem = Math.max(0, l.amountRequested - (l.walletAmount + l.gatewayAmount));
      if (rem > 0) return false;
    }
    return true;
  }

  async listAllPayments(options: ListPaymentsOptions): Promise<PaginatedPayments> {
    const { page, limit, status, userId, gatewayCode } = options;
    const skip = (page - 1) * limit;

    const where: Prisma.PaymentWhereInput = {
      ...(status && { status }),
      ...(userId && { userId: userId.toString() }),
    };

    // If gatewayCode is provided, we need to filter by transactions with that gateway
    if (gatewayCode) {
      where.PaymentLeg = {
        some: {
          transactions: {
            some: {
              externalRef: {
                contains: gatewayCode,
              },
            },
          },
        },
      };
    }

    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        where,
        include: {
          PaymentLeg: {
            include: {
              transactions: true,
            },
          },
          User: {
            select: {
              id: true,
              email: true,
              firstName: true,
              lastName: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.payment.count({ where }),
    ]);

    return {
      payments: payments,
      pagination: {
        page,
        perPage: limit,
        totalItems: 0,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPreviousPage: page > 1,
      },
    };
  }

  async listUserPayments(
    userId: string,
    options: { page: number; limit: number; status?: PaymentStatus }
  ): Promise<PaginatedPayments> {
    const { page, limit, status } = options;
    const skip = (page - 1) * limit;

    const where: Prisma.PaymentWhereInput = {
      userId,
      ...(status && { status }),
    };

    const [payments, total] = await Promise.all([
      this.prisma.payment.findMany({
        where,
        include: {
          PaymentLeg: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.payment.count({ where }),
    ]);

    return {
      payments: payments,
      pagination: {
        page,
        perPage: limit,
        totalItems: 0,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPreviousPage: page > 1,
      },
    };
  }

  async getPayment(
    userId: string,
    paymentId: string,
  ) {
    const payment = await this.prisma.payment.findFirst({
      where: {
        id: paymentId,
        userId: userId,
      },
      include: {
        PaymentLeg: {
          include: {
            transactions: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 5,
            },
          },
        },
      },
    });

    if (!payment) {
      throw new NotFoundException('Payment not found or does not belong to user');
    }
    return payment
  }
}

export interface ListPaymentsOptions {
  page: number;
  limit: number;
  status?: PaymentStatus;
  userId?: number;
  gatewayCode?: string;
}

export class PaginatedPayments extends PaginatedResponseDto {
  payments: Payment[];
}