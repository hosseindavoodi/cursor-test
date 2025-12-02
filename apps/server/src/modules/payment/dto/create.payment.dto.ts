import { ArrayNotEmpty, IsArray, IsInt, IsOptional, IsString, Length, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class LegDto {
    @IsString() @Length(3, 3) currency!: string;
    @IsInt() @Min(1) amountRequested!: number;
}

export class CreatePaymentDto {
    @IsString()
    userId!: string;

    @IsString()
    orderId!: string;

    @IsArray()
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    @Type(() => LegDto)
    legs!: LegDto[];

    @IsOptional()
    @IsString()
    idempotencyKey?: string;
}

export class PaymentResponseDto {
    body: any;
    redirectUrl: string;
}