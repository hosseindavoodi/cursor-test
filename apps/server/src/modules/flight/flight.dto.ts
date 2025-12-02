import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsMobilePhone, IsNotEmpty } from 'class-validator';

export enum FlightType {
    ONE_WAY = 'one_way',
    ROUND_TRIP = 'round_trip',
    MULTI_CITY = 'multi_city',
}

export enum CabinClass {
    ECONOMY = 'economy',
    PREMIUM_ECONOMY = 'premium_economy',
    BUSINESS = 'business',
    PREMIUM_BUSINESS = 'premium_business',
    FIRST = 'first',
    PREMIUM_FIRST = 'premium_first',
}

export enum LocationType {
    COUNTRY = 'country',
    CITY = 'city',
    AIRPORT = 'airport',
}

export enum DocumentType {
    PASSPORT = 'passport',
    NATIONAL_CARD = 'national_card',
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export class FlightRouteDto {
    @ApiProperty()
    index: number;

    @ApiProperty()
    origin: string;

    @ApiProperty()
    destination: string;

    @ApiProperty({ enum: LocationType })
    originLocationType: LocationType;

    @ApiProperty({ enum: LocationType })
    destinationLocationType: LocationType;

    @ApiProperty({ type: Date })
    departureDate: Date;
}

export class FlightSearchRequestDto {
    @ApiProperty()
    adult: number;

    @ApiProperty()
    child: number;

    @ApiProperty()
    infant: number;

    @ApiProperty({ enum: FlightType })
    flightTypeName: FlightType;

    @ApiProperty({ enum: CabinClass, isArray: true })
    cabinClasses: CabinClass[];

    @ApiProperty({ type: [FlightRouteDto] })
    segs: FlightRouteDto[];
}

export class AircraftDto {
    @ApiProperty()
    code: string;
}

export class OperatingDto {
    @ApiProperty()
    carrierCode: string;
}

export class DepartureArrivalDto {
    @ApiProperty()
    iataCode: string;

    @ApiProperty()
    at: string;

    @ApiPropertyOptional()
    terminal?: string;
}

export class SegmentDto {
    @ApiProperty({ type: DepartureArrivalDto })
    departure: DepartureArrivalDto;

    @ApiProperty({ type: DepartureArrivalDto })
    arrival: DepartureArrivalDto;

    @ApiProperty()
    carrierCode: string;

    @ApiProperty()
    airline: string;

    @ApiProperty()
    number: string;

    @ApiProperty({ type: AircraftDto })
    aircraft: AircraftDto;

    @ApiProperty({ type: OperatingDto })
    operating: OperatingDto;

    @ApiPropertyOptional()
    duration?: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    numberOfStops: number;

    @ApiProperty()
    blacklistedInEU: boolean;

    @ApiProperty({ type: [String] })
    stops: string[];
}

export class ItineraryDto {
    @ApiProperty()
    duration: string;

    @ApiProperty({ type: [SegmentDto] })
    segments: SegmentDto[];
}

export class PriceDto {
    @ApiProperty()
    currency: string;

    @ApiProperty()
    total: string;

    @ApiPropertyOptional()
    base?: string;

    @ApiProperty()
    additional: string;

    @ApiProperty({ type: [Object] })
    fees: any[];

    @ApiProperty()
    grandTotal: string;

    @ApiProperty({ type: [Object] })
    additionalServices: any[];
}

export class IncludedCheckedBagsDto {
    @ApiProperty()
    weight: number;

    @ApiPropertyOptional()
    weightUnit?: string;

    @ApiProperty()
    quantity: number;
}

export class FareDetailsBySegmentDto {
    @ApiProperty()
    segmentId: string;

    @ApiProperty()
    cabin: string;

    @ApiPropertyOptional()
    fareBasis?: string;

    @ApiPropertyOptional()
    brandedFare?: string;

    @ApiProperty()
    class: string;

    @ApiProperty({ type: IncludedCheckedBagsDto })
    includedCheckedBags: IncludedCheckedBagsDto;
}

export class TravelerPriceDto {
    @ApiProperty()
    currency: string;

    @ApiProperty()
    total: string;

    @ApiProperty()
    base: string;

    @ApiProperty()
    additional: string;

    @ApiProperty({ type: [Object] })
    taxes: any[];

    @ApiProperty({ type: [Object] })
    margins: any[];
}

export class TravelerPricingDto {
    @ApiProperty()
    travelerId: string;

    @ApiProperty()
    fareOption: string;

    @ApiProperty()
    travelerType: string;

    @ApiProperty({ type: TravelerPriceDto })
    price: TravelerPriceDto;

    @ApiProperty({ type: [FareDetailsBySegmentDto] })
    fareDetailsBySegment: FareDetailsBySegmentDto[];
}

export class PricingOptionsDto {
    @ApiProperty({ type: [String] })
    fareType: string[];

    @ApiPropertyOptional()
    corporateCodes?: any;

    @ApiProperty()
    includedCheckedBagsOnly: boolean;

    @ApiPropertyOptional()
    minimumDelayBeforeTicketing?: any;
}

export class FlightOfferDto {
    @ApiProperty()
    provider: string;

    @ApiProperty()
    isCharter: boolean;

    @ApiProperty()
    fareSourceCode: string;

    @ApiProperty()
    agencyId: number;

    @ApiProperty()
    type: string;

    @ApiProperty()
    id: string;

    @ApiProperty()
    source: string;

    @ApiProperty()
    instantTicketingRequired: boolean;

    @ApiProperty()
    nonHomogeneous: boolean;

    @ApiProperty()
    oneWay: boolean;

    @ApiProperty()
    lastTicketingDate: string;

    @ApiProperty()
    numberOfBookableSeats: number;

    @ApiProperty({ type: [ItineraryDto] })
    itineraries: ItineraryDto[];

    @ApiProperty({ type: PriceDto })
    price: PriceDto;

    @ApiProperty({ type: PricingOptionsDto })
    pricingOptions: PricingOptionsDto;

    @ApiProperty({ type: [String] })
    validatingAirlineCodes: string[];

    @ApiProperty({ type: [TravelerPricingDto] })
    travelerPricings: TravelerPricingDto[];
}

export class MetaDto {
    @ApiProperty()
    count: number;

    @ApiPropertyOptional()
    links?: any;
}

export class FlightDataDto {
    @ApiProperty({ type: MetaDto })
    meta: MetaDto;

    @ApiProperty({ type: [FlightOfferDto] })
    data: FlightOfferDto[];
}

export class FlightSearchResponseDto {
    @ApiPropertyOptional()
    meta?: any;

    @ApiProperty()
    invoiceId: number;

    @ApiProperty({ type: FlightDataDto })
    data: FlightDataDto;

    @ApiProperty()
    isSuccessful: boolean;

    @ApiPropertyOptional()
    errors?: any;

    @ApiProperty({ type: [String] })
    warnings: string[];
}

export class CalendarRequestDto {
    origin: string;
    destination: string;
    @ApiPropertyOptional({ type: Date })
    startDate?: Date;
    @ApiPropertyOptional({ type: Date })
    endDate?: Date;
}

export class CalendarResponseDto {
    calendar: Cheapest[]
}

export class Cheapest {
    departureDatetime: Date
    price: number
}

export class NationalCardDocumentDto {
    @ApiProperty()
    id: string;
}

export class PassportDocumentDto {
    @ApiProperty()
    number: string;

    @ApiProperty()
    expiryDate: Date;

    @ApiProperty()
    countryOfIssue: string;
}


export class PassengerDetailsDto {
    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    @ApiProperty()
    gender: Gender;

    @ApiProperty()
    birthDate: Date;

    @ApiProperty()
    nationality: string;

    @ApiProperty({ enum: DocumentType })
    documentType: DocumentType;

    @ApiProperty({ type: NationalCardDocumentDto })
    nationalCard: NationalCardDocumentDto;

    @ApiProperty({ type: PassportDocumentDto })
    passport: PassportDocumentDto;
}

export class ContactInfoDto {
    @ApiProperty()
    @IsNotEmpty()
    firstName: string;

    @ApiProperty()
    @IsNotEmpty()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsMobilePhone('fa-IR')
    phoneNumber: string;
}

export class SaveFlightOfferRequestDto {
    @ApiProperty({ type: FlightOfferDto })
    offer: FlightOfferDto;
}

export class SaveFlightOfferWithPassengersRequestDto {
    @ApiProperty()
    offerId: string;

    @ApiProperty({ type: [PassengerDetailsDto] })
    passengers: PassengerDetailsDto[];

    @ApiProperty({ type: ContactInfoDto })
    contactInfo: ContactInfoDto;
}

export class SaveFlightOfferResponseDto {
    @ApiProperty()
    id: string;
}

export class FlightOfferCacheDto {
    @ApiProperty({ type: FlightOfferDto })
    offer: FlightOfferDto;

    @ApiProperty()
    validTo: string;

    @ApiProperty({ type: [PassengerDetailsDto], required: false })
    passengers?: PassengerDetailsDto[];

    @ApiProperty({ type: ContactInfoDto, required: false })
    contactInfo?: ContactInfoDto;
}

export class GetFlightOfferResponseDto {
    @ApiProperty({ type: FlightOfferDto })
    offer: FlightOfferDto;

    @ApiProperty()
    validTo: string;
}

export class SetOfferPassengersRequestDto {
    @ApiProperty({ type: [PassengerDetailsDto] })
    passengers: PassengerDetailsDto[];

    @ApiProperty({ type: ContactInfoDto })
    contactInfo: ContactInfoDto;
}
