import { IsArray, IsDecimal, IsNotEmpty, IsString } from "class-validator";

export class AddBulkVisaPricesDto {
    @IsNotEmpty()
    @IsArray()
    groups: VisaPricesGroup[]
}

export class VisaPricesGroup {
    @IsNotEmpty()
    @IsString()
    groupId: string
    prices: VisaPrice[]

}

export class VisaPrice {
    @IsNotEmpty()
    @IsDecimal()
    priceAmount: number

    @IsNotEmpty()
    @IsString()
    priceUnit: string

    @IsNotEmpty()
    @IsString()
    durationId: string

    @IsNotEmpty()
    @IsString()
    type: string
}
