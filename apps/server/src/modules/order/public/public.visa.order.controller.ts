import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { RequestVisaOrderDto, RequestVisaOrderResponseDto } from "../dto/visa/request.visa.dto";
import { createPassengerDto, VisaConfirmResponseDto } from "../dto/visa/create.visa.passenger.dto";
import { MinioService } from "src/modules/assets/minio.service";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { User } from "src/users/interfaces/user.interface";
import { ApiBearerAuth } from "@nestjs/swagger";
import { VisaOrderServices } from "../order.visa.service";
import { RequestVisaPaymentDto } from "../dto/visa/pay.visa.dto";
import { PaymentProccesor } from "src/modules/payment/processor.service";
import { PaymentResponseDto } from "src/modules/payment/dto/create.payment.dto";

@UseGuards(JwtAuthGuard)
@ApiBearerAuth("access-token")
@Controller("/order/visa")
export class VisaOrderingController {
  constructor(
    readonly minio: MinioService,
    readonly visaOrderService: VisaOrderServices,
    readonly payProccesorService: PaymentProccesor
  ) {}

  @Post("/request")
  async requestVisaOrder(@CurrentUser() user: User, @Body() dto: RequestVisaOrderDto): Promise<RequestVisaOrderResponseDto> {
    return await this.visaOrderService.createOrderForUser(dto, user.id);
  }

  @Post("/confirm")
  async createPassengers(@CurrentUser() user: User, @Body() dto: createPassengerDto): Promise<VisaConfirmResponseDto> {
    return await this.visaOrderService.confirmOrderPassengers(dto, user.id);
  }

  @Post("/pay")
  async payVisaOrder(@CurrentUser() user: User, @Body() dto: RequestVisaPaymentDto): Promise<PaymentResponseDto> {
    return await this.payProccesorService.processVisaPayment(
      {
        wallet: dto.wallet,
        orderId: dto.orderId,
      },
      user
    );
  }
  // @Post('/pay')
  // async initiatePayment(@CurrentUser() user: User, @Body() dto: InitiateOrderPaymentRequestDto) {
  //   return this.paymentServices.processOrder(dto, ProductTypes.VISA)
  // }

  // @Post('/passenger/documents')
  // uploadDocuments(
  //   @Body() uploadPassengerDocumentsDto: UploadPassengerDocumentsDto[],
  // ) {}
}
