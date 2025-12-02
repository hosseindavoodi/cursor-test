import { PaginatedResponseDto, PaginationDto } from "src/common/dto/common.dto";
import { RetrieveAssetsResponseDto } from "src/modules/assets/dto/retrieve.assets.dto";
import { IsDateString, IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { VisaOrderStatus } from "@sana/db/generated/prisma";
import { OrderStatus } from "src/enums/enums";

export class PrivateGetVisaOrderListResponse extends PaginatedResponseDto {
  @Type(() => PrivateVisaOrder)
  orders: PrivateVisaOrder[];
}

export class PrivateGetVisaOrderListQueries extends PaginationDto {
  @IsString()
  @IsOptional()
  @IsNumberString()
  orderNumber?: string;

  @IsString()
  @IsOptional()
  countryId?: string;

  @IsString()
  @IsOptional()
  @IsEnum(VisaOrderStatus)
  status?: VisaOrderStatus;

  @IsString()
  @IsDateString()
  @IsOptional()
  from?: string;

  @IsString()
  @IsDateString()
  @IsOptional()
  to?: string;
}

export class PrivateVisaOrder {
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
  visa?: PrivateVisaOrderItem;
}

export class PrivateVisaOrderItem {
  id: string;
  type: string;
  durationInDays: number;
  priceUnit: string;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  status: VisaOrderStatus;
  totalPriceAmount: number;
  country: PrivateVisaCountry;
  @Type(() => PrivateVisaPassengers)
  passengers: PrivateVisaPassengers[];
}

export class PrivateVisaCountry {
  countryEnName: string;
  countryFaName: string;
  countryCode: string;
  processTime: string;
  isValidForDays: number;
  immediatePayment: boolean;
  @Type(() => RetrieveAssetsResponseDto)
  assets: RetrieveAssetsResponseDto[];
  requireAssetsTypes: { id: string; type: string; desc: string }[];
}

export class PrivateVisaPassengers {
  id: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  gender?: string;
  birthdate?: string;
  passportNumber?: string;
  passportExpireDate?: string;
  nationalityCode?: string;

  group: {
    id: string;
    startAge: number;
    endAge: number;
    title: string;
  };
  prices: {
    totalBaseAmount: number;
    totalTaxAmount: number;
    totalMarkupAmount: number;
    totalPriceAmount: number;
  };

  assets: RetrieveAssetsResponseDto[];
}
