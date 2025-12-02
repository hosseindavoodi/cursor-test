import { IsDateString, IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { PaginatedResponseDto, PaginationDto } from "src/common/dto/common.dto";
import { OrderStatus, ResidencyOrderStatus } from "src/enums/enums";
import { Type } from "class-transformer";

export class PrivateGetResidencyOrderListQueries extends PaginationDto {
  @IsString()
  @IsOptional()
  @IsNumberString()
  orderNumber?: string;

  @IsString()
  @IsOptional()
  countryId?: string;

  @IsString()
  @IsOptional()
  @IsEnum(ResidencyOrderStatus)
  status?: ResidencyOrderStatus;

  @IsString()
  @IsDateString()
  @IsOptional()
  from?: string;

  @IsString()
  @IsDateString()
  @IsOptional()
  to?: string;
}

export class PrivateGetResidencyOrderListResponse extends PaginatedResponseDto {
  @Type(() => PrivateResidencyOrder)
  orders: PrivateResidencyOrder[];
}

export class PrivateResidencyOrder {
  id: string;
  customer: {
    firstName: string;
    lastName: string;
    phone: string;
    nationalCode: string;
    id: string;
  };
  status: OrderStatus;
  orderNumber: number;
  product: string;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  totalPriceAmount: number;
  createdAt: string;
  residency?: PrivateResidencyOrderItem;
}

export class PrivateResidencyOrderItem {
  id: string;
  totalBaseAmount: number;
  totalMarkupAmount: number;
  totalTaxAmount: number;
  totalPriceAmount: number;
  priceUnit: string;
  status: ResidencyOrderStatus;

  country: {
    countryFaName: string;
    countryEnName: string;
    countryCode: string;
    id: string;
    types: {
      name: string;
      description: string;
      note: string;
    }[];
  };
}
