import { Flight, FlightSorts } from "@sana/types/flight/flight";

export const sortFlights = (a: Flight, b: Flight, sort: FlightSorts): number => {
  switch (sort) {
    case FlightSorts.FROM_LOWEST_PRICE:
      return sortFlightFromLowestPriceToHighest(a, b);
    case FlightSorts.FROM_HIGHEST_PRICE:
      return sortFlightFromHighestPriceToLowest(a, b);
    case FlightSorts.FROM_CLOSEST_FLIGHT:
      return sortFlightFromClosestFlight(a, b);
    case FlightSorts.FROM_LATEST_FLIGHT:
      return sortFlightFromLatestFlight(a, b);

    default:
      return 1;
  }
};

const sortFlightFromLowestPriceToHighest = (a: Flight, b: Flight): number => {
  const aFlightPrice = a.price.grandTotal;
  const bFlightPrice = a.price.grandTotal;

  return aFlightPrice > bFlightPrice ? -1 : 1;
};

const sortFlightFromHighestPriceToLowest = (a: Flight, b: Flight): number => {
  const aFlightPrice = a.price.grandTotal;
  const bFlightPrice = a.price.grandTotal;

  return aFlightPrice > bFlightPrice ? 1 : -1;
};

const sortFlightFromClosestFlight = (a: Flight, b: Flight): number => {
  const aFlightDeparture = a.itineraries[0]?.segments[0]?.departure.at;
  const bFlightDeparture = b.itineraries[0]?.segments[0]?.departure.at;

  const aDepartureInMinutes = new Date(aFlightDeparture!).getHours() * 60 + new Date(aFlightDeparture!).getMinutes();
  const bDepartureInMinutes = new Date(bFlightDeparture!).getHours() * 60 + new Date(bFlightDeparture!).getMinutes();

  return aDepartureInMinutes > bDepartureInMinutes ? 1 : -1;
};

const sortFlightFromLatestFlight = (a: Flight, b: Flight): number => {
  const aFlightDeparture = a.itineraries[0]?.segments[0]?.departure.at;
  const bFlightDeparture = b.itineraries[0]?.segments[0]?.departure.at;

  const aDepartureInMinutes = new Date(aFlightDeparture!).getHours() * 60 + new Date(aFlightDeparture!).getMinutes();
  const bDepartureInMinutes = new Date(bFlightDeparture!).getHours() * 60 + new Date(bFlightDeparture!).getMinutes();

  return aDepartureInMinutes > bDepartureInMinutes ? -1 : 1;
};
