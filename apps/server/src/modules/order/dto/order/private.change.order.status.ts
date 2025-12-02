import { IsString } from "class-validator";

export class ChangeOrderStatusRequestDto {
  @IsString()
  status: string;

  @IsString()
  orderId: string;
}
