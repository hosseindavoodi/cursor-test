import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CurrentUser } from "src/common/decorators/current-user.decorator";
import { MessageDto } from "src/common/dto/common.dto";
import { User } from "src/users/interfaces/user.interface";
import { RequestResidencyDto } from "../dto/residency/request.residency.dto";
import { ResidencyOrderingService } from "../order.residency.service";

@Controller("/order/residency")
@UseGuards(JwtAuthGuard)
@ApiBearerAuth("access-token")
export class ResidencyOrderingController {
  constructor(private readonly residencyService: ResidencyOrderingService) {}

  @Post("request")
  async requestResidencyOrder(@Body() dto: RequestResidencyDto, @CurrentUser() user: User): Promise<MessageDto> {
    return await this.residencyService.requestOrder(dto, user);
  }
}
