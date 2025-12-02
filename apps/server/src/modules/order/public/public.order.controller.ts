import { Controller, Get, Param, Query, UseGuards } from "@nestjs/common";
import { PublicOrderServices } from "./public.order.service";
import { GetOrderByUserQueryDto, GetOrderByUserResponseDto, OrderDto } from "../dto/order/get.order.user.dto";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { ReqUser } from "../../passengers/passengers.controller";

@ApiBearerAuth("access-token")
@UseGuards(JwtAuthGuard)
@Controller("/orders")
export class PublicOrderController {
  constructor(readonly orderService: PublicOrderServices) {}

  @Get("/order/:id")
  async getOrderById(@Param("id") orderId: string, @CurrentUser() user: ReqUser): Promise<OrderDto> {
    return await this.orderService.getOrderById(orderId, user.id);
  }

  @Get("/list")
  async getOrderByUser(@Query() query: GetOrderByUserQueryDto, @CurrentUser() user: ReqUser): Promise<GetOrderByUserResponseDto> {
    console.log("user =>", user);
    return await this.orderService.getOrdersByUser(query, user.id);
  }
}
