import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { VisaTypes } from 'src/modules/visa/dto/visa.dto';

export class RequestVisaOrderDto {
  @IsString()
  @IsNotEmpty()
  countryId: string;

  @IsNotEmpty()
  @IsEnum(VisaTypes)
  visaType: VisaTypes;

  @IsString()
  @IsNotEmpty()
  durationId: string;

  @IsArray()
  @IsNotEmpty()
  @Type(() => VisaPassengers)
  @ValidateNested({ each: true })
  passengers: VisaPassengers[];
}

export class RequestVisaOrderResponseDto {
  orderNumber: number;
  orderId: string;
  message: string;
}

export class VisaPassengers {
  @IsString()
  @IsNotEmpty()
  groupId: string;

  @IsNumber()
  @IsNotEmpty()
  count: number;
}
