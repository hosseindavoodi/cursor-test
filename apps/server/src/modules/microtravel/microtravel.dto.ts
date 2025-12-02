export interface SearchFlightRequest {
    currencyCode?: string;
    originDestinations?: OriginDestination[];
    travelers?: Traveler[];
    sources?: string[];
    searchCriteria?: SearchCriteria;
}

export interface OriginDestination {
    id?: string;
    originLocationCode?: string;
    originRadius?: number; // km – default 2 per docs
    alternativeOriginsCodes?: string[];

    destinationLocationCode?: string;
    destinationRadius?: number; // km – default 2 per docs
    alternativeDestinationsCodes?: string[];

    departureDateTimeRange?: {
        date?: string;      // yyyy-MM-dd
        time?: string;      // not considered by backend
        timeWindow?: string; // not considered by backend
    };

    // airports that must NOT be used as connection points
    excludedConnectionPoints?: string[];

    arrivalDateTimeRange?: {
        date?: string; // optional / not considered for search
    };
}


export interface Traveler {
    id?: string;
    travelerType?: string;
    fareOptions?: string[];
    associatedAdultId?: string;
}

export interface SearchCriteria {
    excludeAllotments?: boolean;
    addOneWayOffers?: boolean;
    maxFlightOffers?: number;
    allowAlternativeFareOptions?: boolean;
    oneFlightOfferPerDay?: boolean;

    additionalInformation?: {
        chargeableCheckedBags?: boolean;
        brandedFares?: boolean;
    };

    pricingOptions?: {
        fareType?: string[];
        includedCheckedBagsOnly?: boolean;
    };

    // FlightFilters Structure in docs
    flightFilters?: {
        crossBorderAllowed?: boolean;
        moreOvernightsAllowed?: boolean;
        returnToDepartureAirport?: boolean;
        railSegmentAllowed?: boolean;
        busSegmentAllowed?: boolean;
        maxFlightTime?: number; // minutes, default 999

        // CabinRestrictions Structure
        cabinRestrictions?: Array<{
            cabin?: string; // ECONOMY, BUSINESS, FIRST
            coverage?: string;
            originDestinationIds?: string[];
        }>;

        // Docs define these, but details aren’t critical for now
        carrierRestrictions?: any;
        connectionRestriction?: any;
    };
}

export interface PricingFlightRequest {
    data: {
        type?: string;
        flightOffers?: FlightOffer[];
    };
}

export interface ConfirmPriceRequest {
    data: {
        type?: string;
        flightOffers?: FlightOffer[];
    };
}

export interface BookFlightRequest {
    data: {
        type?: string;
        flightOffers?: FlightOffer[];
        travelers?: BookingTraveler[];
        remarks?: {
            general?: Array<{ subType?: string; text?: string }>;
        };
        ticketingAgreement?: {
            option?: string;
            delay?: string;
            dateTime?: string;
        };
        contacts?: Contact[];
        formOfPayments?: Array<{
            other?: {
                method?: string;
                flightOfferIds?: number[];
            };
        }>;
    };
    captchaCode?: number;
    requestedId?: string;
}

export interface BookingTraveler {
    id?: string;
    dateOfBirth?: string;
    name?: {
        firstName?: string;
        lastName?: string;
    };
    gender?: string;
    contact?: Contact;
    documents?: Array<{
        documentType?: string;
        number?: string;
        expiryDate?: string;
        issuanceCountry?: string;
        nationality?: string;
        holder?: boolean;
    }>;
}

export interface Contact {
    addresseeName?: {
        firstName?: string;
        lastName?: string;
    };
    purpose?: string;
    phones?: Array<{
        deviceType?: string;
        countryCallingCode?: string;
        number?: string;
    }>;
    emailAddress?: string;
}

export interface FlightOffer {
    provider?: string;
    isCharter?: boolean;
    fareSourceCode?: string;
    type?: string;
    id?: string;
    source?: string;
    instantTicketingRequired?: boolean;
    itineraries?: any[];
    price?: any;
    travelerPricings?: any[];
}

export interface IssueTicketRequest {
    provider?: string;
    pnrId?: string;
    requestedId?: string;
}

export interface CancelTicketRequest {
    orderId?: string;
    provider?: string;
}

export interface RefundTicketRequest {
    orderId?: string;
    provider?: string;
    refundType?: number;
    ticketNumberList?: string[];
}

export interface FlightBookDataRequest {
    provider?: string;
    orderId?: string;
    requestedId?: string;
}

export interface RetryConfig {
    maxRetries?: number;
    initialDelayMs?: number;
    maxDelayMs?: number;
    backoffMultiplier?: number;
    retryableStatusCodes?: number[];
    retryableErrorCodes?: string[];
}

export interface TokenRequest {
    apiKey?: string;
    apiSecret?: string;
}

export interface TokenResponse {
    accessToken?: string;
    refreshToken?: string;
    tokenType?: string;
    expiresIn?: number;
}

export interface RefreshTokenRequest {
    refreshToken?: string;
}

export interface MessageResponse {
    message?: string;
    timestamp?: string;
}