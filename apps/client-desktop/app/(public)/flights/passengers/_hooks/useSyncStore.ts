import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { usePassengersStore } from "../_store/passenger.store";
import { flightPayloadNormalizer } from "@sana/utilities/flight.payload.normalizer";
import qs from "qs";
import { UnParsedFlightSearchPayload } from "@sana/types/flight/flight";
export const useSyncPassengerStore = () => {
  const { setStore, offerId, requestedPayload } = usePassengersStore();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams) {
      const queries = searchParams.toString();
      const parsedQueries = qs.parse(queries) as unknown as { offerId: string; payload: UnParsedFlightSearchPayload };

      console.log(parsedQueries);
      const normalizedPayload = flightPayloadNormalizer(parsedQueries.payload);

      setStore({ offerId: parsedQueries.offerId, requestedPayload: normalizedPayload });
    }
  }, [searchParams]);

  console.log(offerId, requestedPayload);
};
