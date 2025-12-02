import { FlightSearchPayload, FlightSearchSegments, UnParsedFlightSearchPayload } from "@sana/types/flight/flight";

export const flightPayloadNormalizer = (payload: UnParsedFlightSearchPayload): FlightSearchPayload => {
  let parsedPayload: FlightSearchPayload;
  parsedPayload = {
    adult: parseInt(payload.adult),
    child: parseInt(payload.child),
    infant: parseInt(payload.infant),
    cabinClasses: payload.cabinClasses,
    flightTypeName: payload.flightTypeName,
    segs: payload.segs.map((s) => ({
      departureDate: s.departureDate,
      destination: s.destination,
      index: parseInt(s.index),
      destinationLocationType: s.destinationLocationType,
      origin: s.origin,
      originLocationType: s.originLocationType,
    })),
  };

  return parsedPayload;
};
