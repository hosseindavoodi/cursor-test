import { Injectable, HttpException } from "@nestjs/common";
import { FlightService } from "../flight/flight.service";
import { PrismaService } from "src/services/prisma.service";
import { Prisma } from "@sana/db/generated/prisma/client";
import { Cron, CronExpression } from '@nestjs/schedule';

interface CreateFlightOrderInput {
    userId: string;
    provider: string;
    bookRequest: any; // BookFlightRequest from microtravel
    product: "DOMESTIC_FLIGHT" | "INTERNATIONAL_FLIGHT";
}

interface IssueTicketsInput {
    orderId: string;
    provider: string;
    pnrId?: string;
    requestedId?: string;
}

interface RefundTicketsInput {
    orderId: string;
    provider: string;
    refundType?: number;
    ticketNumberList?: string[];
}

@Injectable()
export class FlightOrderService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly flight: FlightService,
    ) { }

    async createAndBook(input: CreateFlightOrderInput) {
        const { userId, provider, bookRequest, product } = input;

        // Create base order in IN_PROGRESS
        const order = await this.prisma.orders.create({
            data: {
                status: "IN_PROGRESS",
                product,
                customer: { connect: { id: userId } },
            },
        });

        try {
            // Call to our own FlightService, not Microtravel
            const booking = await this.flight.bookFlight(bookRequest);

            // Extract totals if present
            const totals = this.extractTotalsFromBooking(booking);

            // Create flight order record
            await this.prisma.flightOrder.create({
                data: {
                    provider,
                    pnrId: booking?.pnrId ?? booking?.data?.pnrId ?? null,
                    requestedId: booking?.requestedId ?? booking?.data?.requestedId ?? null,
                    providerOrderId: booking?.orderId ?? booking?.data?.orderId ?? null,
                    status: "BOOKED",
                    totalBaseAmount: totals.totalBaseAmount,
                    totalMarkupAmount: totals.totalMarkupAmount,
                    totalTaxAmount: totals.totalTaxAmount,
                    totalPriceAmount: totals.totalPriceAmount,
                    order: { connect: { id: order.id } },
                    metadata: booking ?? {},
                },
            });

            // Update main order totals and status
            await this.prisma.orders.update({
                where: { id: order.id },
                data: {
                    status: "IN_PROGRESS",
                    totalBaseAmount: totals.totalBaseAmount,
                    totalMarkupAmount: totals.totalMarkupAmount,
                    totalTaxAmount: totals.totalTaxAmount,
                    totalPriceAmount: totals.totalPriceAmount,
                },
            });

            return { orderId: order.id, booking };
        } catch (err: any) {
            await this.prisma.orders.update({ where: { id: order.id }, data: { status: "FAILED" } });
            // Create flight order record with failure status to keep traceability
            await this.prisma.flightOrder.create({
                data: {
                    provider,
                    status: "BOOK_FAILED",
                    order: { connect: { id: order.id } },
                    metadata: { error: err?.message ?? "BOOK_FAILED" },
                },
            });
            throw new HttpException(err?.message ?? "Booking failed", 500);
        }
    }

    async issueTickets(input: IssueTicketsInput) {
        const { orderId, provider, pnrId, requestedId } = input;

        const flightOrder = await this.prisma.flightOrder.findUnique({ where: { orderId } });
        if (!flightOrder) throw new HttpException("Flight order not found", 404);

        try {
            // Issue through our FlightService
            const result = await this.flight.issueTicket({ provider, pnrId: pnrId ?? flightOrder.pnrId ?? undefined, requestedId: requestedId ?? flightOrder.requestedId ?? undefined });

            // Tickets from provider response (best-effort extraction)
            const tickets = this.extractTicketsFromIssue(result);

            // Persist tickets
            for (const t of tickets) {
                await this.prisma.ticket.create({
                    data: {
                        flightOrderId: flightOrder.id,
                        ticketNumber: t.ticketNumber ?? null,
                        provider,
                        status: "ISSUED",
                        metadata: t.metadata ?? result,
                    },
                });
            }

            // Update statuses
            await this.prisma.flightOrder.update({ where: { id: flightOrder.id }, data: { status: "ISSUED" } });
            await this.prisma.orders.update({ where: { id: orderId }, data: { status: "FULFILLED" } });

            return { orderId, result };
        } catch (err: any) {
            await this.prisma.flightOrder.update({ where: { id: flightOrder.id }, data: { status: "ISSUE_FAILED" } });
            await this.prisma.orders.update({ where: { id: orderId }, data: { status: "FAILED" } });
            throw new HttpException(err?.message ?? "Issue failed", 500);
        }
    }

    async refundTickets(input: RefundTicketsInput) {
        const { orderId, provider, refundType, ticketNumberList } = input;

        const flight = await this.prisma.flightOrder.findUnique({ where: { orderId } });
        if (!flight) throw new HttpException("Flight order not found", 404);

        try {
            const result = await this.flight.refundFlight({
                orderId: flight.providerOrderId ?? undefined,
                provider,
                refundType,
                ticketNumberList,
            });

            // Update ticket statuses
            await this.prisma.ticket.updateMany({
                where: { flightOrderId: flight.id },
                data: { status: "REFUNDED" },
            });

            await this.prisma.flightOrder.update({ where: { id: flight.id }, data: { status: "REFUNDED" } });
            await this.prisma.orders.update({ where: { id: orderId }, data: { status: "FULFILLED" } });

            return { orderId, result };
        } catch (err: any) {
            await this.prisma.flightOrder.update({ where: { id: flight.id }, data: { status: "REFUND_FAILED" } });
            await this.prisma.orders.update({ where: { id: orderId }, data: { status: "FAILED" } });
            throw new HttpException(err?.message ?? "Refund failed", 500);
        }
    }

    async getFlightOrderStatusForUser(orderId: string, userId: string) {
        // Find the order, join with flightOrder, filter on user and allowed statuses
        const order = await this.prisma.orders.findUnique({
            where: { id: orderId, customerId: userId },
            include: { flight: true }
        });
        if (!order || !order.flight) return null;
        if (["ISSUED", "ISSUE_FAILED", "BOOKED"].includes(order.flight.status)) {
            return order.flight;
        }
        return null;
    }

    async getPendingIssueOrders() {
        // Return all flight orders with status 'PENDING_ISSUE'
        return this.prisma.flightOrder.findMany({
            where: { status: 'PENDING_ISSUE' },
        });
    }

    async processPendingIssues() {
        // Get all pending_issue orders and try to issue them, skip if already requested.
        const pendingOrders = await this.getPendingIssueOrders();
        for (const flight of pendingOrders) {
            if (!flight.requestedId) {
                // Call issueTickets, ensure idempotency
                try {
                    await this.issueTickets({
                        orderId: flight.orderId,
                        provider: flight.provider,
                        pnrId: flight.pnrId,
                        requestedId: flight.requestedId,
                    });
                } catch (e) {
                    // Log and continue
                }
            }
        }
    }

    @Cron(CronExpression.EVERY_MINUTE)
    async scheduledIssuePendingOrders() {
        await this.processPendingIssues();
    }

    private extractTotalsFromBooking(payload: any) {
        const zero = new Prisma.Decimal(0);
        const price = payload?.data?.price ?? payload?.price ?? {};
        const totalBaseAmount = this.toDecimal(price?.base ?? 0);
        const totalTaxAmount = this.toDecimal(price?.tax ?? 0);
        const totalMarkupAmount = this.toDecimal(price?.markup ?? 0);
        const totalPriceAmount = this.toDecimal(price?.total ?? 0);
        return { totalBaseAmount: totalBaseAmount ?? zero, totalTaxAmount: totalTaxAmount ?? zero, totalMarkupAmount: totalMarkupAmount ?? zero, totalPriceAmount: totalPriceAmount ?? zero };
    }

    private extractTicketsFromIssue(payload: any): Array<{ ticketNumber?: string; metadata?: any }> {
        const tickets: Array<{ ticketNumber?: string; metadata?: any }> = [];
        const list = payload?.tickets ?? payload?.data?.tickets ?? payload?.data?.ticketList ?? [];
        if (Array.isArray(list)) {
            for (const t of list) tickets.push({ ticketNumber: t?.ticketNumber ?? t?.number ?? undefined, metadata: t });
        }
        return tickets;
    }

    private toDecimal(n: any) {
        try {
            if (n == null) return new Prisma.Decimal(0);
            const v = typeof n === "string" ? Number(n) : n;
            return new Prisma.Decimal(v || 0);
        } catch {
            return new Prisma.Decimal(0);
        }
    }
}


