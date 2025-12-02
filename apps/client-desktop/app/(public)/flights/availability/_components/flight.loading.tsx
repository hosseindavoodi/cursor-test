import { citiesMap } from "@sana/utilities/mappers/cities.map";
import Image from "next/image";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import { useEffect, useState } from "react";
import { useAvailableStore } from "../../_store/available.store";
import { Progress } from "@sana/ui/components/progress";
import { getServices } from "../../../../../lib/services";
function FlightLoading() {
  const { requestedPayload, timeout, timePassed, setStore } = useFlightSearchStore();
  const { flight } = getServices();
  const { data, isPending, isRefetching } = flight.useFlightAvailable({
    queryKey: [requestedPayload!],
    enabled: Boolean(requestedPayload) && timePassed < timeout,
    // refetchInterval: enablePolling ? 4000 : false,
  });
  const origin = requestedPayload?.segs[0]?.origin;
  const destination = requestedPayload?.segs[0]?.destination;

  useEffect(() => {
    if (isPending || isRefetching) {
      const interval = setInterval(() => {
        if (timePassed >= timeout) {
          setStore((prev) => ({ ...prev, timePassed: timeout }));
          clearInterval(interval);
        } else {
          setStore((prev) => ({ ...prev, timePassed: prev.timePassed + 1 }));
        }
      }, 1000);

      return () => {
        clearInterval(interval);
        setStore((prev) => ({ ...prev, timePassed: 0 }));
      };
    }
  }, [isPending, isRefetching, requestedPayload]);

  return (
    <div className="absolute z-[200] py-10 top-0 w-full h-full bg-black/30 ">
      <div className="w-full flex flex-col gap-y-2 justify-center items-center sticky top-32">
        <div className="w-[740px] flex flex-col gap-y-4 justify-center p-0 ">
          <div className="w-full  h-[380px] relative rounded-[25px]">
            <Image
              src={"/flights/flight-search-loading.jpg"}
              alt=""
              className="rounded-[25px]"
              fill
            />
          </div>
          <div className="  ">
            <div className="w-full justify-center items-center p-[24px] rounded-[25px] bg-white flex flex-col ">
              <p className="text-[24px] font-semibold">در حال جستجوی پرواز</p>
              <p className="text-[16px] text-gray-500 mt-3">
                سناپرشین ، درحال جستجوی بلیط بهترین پروازها از {citiesMap[origin!]?.cityNameFa} به {citiesMap[destination!]?.cityNameFa}
              </p>
              <Progress
                className="w-[70%] mt-5"
                max={timeout}
                value={(timePassed * 100) / timeout}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightLoading;
