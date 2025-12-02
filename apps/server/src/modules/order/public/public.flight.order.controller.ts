import { Body, Controller, Post, UseGuards, Get, Param } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { ReqUser } from "../../passengers/passengers.controller";
import { FlightOrderService } from "../order.flight.service";
import { PaymentProccesor } from "src/modules/payment/processor.service";

@ApiBearerAuth("access-token")
@UseGuards(JwtAuthGuard)
@Controller("/orders/flight")
export class PublicFlightOrderController {
    constructor(
        private readonly service: FlightOrderService,
        private readonly paymentProcessor: PaymentProccesor,
    ) { }

    @Post("/book")
    async book(@Body() body: any, @CurrentUser() user: ReqUser) {
        // body: { provider, bookRequest, product }
        return await this.service.createAndBook({
            userId: user.id,
            provider: body.provider,
            bookRequest: body.bookRequest,
            product: body.product ?? "INTERNATIONAL_FLIGHT",
        });
    }

    @Post("/issue")
    async issue(@Body() body: any, @CurrentUser() user: ReqUser) {
        // body: { orderId, provider, pnrId?, requestedId? }
        return await this.service.issueTickets({
            orderId: body.orderId,
            provider: body.provider,
            pnrId: body.pnrId,
            requestedId: body.requestedId,
        });
    }

    @Post("/refund")
    async refund(@Body() body: any, @CurrentUser() user: ReqUser) {
        // body: { orderId, provider, refundType?, ticketNumberList? }
        return await this.service.refundTickets({
            orderId: body.orderId,
            provider: body.provider,
            refundType: body.refundType,
            ticketNumberList: body.ticketNumberList,
        });
    }

    @Post("/pay")
    async pay(@Body() body: any, @CurrentUser() user: ReqUser) {
        // body: { orderId, wallet? }
        // Convert ReqUser to minimum User for processor
        const apiUser = { id: user.id, email: '', isEmailVerified: false, isPhoneNumberVerified: false, isActive: true, createdAt: new Date() };
        return this.paymentProcessor.processFlightPayment({
            provider: body.provider,
            bookRequest: body.bookRequest,
            wallet: body.wallet,
            product: body.product ?? "INTERNATIONAL_FLIGHT",
        }, apiUser);
    }

    @Get("/status/:orderId")
    async getStatus(@Param("orderId") orderId: string, @CurrentUser() user: ReqUser) {
        const statusOrder = await this.service.getFlightOrderStatusForUser(orderId, user.id);
        return statusOrder;
    }
}


