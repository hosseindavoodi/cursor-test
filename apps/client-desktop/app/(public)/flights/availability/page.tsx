"use client";

import Image from "next/image";
import { useFlightSearchStore } from "../../../_store/flight.search.store";
import FlightSearch from "../../_components/flight.search";
import MinimalSearch from "../_components/minimal.search";
import { useSyncStore } from "./_hooks/useSyncStore";
import Stepper from "./_components/stepper";
import Padding from "../../../_components/padding";
import Filters from "./_components/filters";
import CalendarCarousel from "./_components/calendar.carousel";
import Sorts from "./_components/sorts";
import { getServices } from "../../../../lib/services";
import { useEffect, useState } from "react";
import { useAvailableStore } from "../_store/available.store";
import FlightLoading from "./_components/flight.loading";
import Flights from "./_components/flights";
import FlightCard from "./_components/flight.card";
import { flightFilterPipeline } from "@sana/pipes/flight.filter.pipe";
import { sortFlights } from "@sana/utilities/flight.sorts";
import SearchExpiredPopup from "./_components/search.expire.dialog";
import NoFlightFound from "./_components/no.flight.found";
function FlightAvailability() {
  const sync = useSyncStore();
  const { requestedPayload, showSearchBar, timeout, timePassed } = useFlightSearchStore();
  const { filters, setStore, enablePolling, sort } = useAvailableStore();
  const { flight } = getServices();
  const { data, isPending, isRefetching, error } = flight.useFlightAvailable({
    queryKey: [requestedPayload!],
    enabled: Boolean(requestedPayload) && timePassed < timeout,
    retry: false,
    // refetchInterval: enablePolling ? 4000 : false,
  });

  // useEffect(() => {
  //   if (!requestedPayload) return;

  //   const timer = setTimeout(() => {
  //     setStore({ enablePolling: false });
  //   }, timeout * 1000); // 30 seconds

  //   return () => clearTimeout(timer); // cleanup
  // }, [requestedPayload]);

  const renderPrimaryLoading = (isPending || isRefetching) && !error;

  const flightFound = (data?.data.data && data.data.data.length > 0 && (!isPending || !isRefetching)) || isPending || isRefetching;

  return (
    <div className="w-full mt-5 min-h-screen">
      <div className="flex flex-col">
        <div className="px-[200px] pb-6">{!showSearchBar ? <MinimalSearch /> : <FlightSearch />}</div>
      </div>
      <div className="relative  min-h-[2000px]">
        <div className="w-full h-[400px] relative">
          <div className="w-full h-[300px] overflow-visible relative">
            <Image
              className="w-full "
              alt=""
              objectFit="cover"
              src={"/flights/available.png"}
              fill
            />
            <div className="w-full h-[40px] bg-gradient-to-b from-white/5 backdrop-blur-[10px] to-transparent absolute -bottom-5"></div>
          </div>

          <Image
            src={"/flights/cloud.png"}
            className="mt-4"
            alt=""
            fill
          />
        </div>

        <SearchExpiredPopup />
        {renderPrimaryLoading && <FlightLoading />}

        <div className="-mt-32 z-10 relative">
          <Padding>
            <Stepper step={1} />
            {flightFound ? (
              <div className="w-full mt-[20px] flex gap-x-[20px] ">
                <Filters flights={data?.data.data} />

                <div className="flex w-full flex-col gap-y-[24px]">
                  <CalendarCarousel />
                  <Sorts />
                  <Flights>
                    {data?.data.data
                      .filter((flight) => flightFilterPipeline(flight, filters))
                      .sort((a, b) => sortFlights(a, b, sort))
                      .map((flight) => (
                        <FlightCard flight={flight} />
                      ))}
                  </Flights>
                </div>
              </div>
            ) : (
              <div>
                <NoFlightFound />
              </div>
            )}
          </Padding>
        </div>
      </div>
    </div>
  );
}

export default FlightAvailability;
