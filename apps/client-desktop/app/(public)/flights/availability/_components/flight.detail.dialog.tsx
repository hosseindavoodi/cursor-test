import { CabinClass, FlightSearchResponse } from "@sana/types/flight/flight";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import { Toggle } from "@sana/ui/components/toggle";
import { ReactNode, useEffect, useState } from "react";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import Image from "next/image";
import AirlineLogo from "../../_components/airline.logo";
import airports from "@sana/constants/airports.json";
import airlines from "@sana/constants/airlines.json";
import moment from "moment-jalaali";
import { minutesToPersian } from "@sana/utilities/minutes.to.persian";
import { Plane } from "lucide-react";
import { flightCabinMapper } from "@sana/utilities/mappers/flight.cabin.mapper";
import { airportsMap } from "@sana/utilities/mappers/airports.map";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { Button } from "@sana/ui/components/button";
import { getServices } from "../../../../../lib/services";
import { toast } from "sonner";
import qs from "qs";
import { useRouter } from "next/navigation";
function FlightDetailDialog(props: { children: ReactNode; flight: FlightSearchResponse["data"]["data"][1] }) {
  const { requestedPayload, timePassed, timeout } = useFlightSearchStore();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<"flightDetails" | "flightRefundRules">("flightDetails");
  const { flight } = getServices();
  const { data, isPending, isRefetching } = flight.useFlightAvailable({
    queryKey: [requestedPayload!],
    enabled: Boolean(requestedPayload) && timePassed < timeout,
    // refetchInterval: enablePolling ? 4000 : false,
  });

  const { data: savedFlightData, mutateAsync: saveFlightHandler, isPending: isSaving } = flight.useSaveFlightOffer();

  useEffect(() => {
    if (isRefetching) {
      setOpen(false);
    }
  }, [isRefetching]);

  const handleSaveFlightOffer = async () => {
    try {
      const data = await saveFlightHandler({ offer: props.flight });

      const queries = qs.stringify({ offerId: data.id, payload: requestedPayload });

      router.push(`/flights/passengers?${queries}`);

      toast.success("انتخاب بلیط با موفقیت انجام شد");
    } catch (error) {
      toast.error("خطای در انتخاب بلیط بوجود آمده است لطفا دقایقی دیگر دوباره تلاش کنید");
    }
  };

  return (
    <Dialog
      onOpenChange={setOpen}
      open={open}
    >
      <DialogTrigger className="w-full">{props.children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-none max-h-[84%] flex flex-col w-[1200px] scrollbar-thumb-primary-500"
      >
        {/* <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader> */}
        <div className="w-full   h-full flex-1 pl-3 py-4 scrollbar-thin  overflow-y-scroll flex gap-x-[24px] ">
          <div className="w-full  relative flex flex-col gap-y-5">
            <div className="w-full  z-[999] bg-white h-[40px] gap-x-3 flex items-center">
              <Toggle
                pressed={selectedTab === "flightDetails"}
                onPressedChange={() => setSelectedTab("flightDetails")}
                className="py-5 bg-white"
              >
                جزئیات پرواز
              </Toggle>
              <Toggle
                pressed={selectedTab === "flightRefundRules"}
                onPressedChange={() => setSelectedTab("flightRefundRules")}
                className="py-5 bg-white"
              >
                قوانین و مقررات
              </Toggle>
            </div>
            <div className=" w-full flex flex-col gap-y-5">
              {selectedTab === "flightDetails" && (
                <>
                  {props.flight.itineraries.map((itenery, index) => (
                    <IteneryCard
                      flightType={requestedPayload?.flightTypeName!}
                      itenery={itenery}
                      flight={props.flight}
                      iteneryIndex={index}
                      key={index}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          <div className=" sticky top-0 h-[calc(100dvh-24dvh)] w-[400px] p-[15px] flex flex-col justify-between  gap-y-5  border rounded-[20px]">
            <div className="flex flex-col gap-y-4">
              <p className="font-semibold text-[17px]">جزئیات قیمت </p>

              <Prices
                price={props.flight.price}
                travlersPricings={props.flight.travelerPricings}
              />
            </div>
            <Button
              onClick={() => handleSaveFlightOffer()}
              disabled={isSaving}
              className="h-[50px] disabled:bg-primary-500 rounded-full"
            >
              {isSaving ? <span className="loader" /> : <p>انتخاب بلیط و ادامه</p>}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FlightDetailDialog;

const IteneryCard = (props: {
  flight: FlightSearchResponse["data"]["data"][1];
  itenery: FlightSearchResponse["data"]["data"][1]["itineraries"][1];
  iteneryIndex: number;
  flightType: "one_way" | "round_trip";
}) => {
  return (
    <div className="w-full rounded-[25px] p-[25px] border">
      {props.itenery.segments.map((segment, index, segments) => {
        if (segments[index + 1]) {
          if (segment.arrival.iataCode === segments[index + 1]?.departure.iataCode) {
            return (
              <>
                <FlightSegment
                  travelerPricings={props.flight.travelerPricings}
                  isLastSegment={segments.length - 1 === index}
                  segmentIndex={index}
                  segment={segment}
                  {...props}
                />
                <Stop
                  durationInMinutes={moment(segments[index + 1]?.departure.at).diff(segment.arrival.at, "minute")}
                  iata={segment.arrival.iataCode}
                />
              </>
            );
          } else {
            return (
              <>
                <FlightSegment
                  travelerPricings={props.flight.travelerPricings}
                  isLastSegment={segments.length - 1 === index}
                  segmentIndex={index}
                  {...props}
                  segment={segment}
                />
                <AirportChange />
              </>
            );
          }
        } else {
          return (
            <FlightSegment
              travelerPricings={props.flight.travelerPricings}
              isLastSegment={segments.length - 1 === index}
              segmentIndex={index}
              {...props}
              segment={segment}
              key={segment.id}
            />
          );
        }
      })}
    </div>
  );
};

const FlightSegment = (props: {
  itenery: FlightSearchResponse["data"]["data"][1]["itineraries"][1];

  iteneryIndex: number;
  segment: FlightSearchResponse["data"]["data"][1]["itineraries"][1]["segments"][1];
  segmentIndex: number;
  travelerPricings: FlightSearchResponse["data"]["data"][1]["travelerPricings"];
  isLastSegment: boolean;
  flightType: "one_way" | "round_trip";
}) => {
  const { requestedPayload } = useFlightSearchStore();

  const indexToFlightTitle: Record<number, string> = {
    0: "پرواز رفت",
    1: "پرواز برگشت",
  };

  const originSegmentCountry = airports.find((country) =>
    country.cities.find(
      (c) =>
        c.city_code === props.segment.departure.iataCode ||
        c.airports.find((airport) => airport.airport_code === props.segment.departure.iataCode)
    )
  );

  const destinationSegmentCountry = airports.find((country) =>
    country.cities.find(
      (c) =>
        c.city_code === props.segment.arrival.iataCode ||
        c.airports.find((airport) => airport.airport_code === props.segment.arrival.iataCode)
    )
  );

  const originSegmentCity = airports
    .flatMap((country) => country.cities)
    .find(
      (city) =>
        city.city_code === props.segment.departure.iataCode ||
        city.airports.find((airport) => airport.airport_code === props.segment.departure.iataCode)
    );

  const destinationSegmentCity = airports
    .flatMap((country) => country.cities)
    .find(
      (city) =>
        city.city_code === props.segment.arrival.iataCode ||
        city.airports.find((airport) => airport.airport_code === props.segment.arrival.iataCode)
    );

  const originSegmentAirport = originSegmentCity?.airports.find((a) => a.airport_code === props.segment.departure.iataCode);

  const destinationSegmentAirport = destinationSegmentCity?.airports.find((a) => a.airport_code === props.segment.arrival.iataCode);

  const durationOfSegment = moment(props.segment.arrival.at).diff(props.segment.departure.at, "m");

  const adultBaggageForSegment = props.travelerPricings
    .find((traveler) => traveler.travelerType === "ADULT")
    ?.fareDetailsBySegment.find((fare) => fare.segmentId === props.segment.id)?.includedCheckedBags;

  const childBaggageForSegment = props.travelerPricings
    .find((traveler) => traveler.travelerType === "CHILD")
    ?.fareDetailsBySegment.find((fare) => fare.segmentId === props.segment.id)?.includedCheckedBags;

  const segmentClass = props.travelerPricings
    .flatMap((t) => t.fareDetailsBySegment)
    .find((detail) => detail.segmentId === props.segment.id)?.class;

  return (
    <div className="flex flex-col gap-y-[24px]">
      <div className="w-full flex text-right justify-between items-center">
        <div className="w-full flex items-center gap-x-2">
          <AirlineLogo
            size={30}
            airlineCode={props.segment.airline}
            index={0}
          />
          <div className="font-medium text-[16px]">
            {props.flightType === "round_trip" ? (
              <>
                <p>
                  {indexToFlightTitle[props.iteneryIndex]} : {originSegmentCity?.city_name_fa} به {destinationSegmentCity?.city_name_fa}
                </p>
              </>
            ) : (
              <>
                <p>
                  پرواز از {originSegmentCity?.city_name_fa} به {destinationSegmentCity?.city_name_fa}{" "}
                </p>
              </>
            )}

            <p className="text-[12px] text-gray-500">{airlines.find((a) => a.iata === props.segment.airline)?.name}</p>
          </div>
        </div>
        <div className="flex min-w-fit text-[12px] text-gray-600 font-medium items-center gap-x-3">
          <p>{minutesToPersian(durationOfSegment)} </p>
        </div>
      </div>

      <div className="w-[500px] flex flex-col justify-between relative  h-[110px]">
        <div className="w-full flex justify-between items-center">
          <div className="text-center">
            <p className="text-[16px] font-semibold">{moment(props.segment.departure.at).locale("fa").format("HH:mm")}</p>
            <p className="text-[12px] text-gray-500 font-medium">
              {moment(props.segment.departure.at).locale("fa").format("dddd jD jMMMM jYYYY")}
            </p>
          </div>

          <div className="w-[250px]">
            <p className="font-medium text-[12px]">
              {originSegmentAirport?.airport_name_fa ?? originSegmentCity?.city_name_fa} (
              {originSegmentAirport?.airport_code ?? originSegmentCity?.city_code})
            </p>
            <p className="text-gray-500 text-[12px]">
              {originSegmentCity?.city_name_fa} ، {originSegmentCountry?.country_name_fa}
            </p>
          </div>
        </div>

        <div className="absolute left-[67%] -translate-x-1/2 h-full border-r border-r-gray-500 border-dashed">
          <Plane
            className="rotate-[135deg] top-0 absolute left-1/2 -translate-x-1/2 fill-gray-600 text-gray-600"
            size={20}
          />
          <div className="w-[5px] h-[5px] bg-gray-600 rounded-full -bottom-2 absolute left-1/2 -translate-x-1/2"></div>
        </div>

        <div className="w-full flex justify-between items-center">
          <div className="text-center">
            <p className="text-[16px] font-semibold">{moment(props.segment.arrival.at).locale("fa").format("HH:mm")}</p>
            <p className="text-[12px] text-gray-500 font-medium">
              {moment(props.segment.arrival.at).locale("fa").format("dddd jD jMMMM jYYYY")}
            </p>
          </div>

          <div className="w-[250px]">
            <p className="font-medium text-[12px]">
              {destinationSegmentAirport?.airport_name_fa ?? destinationSegmentCity?.city_name_fa} (
              {destinationSegmentAirport?.airport_code ?? destinationSegmentCity?.city_code})
            </p>
            <p className="text-gray-500 text-[12px]">
              {destinationSegmentCity?.city_name_fa} ، {destinationSegmentCountry?.country_name_fa}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-2 text-[12px]">
        <p className="bg-gray-100 h-[30px] px-4 flex flex-col justify-center items-center rounded-full text-gray-600 ">
          {flightCabinMapper[requestedPayload!.cabinClasses[0] as CabinClass]}
        </p>
        <p className="bg-gray-100 h-[30px] px-4 flex flex-col justify-center items-center rounded-full text-gray-600 ">
          بار مجاز بزرگسال : {adultBaggageForSegment?.weight} کیلوگرم
        </p>
        <p className="bg-gray-100 h-[30px] px-4 flex flex-col justify-center items-center rounded-full text-gray-600 ">
          بار مجاز کودک : {childBaggageForSegment?.weight} کیلوگرم
        </p>
        <p className="bg-gray-100 h-[30px] px-4 flex flex-col justify-center items-center rounded-full text-gray-600 ">
          کلاس نرخی : {segmentClass}
        </p>
      </div>
    </div>
  );
};

const Stop = (props: { durationInMinutes: number; iata: string }) => {
  return (
    <div className="w-[500px] my-4 border bg-gradient-to-bl from-[#FEF5ED] to-[#FEF2E7] rounded-[25px] border-[#F6DFCC] text-right p-3">
      <p className="font-semibold text-[12px]">
        توقف {minutesToPersian(props.durationInMinutes)} در {airportsMap[props.iata]?.airportNameFa} ({props.iata})
      </p>
    </div>
  );
};

const AirportChange = () => {
  return <div className="w-full border p-3">AIRPORT CHANGE</div>;
};

const Prices = (props: {
  travlersPricings: FlightSearchResponse["data"]["data"][1]["travelerPricings"];
  price: FlightSearchResponse["data"]["data"][1]["price"];
}) => {
  const calculatePrices = () => {
    let totalTaxPrice = 0;

    let totalAdultPrice = 0;
    let totalChildPrice = 0;
    let totalInfantPrice = 0;

    const adultPrices = props.travlersPricings
      .filter((price) => price.travelerType === "ADULT")
      .forEach((adult) => (totalAdultPrice += parseInt(adult.price.total)));

    const childPrices = props.travlersPricings
      .filter((price) => price.travelerType === "CHILD")
      .forEach((child) => (totalChildPrice += parseInt(child.price.total)));

    const infatPrices = props.travlersPricings
      .filter((price) => price.travelerType === "INFANT")
      .forEach((infant) => (totalInfantPrice += parseInt(infant.price.total)));

    return {
      totalAdultPrice,
      totalChildPrice,
      totalInfantPrice,
      totalTaxPrice,
    };
  };

  const { totalAdultPrice, totalChildPrice, totalInfantPrice, totalTaxPrice } = calculatePrices();
  const { requestedPayload } = useFlightSearchStore();

  return (
    <div className="w-full flex flex-col gap-y-[12px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex text-[14px] text-gray-500 font-medium items-center gap-x-2">
          <p>مسافر بزرگسال</p>
          <p>x</p>
          <p>{requestedPayload?.adult}</p>
        </div>
        <p className="text-[14px] font-semibold tabular-nums">
          {rialToTomanConvertor(totalAdultPrice).toLocaleString()} <span className="font-semifont-semibold text-[10px]">تومان</span>
        </p>
      </div>
      {requestedPayload && requestedPayload.child >= 1 && (
        <div className="w-full flex items-center justify-between">
          <div className="flex text-[14px] text-gray-500 font-medium items-center gap-x-2">
            <p>مسافر کودک</p>
            <p>x</p>
            <p>{requestedPayload?.child}</p>
          </div>
          <p className="text-[14px] font-semibold tabular-nums">
            {rialToTomanConvertor(totalChildPrice).toLocaleString()} <span className="font-semifont-semibold text-[10px]">تومان</span>
          </p>
        </div>
      )}

      {requestedPayload && requestedPayload.infant >= 1 && (
        <div className="w-full flex items-center justify-between">
          <div className="flex text-[14px] text-gray-500 font-medium items-center gap-x-2">
            <p>مسافر نوزاد</p>
            <p>x</p>
            <p>{requestedPayload?.infant}</p>
          </div>
          <p className="text-[14px] font-semibold tabular-nums">
            {rialToTomanConvertor(totalInfantPrice).toLocaleString()} <span className="font-semibold text-[10px]">تومان</span>
          </p>
        </div>
      )}

      <hr />

      <div className="w-full flex items-center justify-between">
        <p className="text-[14px] text-gray-500 font-medium">مبلغ نهایی</p>
        <p className="text-[16px] font-semibold tabular-nums">
          {rialToTomanConvertor(parseInt(props.price.grandTotal)).toLocaleString()} <span className="text-[10px]">تومان</span>
        </p>
      </div>
    </div>
  );
};
