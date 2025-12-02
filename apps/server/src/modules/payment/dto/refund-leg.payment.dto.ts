import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
export class RefundLegDto {
    @IsInt() @Min(1) amount!: number;
    @IsEnum({ wallet: 'wallet', gateway: 'gateway' }) to!: 'wallet' | 'gateway';
    @IsOptional() @IsString() provider?: string;
    @IsOptional() @IsString() providerRef?: string;
    @IsOptional() @IsString() idempotencyKey?: string;
    @IsOptional() @IsString() reason?: string;
}
