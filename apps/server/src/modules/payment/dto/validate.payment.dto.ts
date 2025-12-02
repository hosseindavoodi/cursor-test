import { IsObject, IsString } from 'class-validator';

export class ValidatePaymentDto {
  @IsString() gatewayCode!: string;
  @IsObject() payload!: Record<string, any>;
  @IsString() paymentId!: string;
}
