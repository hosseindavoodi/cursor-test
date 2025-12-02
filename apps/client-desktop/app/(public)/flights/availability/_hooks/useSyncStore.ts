"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import qs from "qs";
import { flightPayloadNormalizer } from "@sana/utilities/flight.payload.normalizer";
import { UnParsedFlightSearchPayload } from "@sana/types/flight/flight";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import { citiesMap } from "@sana/utilities/mappers/cities.map";
import moment from "moment-jalaali";
import { useAvailableStore } from "../../_store/available.store";

export const useSyncStore = () => {
  const searchParams = useSearchParams();
  const { payload, setStore, requestedPayload } = useFlightSearchStore();
  const { setStore: setAvailableStore } = useAvailableStore();
  useEffect(() => {
    const parsedPayload = flightPayloadNormalizer(qs.parse(searchParams.toString()) as unknown as UnParsedFlightSearchPayload);

    setStore({
      payload: structuredClone(parsedPayload),
      requestedPayload: structuredClone(parsedPayload),
      inputs: parsedPayload.segs.map((s) => ({
        originPreview: citiesMap[s.origin]?.cityNameFa ?? "",
        destinationPreview: citiesMap[s.destination]?.cityNameFa ?? "",
        departure_date: moment(s.departureDate).locale("fa").format("dddd jD jMMMM"),
      })),
    });
    setAvailableStore({ enablePolling: true });
  }, [searchParams]);
};
