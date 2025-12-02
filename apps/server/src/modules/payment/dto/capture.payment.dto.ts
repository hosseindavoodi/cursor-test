import { IsInt, IsOptional, IsString, Min } from 'class-validator';
export class CaptureGatewayDto {
    @IsInt() @Min(1)
    amount!: number;

    @IsString()
    provider!: string;
    @IsOptional()
    @IsString()
    providerRef?: string;

    @IsOptional()
    @IsString()
    idempotencyKey?: string;

    @IsOptional()
    @IsString()
    reason?: string;
}
