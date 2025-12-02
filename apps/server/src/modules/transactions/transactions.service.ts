// src/modules/transactions/transactions.service.ts
import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../services/prisma.service';
import { Prisma } from '@sana/db/generated/prisma';

type TxKind =
  | { kind: 'wallet'; walletId: string }
  | { kind: 'external'; provider: string; providerRef?: string };

interface CreateMoneyTxnArgs {
  paymentId: string;
  paymentLegId: string;
  amount: number;
  currency: string;
  type: 'DEPOSIT' | 'WITHDRAW' | 'HOLD' | 'RELEASE' | 'CHARGE' | 'REFUND' | 'FEE';
  direction: 'DEBIT' | 'CREDIT';
  idempotencyKey?: string | null;
  reason?: string | null;
  linkage?: { reversalOfId?: number | null };
  via: TxKind;
}


@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) { }

  async depositToWallet(args: {
    walletId: string;
    paymentId?: string;
    paymentLegId?: string;
    amount: number;
    currency: string;
    idempotencyKey?: string;
    reason?: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      await this.lockWallet(tx, args.walletId);

      const wallet = await tx.wallet.findUnique({ where: { id: args.walletId } });
      if (!wallet) throw new NotFoundException('wallet not found');
      if (wallet.currency !== args.currency) throw new BadRequestException('currency mismatch');

      const txn = await this.createMoneyTxn(tx, {
        paymentId: args.paymentId ?? null,
        paymentLegId: args.paymentLegId ?? null,
        amount: args.amount,
        currency: args.currency,
        type: 'DEPOSIT',
        direction: 'CREDIT',
        idempotencyKey: args.idempotencyKey ?? null,
        reason: args.reason ?? null,
        via: { kind: 'wallet', walletId: args.walletId },
      });

      await tx.wallet.update({
        where: { id: wallet.id },
        data: { cachedBalance: { increment: args.amount } },
      });

      if (args.paymentLegId) {
        await this.recomputeLegAndPayment(tx, args.paymentLegId);
      }
      return txn;
    });
  }

  async chargeWalletForLeg(args: {
    userId: string;
    paymentLegId: string;
    amount: number;
    idempotencyKey?: string;
    reason?: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      const leg = await this.lockAndFetchLeg(tx, args.paymentLegId);
      const payment = await tx.payment.findUnique({ where: { id: leg.paymentId } });
      if (!payment) throw new NotFoundException('payment not found');

      const wallet = await tx.wallet.findUnique({
        where: { userId_currency: { userId: payment.userId, currency: leg.currency } },
      });
      if (!wallet) throw new BadRequestException('wallet not found for currency');

      await this.lockWallet(tx, wallet.id);

      if (wallet.cachedBalance < args.amount) {
        throw new BadRequestException('insufficient wallet balance');
      }

      await this.createMoneyTxn(tx, {
        paymentId: leg.paymentId,
        paymentLegId: leg.id,
        amount: args.amount,
        currency: leg.currency,
        type: 'CHARGE',
        direction: 'DEBIT',
        idempotencyKey: args.idempotencyKey ?? null,
        reason: args.reason ?? 'wallet charge',
        via: { kind: 'wallet', walletId: wallet.id },
      });

      // Decrement wallet cached balance
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { cachedBalance: { decrement: args.amount } },
      });

      // Recompute leg totals + parent payment status
      await this.recomputeLegAndPayment(tx, leg.id);

      return { ok: true };
    });
  }

  async captureGatewayForLeg(args: {
    paymentLegId: string;
    amount: number;
    provider: string;
    providerRef?: string;
    idempotencyKey?: string;
    reason?: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      const leg = await this.lockAndFetchLeg(tx, args.paymentLegId);

      // Non-wallet CHARGE (DEBIT) tied to a provider
      await this.createMoneyTxn(tx, {
        paymentId: leg.paymentId,
        paymentLegId: leg.id,
        amount: args.amount,
        currency: leg.currency,
        type: 'CHARGE',
        direction: 'DEBIT',
        idempotencyKey: args.idempotencyKey ?? null,
        reason: args.reason ?? 'gateway capture',
        via: { kind: 'external', provider: args.provider, providerRef: args.providerRef },
      });

      // Update leg provider info if you want the latest capture ref
      // await tx.paymentLeg.update({
      //   where: { id: leg.id },
      //   data: {
      //   },
      // });

      await this.recomputeLegAndPayment(tx, leg.id);
      return { ok: true };
    });
  }

  async refundLeg(args: {
    paymentLegId: string;
    amount: number;
    to: 'wallet' | 'gateway';
    provider?: string;          // required if to='gateway'
    providerRef?: string;       // gateway refund id
    idempotencyKey?: string;
    reason?: string;
  }) {
    return this.prisma.$transaction(async (tx) => {
      const leg = await this.lockAndFetchLeg(tx, args.paymentLegId);

      // Sanity: don’t refund more than we’ve captured
      const captured = await this.sumPostedDebitsForLeg(tx, leg.id);
      const refunded = await this.sumPostedCreditsForLeg(tx, leg.id, 'REFUND');
      if (args.amount > captured - refunded) {
        throw new BadRequestException('refund exceeds captured amount');
      }

      if (args.to === 'wallet') {
        // Get or create user wallet for the leg currency
        const payment = await tx.payment.findUnique({ where: { id: leg.paymentId } });
        let wallet = await tx.wallet.findUnique({
          where: { userId_currency: { userId: payment!.userId, currency: leg.currency } },
        });
        if (!wallet) {
          wallet = await tx.wallet.create({
            data: { userId: payment!.userId, currency: leg.currency, status: 'ACTIVE' },
          });
        }
        await this.lockWallet(tx, wallet.id);

        await this.createMoneyTxn(tx, {
          paymentId: leg.paymentId,
          paymentLegId: leg.id,
          amount: args.amount,
          currency: leg.currency,
          type: 'REFUND',
          direction: 'CREDIT',
          idempotencyKey: args.idempotencyKey ?? null,
          reason: args.reason ?? 'refund to wallet',
          via: { kind: 'wallet', walletId: wallet.id },
        });

        await tx.wallet.update({
          where: { id: wallet.id },
          data: { cachedBalance: { increment: args.amount } },
        });
      } else {
        if (!args.provider) throw new BadRequestException('provider required for gateway refund');

        await this.createMoneyTxn(tx, {
          paymentId: leg.paymentId,
          paymentLegId: leg.id,
          amount: args.amount,
          currency: leg.currency,
          type: 'REFUND',
          direction: 'CREDIT',
          idempotencyKey: args.idempotencyKey ?? null,
          reason: args.reason ?? 'refund to gateway',
          via: { kind: 'external', provider: args.provider, providerRef: args.providerRef },
        });
      }

      await this.recomputeLegAndPayment(tx, leg.id);
      return { ok: true };
    });
  }

  private async lockWallet(tx: Prisma.TransactionClient, walletId: string) {
    await tx.$queryRawUnsafe(`SELECT id FROM "wallets" WHERE id = $1 FOR UPDATE`, walletId);
  }

  private async lockAndFetchLeg(tx: Prisma.TransactionClient, legId: string) {
    await tx.$queryRawUnsafe(`SELECT id FROM "payment_legs" WHERE id = $1 FOR UPDATE`, legId);
    const leg = await tx.paymentLeg.findUnique({ where: { id: legId } });
    if (!leg) throw new NotFoundException('payment leg not found');
    return leg;
  }

  private async createMoneyTxn(
    tx: Prisma.TransactionClient,
    args: CreateMoneyTxnArgs,
  ): Promise<Prisma.TransactionCreateInput> {
    if (args.idempotencyKey) {
      const existing = await tx.transaction.findUnique({ where: { idempotencyKey: args.idempotencyKey } });
      if (existing) return existing;
    }

    if (args.amount <= 0) throw new BadRequestException('amount must be positive');

    try {
      const created = await tx.transaction.create({
        data: {
          amount: args.amount,
          currency: args.currency,
          type: args.type,
          status: 'SUCCEEDED',
          direction: args.direction,
          paymentLegId: args.paymentLegId,
          walletId: args.via.kind === 'wallet' ? args.via.walletId : null,
          reversalOfId: args.linkage?.reversalOfId ?? null,
          reason: args.reason ?? null,
          idempotencyKey: args.idempotencyKey ?? null,
          postedAt: new Date(),
        },
      });
      return created;
    } catch (e: any) {
      if (e?.code === 'P2002') {
        const again = await tx.transaction.findUnique({ where: { idempotencyKey: args.idempotencyKey! } });
        if (again) return again;
      }
      throw e;
    }
  }

  private async recomputeLegAndPayment(tx: Prisma.TransactionClient, legId: string) {
    const totals = await this.computeLegTotals(tx, legId);
    await tx.paymentLeg.update({
      where: { id: legId },
      data: {
        amountCaptured: totals.captured,
        status: totals.captured >= totals.requested ? 'SUCCEEDED'
          : totals.captured > 0 ? 'PARTIALLY_PAID'
            : 'PENDING',
      },
    });

    const leg = await tx.paymentLeg.findUnique({ where: { id: legId } });
    const siblings = await tx.paymentLeg.findMany({
      where: { paymentId: leg!.paymentId },
      select: { status: true },
    });

    const allSucceeded = siblings.every(s => s.status === 'SUCCEEDED');
    const anyPaid = siblings.some(s => s.status === 'SUCCEEDED' || s.status === 'PARTIALLY_PAID');

    await tx.payment.update({
      where: { id: leg!.paymentId },
      data: { status: allSucceeded ? 'SUCCEEDED' : anyPaid ? 'PARTIALLY_PAID' : 'PENDING' },
    });
  }

  private async computeLegTotals(tx: Prisma.TransactionClient, legId: string) {
    const leg = await tx.paymentLeg.findUnique({ where: { id: legId } });
    if (!leg) throw new NotFoundException('leg not found');

    const posted = await tx.transaction.groupBy({
      by: ['direction', 'type'],
      where: { paymentLegId: legId, status: 'SUCCEEDED' },
      _sum: { amount: true },
    });

    const sum = (dir: 'DEBIT' | 'CREDIT', types?: string[]) =>
      posted
        .filter(p => p.direction === dir && (!types || types.includes(p.type)))
        .reduce((a, b) => a + (b._sum.amount ?? 0), 0);

    const debits = sum('DEBIT', ['CHARGE', 'FEE']);   // outflow
    const credits = sum('CREDIT', ['REFUND', 'RELEASE']); // inflow back

    return {
      requested: leg.amountRequested,
      captured: Math.max(debits - credits, 0),
    };
  }

  private async sumPostedDebitsForLeg(tx: Prisma.TransactionClient, legId: string) {
    const g = await tx.transaction.aggregate({
      where: { paymentLegId: legId, status: 'SUCCEEDED', direction: 'DEBIT', type: { in: ['CHARGE', 'FEE'] } },
      _sum: { amount: true },
    });
    return g._sum.amount ?? 0;
  }

  private async sumPostedCreditsForLeg(tx: Prisma.TransactionClient, legId: string, onlyType?: 'REFUND' | 'RELEASE') {
    const g = await tx.transaction.aggregate({
      where: {
        paymentLegId: legId,
        status: 'SUCCEEDED',
        direction: 'CREDIT',
        ...(onlyType ? { type: onlyType } : {}),
      },
      _sum: { amount: true },
    });
    return g._sum.amount ?? 0;
  }
}
