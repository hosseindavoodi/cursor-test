import { Button } from "@sana/ui/components/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@sana/ui/components/accordion";
import Slider from "./slider";
import { useAvailableStore } from "../../_store/available.store";
import { Input } from "@sana/ui/components/input";
import { Flight } from "@sana/types/flight/flight";
import { useEffect, useState } from "react";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { minutesToHHmm } from "@sana/utilities/minutes.to.hh.mm";
import Image from "next/image";
import airlines from "@sana/constants/airlines.json";

function Filters(props: { flights?: Flight[] }) {
  const { filters, setStore, airlinesOptions, baggageOptions, pricingOptions, timeRangeOptions } = useAvailableStore();

  const findLowestHighestPrice = () => {
    const prices = props.flights?.map((f) => parseInt(f.price.grandTotal));

    const lowestPrice = prices?.sort((a, b) => a - b)[0];
    const highestPrice = prices?.sort((a, b) => b - a)[0];

    if (lowestPrice && highestPrice) {
      setStore({
        pricingOptions: {
          minPrice: lowestPrice,
          maxPrice: highestPrice,
        },
      });
      setStore((prev) => ({ ...prev, filters: { ...prev.filters, price: [lowestPrice, highestPrice] } }));
    }
  };

  const findLowestHighestTime = () => {
    const times = props.flights
      ?.flatMap((f) =>
        f.itineraries.flatMap((i) => ({
          date: i.segments[0]?.departure.at,
          totalMinutes: new Date(i.segments[0]?.departure.at!).getMinutes() + new Date(i.segments[0]?.departure.at!).getHours() * 60,
        }))
      )
      .sort((a, b) => a.totalMinutes - b.totalMinutes);

    if (times && times[0] && times[times.length - 1]) {
      setStore({
        timeRangeOptions: {
          minTimeInMinutes: times[0].totalMinutes,
          maxTimeInMinutes: times[times.length - 1]!.totalMinutes,
        },
      });

      setStore((prev) => ({
        ...prev,
        filters: { ...prev.filters, timeRange: [times[0]!.totalMinutes, times[times.length - 1]!.totalMinutes] },
      }));
    }
  };

  const findAirlines = () => {
    const airlineCodes = props.flights?.flatMap((f) => f.itineraries.flatMap((i) => i.segments.map((s) => s.airline)));

    const uniqueCodes = Array.from(new Set(airlineCodes));

    console.log(uniqueCodes);
    setStore({ airlinesOptions: uniqueCodes });
  };

  const findBaggages = () => {
    const baggages = props.flights?.flatMap((f) =>
      f.travelerPricings.flatMap((t) => t.fareDetailsBySegment.map((s) => s.includedCheckedBags.weight))
    );

    const uniqueBaggage = Array.from(new Set(baggages));

    setStore({ baggageOptions: uniqueBaggage });
  };

  useEffect(() => {
    if (props.flights) {
      findLowestHighestPrice();
      findLowestHighestTime();
      findAirlines();
      findBaggages();
    }
  }, [props.flights]);

  return (
    <div className="w-[362px] py-[32px] px-[16px]  border rounded-[25px] min-w-[362px]">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-x-2">
          <p className="font-semibold text-[17px]">فیلتر</p>
          <p className="text-gray-600 text-[14px]">3 فیلتر انتخاب شده</p>
        </div>
        <Button
          variant={"link"}
          className="text-red-400"
        >
          حذف فیلترها
        </Button>
      </div>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>محدوده قیمت</p>
          </AccordionTrigger>
          <AccordionContent>
            <Slider
              min={pricingOptions.minPrice}
              max={pricingOptions.maxPrice}
              setValue={(values) => {
                setStore((prev) => ({ ...prev, filters: { ...prev.filters, price: values } }));
              }}
              value={filters.price}
            />
            <div className="w-full flex justify-between">
              <p>ارزان ترین</p>
              <p>گران ترین</p>
            </div>

            <div className="w-full px-1 grid grid-cols-2 mt-4 gap-x-[9px]">
              <div className="flex flex-col gap-y-2">
                <p>از</p>
                <div className="relative">
                  <Input
                    value={rialToTomanConvertor(filters.price[0] ?? 0)?.toLocaleString()}
                    className="w-full h-[45px] rounded-[8px]"
                  />
                  <p className="absolute top-1/2 -translate-y-1/2 font-semibold left-3 text-[11px] ">تومان</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>تا</p>
                <div className="relative">
                  <Input
                    value={rialToTomanConvertor(filters.price[1] ?? 0)?.toLocaleString()}
                    className="w-full h-[45px] rounded-[8px]"
                  />
                  <p className="absolute top-1/2 font-semibold -translate-y-1/2 left-3 text-[11px] ">تومان</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr />

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>بازه زمانی</p>
          </AccordionTrigger>
          <AccordionContent>
            <Slider
              min={timeRangeOptions.minTimeInMinutes}
              max={timeRangeOptions.maxTimeInMinutes}
              value={filters.timeRange}
              setValue={(values) => setStore((prev) => ({ ...prev, filters: { ...prev.filters, timeRange: values } }))}
            />

            <div className="w-full flex px-1 justify-between">
              <p>{minutesToHHmm(filters.timeRange[0]!)}</p>
              <p>{minutesToHHmm(filters.timeRange[1]!)}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr />
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>ایرلاین</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-2">
            {airlinesOptions.map((airlineCode) => (
              <div className="w-full px-1 py-1 flex items-center gap-x-3">
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setStore((prev) => ({ ...prev, filters: { ...prev.filters, airlines: [...prev.filters.airlines, airlineCode] } }));
                    } else {
                      setStore((prev) => ({
                        ...prev,
                        filters: { ...prev.filters, airlines: prev.filters.airlines.filter((airline) => airline !== airlineCode) },
                      }));
                    }
                  }}
                  checked={filters.airlines.includes(airlineCode)}
                  type="checkbox"
                  className="rounded-sm text-black focus:ring-black w-5 h-5 "
                />
                <div className="flex items-center gap-x-2">
                  <Image
                    alt=""
                    width={40}
                    height={40}
                    src={`${process.env.NEXT_PUBLIC_MINIO_URL}/public-assets/airlines/${airlineCode}.png`}
                  />
                  <p>{airlines.find((a) => a.iata === airlineCode)?.name}</p>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr />
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p>میزان بار مجاز</p>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-y-2">
            {baggageOptions
              .sort((a, b) => a - b)
              .map((baggage) => (
                <div className="w-full px-1 py-1 flex items-center gap-x-3">
                  <input
                    onChange={(e) => {
                      if (e.target.checked) {
                        setStore((prev) => ({ ...prev, filters: { ...prev.filters, baggages: [...prev.filters.baggages, baggage] } }));
                      } else {
                        setStore((prev) => ({
                          ...prev,
                          filters: { ...prev.filters, baggages: prev.filters.baggages.filter((b) => b !== baggage) },
                        }));
                      }
                    }}
                    checked={filters.baggages.includes(baggage)}
                    type="checkbox"
                    className="rounded-sm text-black focus:ring-black w-5 h-5 "
                  />
                  {baggage === 0 ? <p>بدون بار</p> : <p>{baggage} کیلوگرم</p>}
                </div>
              ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Filters;
