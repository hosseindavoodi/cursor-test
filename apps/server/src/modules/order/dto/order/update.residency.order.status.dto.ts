import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { ResidencyOrderStatus } from "src/enums/enums";

export class PrivateResidencyOrderUpdateStatusDto {
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsEnum(ResidencyOrderStatus)
  @IsNotEmpty()
  status: ResidencyOrderStatus;
}
