import { Body, Controller, Get, Param, Put, Query } from "@nestjs/common";
import { PrivateResidencyOrderService } from "./private.residency.order.service";
import { GetResidencyCountryListRequestDto } from "src/modules/residency/dto/get.residancy.country.dto";
import {
  PrivateGetResidencyOrderListQueries,
  PrivateGetResidencyOrderListResponse,
  PrivateResidencyOrder,
} from "../dto/order/private.residency.order.list.dto";
import { PrivateResidencyOrderUpdateStatusDto } from "../dto/order/update.residency.order.status.dto";
import { MessageDto } from "src/common/dto/common.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller("/private/order/residency")
@ApiTags("Backoffice residency orders")
export class PrivateResidencyOrderController {
  constructor(private readonly residencyOrderService: PrivateResidencyOrderService) {}

  @Get("list")
  async getResidencyOrdersList(@Query() queries: PrivateGetResidencyOrderListQueries): Promise<PrivateGetResidencyOrderListResponse> {
    return await this.residencyOrderService.residencyOrderList(queries);
  }

  @Get("detail/:orderId")
  async getResidencyOrderDetail(@Param("orderId") orderId: string): Promise<PrivateResidencyOrder> {
    return await this.residencyOrderService.residencyOrderDetail(orderId);
  }

  @Put("status/update")
  async updateResidencyOrderStatus(@Body() dto: PrivateResidencyOrderUpdateStatusDto): Promise<MessageDto> {
    return await this.updateResidencyOrderStatus(dto);
  }
}
