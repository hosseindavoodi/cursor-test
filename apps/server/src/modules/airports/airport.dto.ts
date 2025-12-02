import { IsEnum, IsNotEmpty, IsString } from 'class-validator';


export enum LocationType {
    COUNTRY = 'country',
    CITY = 'city',
    AIRPORT = 'airport',
}

export class GetAirportsQueryDto {
    @IsString()
    @IsNotEmpty()
    locationCode: string;

    @IsEnum(LocationType)
    @IsNotEmpty()
    locationType: LocationType;
}

export class AirportDto {
    id: bigint;
    code: string;
    nameEn: string;
    nameFa: string;
    timeZone: string;
    priority: bigint;
    city: {
        id: bigint;
        code: string;
        nameEn: string;
        nameFa: string;
    };
    country: {
        id: bigint;
        code: string;
        nameEn: string;
        nameFa: string;
    };
}
