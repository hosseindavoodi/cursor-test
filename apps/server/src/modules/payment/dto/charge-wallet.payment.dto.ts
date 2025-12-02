import { IsInt, IsOptional, IsString, Min } from 'class-validator';
export class ChargeWalletDto {
    @IsInt()
    @Min(1)
    amount!: number;

    @IsString()
    gatewayCode: string;
}
