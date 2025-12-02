export type SaveFlightPassengersPayload = {
  passengers: FlightPassengers[];
  contactInfo: FlightContactInfo;
};

export type SaveFlightPassengersResponse = {
  id: string;
};

export type FlightPassengers = {
  firstName: string;
  lastName: string;
  gender: "male" | "female" | string;
  birthDate: string;
  ageType: "ADULT" | "CHILD" | "INFANT";
  nationality: string;
  documentType: "passport" | "national_card";
  nationalCard: {
    id: string;
  };
  passport: {
    number: string;
    expiryDate: string;
    countryOfIssue: string;
  };
};

export type FlightContactInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};
