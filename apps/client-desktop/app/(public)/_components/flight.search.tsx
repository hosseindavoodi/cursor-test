"use client";
import { Toggle } from "@sana/ui/components/toggle";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import OriginDestinationPicker from "./origin.destination.picker";
import DatePicker from "./date.picker";
import PassengerPicker from "./passenger.picker";
import { Button } from "@sana/ui/components/button";
import qs from "qs";
import { useEffect } from "react";
import { flightSearchFormatter } from "@sana/utilities/flight.search.formatter";
import { useRouter } from "next/navigation";

function FlightSearch() {
  const { setStore, payload, updateFlightType, inputs } = useFlightSearchStore();

  const router = useRouter();

  const handleSearchFlight = () => {
    const normalizedPayload = flightSearchFormatter(payload);

    const stringfyPayload = qs.stringify(normalizedPayload);

    setStore({ showSearchBar: false });
    router.push(`/flights/availability?${stringfyPayload}`);
  };

  return (
    <div className="w-full flex flex-col gap-y-[40px] ">
      <div className="flex items-center gap-x-[12px]">
        <Toggle
          onPressedChange={() => updateFlightType("one_way")}
          pressed={payload.flightTypeName === "one_way"}
        >
          یک طرفه
        </Toggle>
        <Toggle
          onPressedChange={() => updateFlightType("round_trip")}
          pressed={payload.flightTypeName === "round_trip"}
        >
          رفت و برگشت
        </Toggle>
        {/* <Toggle
          onPressedChange={() => setStore({ flightType: "MULTI_WAYS" })}
          pressed={flightType === "MULTI_WAYS"}
        >
          چند مسیره
        </Toggle> */}
      </div>

      <div className="w-full  flex gap-x-[30px] items-end">
        <OriginDestinationPicker routeIndex={0} />
        <DatePicker routeIndex={0} />
        <PassengerPicker />
        <Button
          onClick={handleSearchFlight}
          className="w-[160px] min-w-[160px] h-[52px] rounded-full"
        >
          جستجو
        </Button>
      </div>
    </div>
  );
}

export default FlightSearch;
