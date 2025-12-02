import { IsEnum, IsNumber, IsString } from 'class-validator';
import { VisaTypes } from './visa.dto';

export class AddPriceToGroupDto {
  @IsNumber()
  priceAmount: number;
  @IsString()
  priceUnit: string;

  @IsString()
  durationId: string;

  @IsEnum(VisaTypes)
  type: VisaTypes;
}
