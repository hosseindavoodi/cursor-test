import { Body, Controller, Get, Param, Put, Query, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {
  PrivateGetVisaOrderListQueries,
  PrivateGetVisaOrderListResponse,
  PrivateVisaOrder,
} from "../dto/order/private.visa.order.list.dto";
import { PrivateVisaOrderUpdateStatusDto } from "../dto/order/update.visa.order.status.dto";
import { MessageDto } from "src/common/dto/common.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { PrivateVisaOrderService } from "./private.visa.order.service";

@ApiTags("Backoffice visa orders")
@Controller("/private/order/visa")
@UseGuards(JwtAuthGuard)
export class PrivateVisaOrderController {
  constructor(private readonly orderService: PrivateVisaOrderService) {}

  @Get("/list")
  async getVisaOrderList(@Query() queries: PrivateGetVisaOrderListQueries): Promise<PrivateGetVisaOrderListResponse> {
    return await this.orderService.visaOrderList(queries);
  }
  @Get("detail/:orderId")
  async getVisaOrderDetail(@Param("orderId") orderId: string): Promise<PrivateVisaOrder> {
    console.log(orderId);
    return await this.orderService.visaOrderDetail(orderId);
  }

  @Put("/status/update")
  async updateOrderStatus(@Body() dto: PrivateVisaOrderUpdateStatusDto): Promise<MessageDto> {
    return await this.orderService.changeVisaOrderStatus(dto);
  }
}
