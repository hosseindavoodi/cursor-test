import { PaginatedResponseDto, PaginationDto } from "src/common/dto/common.dto";
import { ProductTypes } from "../../interfaces/order.interface";
import { VisaTypes } from "src/modules/visa/dto/visa.dto";
import { AssetDto, GetAssetsDto } from "src/modules/assets/dto/list.assets.dto";
import { Gender } from "src/modules/passengers/gender.enum";
import { IsDateString, IsEnum, IsNumberString, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { OrderStatus, ResidencyOrderStatus, VisaOrderStatus } from "src/enums/enums";
export class GetOrderByUserQueryDto extends PaginationDto {
  @IsOptional()
  @IsNumberString()
  orderNumber?: string;

  @IsOptional()
  @IsEnum(ProductTypes)
  productType?: ProductTypes;

  @IsOptional()
  @IsString()
  @IsDateString()
  fromDate?: string;

  @IsOptional()
  @IsString()
  @IsDateString()
  toDate?: string;
}

export class GetOrderByUserResponseDto extends PaginatedResponseDto {
  @Type(() => OrderDto)
  orders: OrderDto[];
}

export class OrderDto {
  id: string;
  orderNumber: number;
  product: ProductTypes;
  createdAt: string;
  totalBaseAmount: number;
  totalTaxAmount: number;
  totalMarkupAmount: number;
  totalPriceAmount: number;
  status: OrderStatus;
  visa?: VisaOrder;

  residency?: ResidencyOrder;
}

class VisaOrder {
  type: VisaTypes;
  durationInDays: number;
  totalBaseAmount: number;
  totalMarkupAmount: number;
  totalTaxAmount: number;
  totalPriceAmount: number;
  priceUnit: string;
  status: VisaOrderStatus;
  country: {
    countryEnName: string;
    countryFaName: string;
    countryCode: string;
    processTime: string;
    isValidForDays: number;
    types: VisaTypes[];
    requireOrderAssetTypes: RequireAssetType[];
    assets: AssetDto[];
  };
  passengers: VisaPassenger[];
}

class ResidencyOrder {
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
    types: {
      name: string;
      desc: string;
      note?: string;
    }[];
  };
}

class RequireAssetType {
  type: string;
  desc: string;
}

class VisaPassenger {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  gender: Gender;
  birthdate: string;
  passportNumber: string;
  passportExpireDate: string;
  group: {
    startAge: number;
    endAge: number;
    title: string;
  };
  price: {
    totalBaseAmount: number;
    totalMarkupAmount: number;
    totalTaxAmount: number;
    totalPriceAmount: number;
  };
  assets: AssetDto[];
}
