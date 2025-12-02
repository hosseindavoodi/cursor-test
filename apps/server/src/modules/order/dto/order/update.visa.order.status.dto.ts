import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { VisaOrderStatus } from "src/enums/enums";

export class PrivateVisaOrderUpdateStatusDto {
  @IsString()
  @IsNotEmpty()
  orderId: string;

  @IsEnum(VisaOrderStatus)
  @IsNotEmpty()
  status: VisaOrderStatus;
}
