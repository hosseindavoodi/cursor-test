import { IsBoolean, IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { HealthServiceType } from './interfaces/health.interface';

export class UpdateServiceStatusDto {
  @IsString()
  @IsNotEmpty({ message: 'Status cannot be empty' })
  status: string;

  @IsBoolean({ message: 'Active must be a boolean value' })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  active: boolean;
}

export class SetServiceHealthyDto {
  @IsBoolean({ message: 'is_healthy must be a boolean value' })
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return value;
  })
  is_healthy: boolean;

  @IsString()
  @IsNotEmpty({ message: 'Status cannot be empty' })
  status: string;
}

export class ServiceParamDto {
  @IsEnum(HealthServiceType, {
    message: `service must be one of: ${Object.values(HealthServiceType).join(', ')}`
  })
  service: HealthServiceType;
}