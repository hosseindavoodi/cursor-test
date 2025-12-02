import { Flight, FlightFilters } from "@sana/types/flight/flight";

export const flightFilterPipeline = (flight: Flight, filters: FlightFilters): boolean => {
  const isInPriceRange = priceFilter(flight, filters);
  const isInTimeRange = timeRangeFilter(flight, filters);
  const isInSelectedAirlines = airlineFilter(flight, filters);
  const isInSelectedBaggages = baggageFilter(flight, filters);

  return isInPriceRange && isInTimeRange && isInSelectedAirlines && isInSelectedBaggages;
};

const priceFilter = (flight: Flight, filters: FlightFilters): boolean => {
  const minAcceptedPrice = filters.price[0];
  const maxAcceptedPrice = filters.price[1];

  const totalPriceOfFlight = parseInt(flight.price.grandTotal);

  if (minAcceptedPrice && maxAcceptedPrice) {
    if (totalPriceOfFlight >= minAcceptedPrice && totalPriceOfFlight <= maxAcceptedPrice) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const timeRangeFilter = (flight: Flight, filters: FlightFilters): boolean => {
  const departure = flight.itineraries[0]?.segments[0]?.departure.at;

  if (departure) {
    const departureDateObject = new Date(departure);

    const totalMinutes = departureDateObject.getHours() * 60 + departureDateObject.getMinutes();

    const minAcceptedMinutes = filters.timeRange[0];
    const maxAcceptedMinutes = filters.timeRange[1];

    if (minAcceptedMinutes && maxAcceptedMinutes) {
      if (totalMinutes >= minAcceptedMinutes && totalMinutes <= maxAcceptedMinutes) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }
};

const airlineFilter = (flight: Flight, filters: FlightFilters): boolean => {
  const selectedAirlines = filters.airlines;

  const availableAirlinesInFlight = flight.itineraries.flatMap((i) => i.segments.map((s) => s.airline));

  if (selectedAirlines.length > 0) {
    let isAccepted = false;
    availableAirlinesInFlight.forEach((airline) => {
      if (selectedAirlines.includes(airline)) {
        isAccepted = true;
      }
    });

    return isAccepted;
  } else {
    return true;
  }
};

const baggageFilter = (flight: Flight, filters: FlightFilters): boolean => {
  const selectedBaggages = filters.baggages;

  const availableBaggageInFlight = flight.travelerPricings.flatMap((t) => t.fareDetailsBySegment.map((s) => s.includedCheckedBags.weight));

  if (selectedBaggages.length > 0) {
    let isAccepted = false;

    availableBaggageInFlight.forEach((baggage) => {
      if (selectedBaggages.includes(baggage)) {
        isAccepted = true;
      }
    });

    return isAccepted;
  } else {
    return true;
  }
};
