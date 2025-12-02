import { IsEnum, IsNumber, IsString } from 'class-validator';
import { VisaTypes } from './visa.dto';

export class UpdatePriceDto {
  @IsNumber()
  priceAmount: number;
  @IsString()
  priceUnit: string;
  @IsEnum(VisaTypes)
  type: VisaTypes;
  @IsString()
  durationId: string;
}
