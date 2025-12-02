import { FlightSearchPayload, FlightSearchSegments, UnParsedFlightSearchPayload } from "@sana/types/flight/flight";

export const flightSearchFormatter = (payload: FlightSearchPayload): FlightSearchPayload => {
  let normalizedPayload: FlightSearchPayload;

  if (payload.flightTypeName === "round_trip") {
    let prevSegments = [...payload.segs];

    if (prevSegments[0] && prevSegments[1]) {
      prevSegments[1].origin = prevSegments[0]?.destination;
      prevSegments[1].originLocationType = prevSegments[0]?.destinationLocationType;
      prevSegments[1].destination = prevSegments[0]?.origin;
      prevSegments[1].destinationLocationType = prevSegments[0]?.originLocationType;
      normalizedPayload = { ...payload, segs: prevSegments };

      return { ...normalizedPayload, segs: prevSegments };
    }
  }

  return { ...payload };
};
