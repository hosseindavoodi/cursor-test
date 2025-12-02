export type FlightSearchPayload = {
  adult: number;
  child: number;
  infant: number;
  flightTypeName: "one_way" | "round_trip";
  cabinClasses: CabinClass[];
  segs: FlightSearchSegments[];
};

export type UnParsedFlightSearchPayload = {
  adult: string;
  child: string;
  infant: string;
  flightTypeName: "one_way" | "round_trip";
  cabinClasses: CabinClass[];
  segs: UnParsedFlightSegments[];
};

export type UnParsedFlightSegments = {
  index: string;
  origin: string;
  destination: string;
  originLocationType: "airport" | "city" | "country";
  destinationLocationType: "airport" | "city" | "country";
  departureDate: string; // iso
};

export type FlightSearchSegments = {
  index: number;
  origin: string;
  destination: string;
  originLocationType: "airport" | "city" | "country";
  destinationLocationType: "airport" | "city" | "country";
  departureDate: string; // iso
};

export type FlightSearchResponse = {
  meta: object;
  invoiceId: number;
  data: {
    meta: {
      count: number;
      links: object;
    };

    data: Flight[];
  };
  isSuccessful: boolean;
  errors: object;
  warnings: string[];
};

export enum CabinClass {
  ECONOMY = "economy",
  PREMIUM_ECONOMY = "premium_economy",
  BUSINESS = "business",
  PREMIUM_BUSINESS = "premium_business",
  FIRST = "first",
  PREMIUM_FIRST = "premium_first",
}

export type Flight = {
  provider: string;
  isCharter: boolean;
  fareSourceCode: string;
  agencyId: number;
  type: string;
  id: string;
  source: string;
  instantTicketingRequired: boolean;
  nonHomogeneous: boolean;
  oneWay: boolean;
  lastTicketingDate: string;
  numberOfBookableSeats: number;
  itineraries: Itineraries[];
  price: FLightPrice;
  pricingOptions: FlightPricingOptions;
  travelerPricings: FlightTravelerPricings[];
};

export type FLightPrice = {
  currency: string;
  total: string;
  base: string | null;
  additional: string;
  additionalServices: [];
  fees: [];
  grandTotal: string;
};

export type FlightPricingOptions = {
  fareType: string[];
  corporateCodes: null;
  includedCheckedBagsOnly: boolean;
  minimumDelayBeforeTicketing: null;
};

export type FlightTravelerPricings = {
  travelerId: string;
  travelerType: "ADULT" | "CHILD" | "INFANT";
  fareOption: string;
  fareDetailsBySegment: {
    segmentId: string;
    cabin: string;
    fareBasis: null;
    brandedFare: null;
    class: string;
    includedCheckedBags: { weight: number; weightUnit: string; quantity: number };
  }[];
  price: {
    currency: string;
    base: string;
    additional: string;
    margins: [];
    taxes: [];
    total: string;
  };
};

export type Itineraries = {
  duration: string;
  segments: FlightSegment[];
};

export type FlightSegment = {
  departure: {
    iataCode: string;
    at: string;
    terminal: string;
  };
  arrival: {
    iataCode: string;
    at: string;
    terminal: string;
  };
  carrierCode: string;
  airline: string;
  number: string;
  aircraft: {
    code: string;
  };
  operating: {
    carrierCode: string;
  };
  duration: string;
  id: string;
  numberOfStops: number;
  blacklistedInEu: boolean;
  stops: string[];

  // price: {
  //   currency: string;
  //   total: string;
  //   base: string;
  //   additional: StreamPipeOptions;
  //   fees: object[];
  //   grandTotal: string;
  //   additionalServices: object[];
  // };
  // pricingOptions: {
  //   fareType: string[];
  //   corporateCodes: object;
  //   includedCheckedBagsOnly: boolean;
  //   minimumDelayBeforeTicketing: object;
  // };
  // validatingAirlineCodes: string[];
  // travelerPricings: {
  //   travelerId: string;
  //   fareOption: string;
  //   travelerType: string;
  //   price: {
  //     currency: string;
  //     total: string;
  //     base: string;
  //     additional: string;
  //     taxes: object[];
  //     margins: object[];
  //   };
  //   fareDetailsBySegment: {
  //     segmentId: string;
  //     cabin: string;
  //     fareBasis: string;
  //     brandedFare: string;
  //     class: string;
  //     includedCheckedBags: {
  //       weight: number;
  //       weightUnit: string;
  //       quanitiy: number;
  //     };
  //   }[];
  // };
};

export type FlightFilters = {
  price: number[];
  timeRange: number[];
  airlines: string[];
  baggages: number[];
};

export enum FlightSorts {
  FROM_LOWEST_PRICE = "FROM_LOWEST_PRICE",
  FROM_HIGHEST_PRICE = "FROM_HIGHEST_PRICE",
  FROM_CLOSEST_FLIGHT = "FROM_CLOSEST_FLIGHT",
  FROM_LATEST_FLIGHT = "FROM_LATEST_FLIGHT",
}

export type SaveFlightOfferPayload = {
  offer: Flight;
};

export type SaveFlightOfferResponse = {
  id: string;
};

export type RetrieveFlightOfferQueries = {
  id: string;
};

export type RetrieveFlightOfferResponse = {
  offer: Flight;
  validTo: string;
};

export enum AgeType {
  ADULT = "ADULT",
  CHILD = "CHILD",
  INFANT = "INFANT",
}
