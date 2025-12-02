import { FlightSearchResponse } from "@sana/types/flight/flight";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import { flightCabinMapper } from "@sana/utilities/mappers/flight.cabin.mapper";
import moment from "moment-jalaali";
import Image from "next/image";
import { Ban, Luggage, PlaneLanding, PlaneTakeoff } from "lucide-react";
import { airportsMap } from "@sana/utilities/mappers/airports.map";
import { citiesMap } from "@sana/utilities/mappers/cities.map";

import airlines from "@sana/constants/airlines.json";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { Button } from "@sana/ui/components/button";
import FlightDetailDialog from "./flight.detail.dialog";
import AirlineLogo from "../../_components/airline.logo";

function FlightCard(props: { flight: FlightSearchResponse["data"]["data"][1] }) {
  const { requestedPayload } = useFlightSearchStore();

  const calculateFareOfOneAdult = () => {
    return props.flight.travelerPricings.find((travler) => travler.travelerType === "ADULT")?.price.total ?? "0";
  };

  return (
    <div className="w-full flex  bg-[#FDFDFD]   rounded-[25px] border">
      <div className="w-full flex flex-col p-[25px]">
        <div className="w-full flex items-center gap-x-2 ">
          <p className="h-[30px] px-[16px] rounded-full bg-gray-100 text-gray-600">{props.flight.isCharter ? "جارتری" : "سیستمی"}</p>
          <p className="h-[30px] px-[16px] rounded-full bg-gray-100 text-gray-600">
            {flightCabinMapper[requestedPayload?.cabinClasses[0]!] ?? ""}
          </p>
        </div>
        <div className="w-full flex flex-col gap-y-7 ">
          {props.flight.itineraries.map((itinerary, index) => (
            <FlightItineraryCard
              itinerary={itinerary}
              flight={props.flight}
              itineraryIndex={index}
            />
          ))}
        </div>
        <div className="flex  w-fit">
          <FlightDetailDialog flight={props.flight}>
            <Button variant={"link"}>جزئیات بیشتر پرواز و قوانین</Button>
          </FlightDetailDialog>
        </div>
      </div>

      <div className="relative flex flex-col items-center ">
        <div className="w-[50px] h-[50px] border-b absolute z-[100] -top-5 rounded-full bg-white "></div>
        <div className="w-[1px] border-r border-dashed h-full border-gray-200  left-1/2 -translate-x-1/2"></div>
        <div className="w-[50px] h-[50px] border-t  absolute z-[100]  -bottom-4 rounded-full bg-white "></div>
      </div>
      <div className="w-[270px] px-10 min-w-[270px]  gap-y-3 h-full  flex flex-col justify-center items-center">
        <p>هر نفر (بزرگسال)</p>
        <p className="text-primary-400 text-[28px]  font-semibold">
          {rialToTomanConvertor(parseInt(calculateFareOfOneAdult())).toLocaleString()} <span className="text-[12px] text-black">تومان</span>
        </p>
        <FlightDetailDialog flight={props.flight}>
          <Button className="w-full py-7 rounded-full">انتخاب بلیط</Button>
        </FlightDetailDialog>
      </div>
    </div>
  );
}

export default FlightCard;

const FlightItineraryCard = (props: {
  itinerary: FlightSearchResponse["data"]["data"][1]["itineraries"][1];
  itineraryIndex: number;
  flight: FlightSearchResponse["data"]["data"][1];
}) => {
  const { requestedPayload } = useFlightSearchStore();

  const indexToNumber: Record<number, string> = {
    0: "پرواز رفت",
    1: "پرواز برگشت",
  };

  const originSegment = props.itinerary.segments[0];
  const allowedOriginBaggage = props.flight.travelerPricings
    .flatMap((traveler) => traveler)
    .flatMap((traveler) => traveler.fareDetailsBySegment)
    .find((s) => s.segmentId === originSegment?.id);

  const destinationSegment = props.itinerary.segments[props.itinerary.segments.length - 1];

  const availableAirlineInSegment = Array.from(new Set(props.itinerary.segments.map((s) => s.airline)));

  return (
    <div className="w-full gap-x-4 flex items-center">
      {requestedPayload?.flightTypeName === "round_trip" && (
        <p className="bg-gray-100 w-[200px] min-w-[200px] text-center py-3 text-gray-700 rounded-full">
          {indexToNumber[props.itineraryIndex]} ، {moment(originSegment?.departure.at).locale("fa").format("jD jMMMM jYYYY")}
        </p>
      )}

      <div className="flex w-[300px] relative items-center gap-x-3">
        <div className="flex items-center w-[90px] justify-center   ">
          {availableAirlineInSegment.map((airline, index) => (
            <AirlineLogo
              size={40}
              airlineCode={airline}
              index={index}
            />
          ))}
        </div>
        <div>
          <div className="font-semibold w-[140px]">
            {availableAirlineInSegment.length > 1 ? "چند ایرلاین" : airlines.find((a) => availableAirlineInSegment[0] === a.iata)?.name}
          </div>
          <div className="flex items-center gap-x-2">
            <Luggage
              className="text-gray-500"
              size={20}
            />
            <p className="text-[14px]">بار مجاز : {allowedOriginBaggage?.includedCheckedBags.weight} کیلوگرم</p>
          </div>
        </div>
      </div>

      <div className="w-full flex  gap-x-3">
        <div className="flex flex-col items-center justify-center gap-y-1">
          <div className="w-[50px] h-[50px] flex text-sandal-800 items-center justify-center rounded-full bg-[#FBF5F1]">
            <PlaneTakeoff size={20} />
          </div>
          <p className="">
            {citiesMap[originSegment?.departure.iataCode!]?.cityNameFa ?? airportsMap[originSegment?.departure.iataCode!]?.city.cityNameFa}
          </p>
          <p>{moment(originSegment?.departure.at).locale("fa").format("HH:mm")}</p>
        </div>
        <div className="w-full mb-12 flex items-center justify-between gap-x-2">
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>

          <div className="w-full flex relative justify-evenly  items-center">
            {props.itinerary.segments.map((segment, index, segments) => {
              if (segments[index + 1]) {
                if (segments[index + 1]?.departure.iataCode === segments[index]?.arrival.iataCode) {
                  // stop
                  const duration = moment(segments[index + 1]?.departure.at).diff(segment.arrival.at, "minute");

                  return (
                    <Stop
                      stopIata={segment.arrival.iataCode}
                      durationInMinutes={duration}
                    />
                  );
                }
                if (segments[index + 1]?.departure.iataCode !== segments[index]?.departure.iataCode) {
                  // airport change

                  return <></>;
                }
              }
            })}

            <hr className="w-full border border-dashed absolute right-0 border-gray-400" />
          </div>

          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-1">
          <div className="w-[50px] h-[50px] flex text-sandal-800 items-center justify-center rounded-full bg-[#FBF5F1]">
            <PlaneLanding size={20} />
          </div>
          <p>
            {citiesMap[destinationSegment?.arrival.iataCode!]?.cityNameFa ??
              airportsMap[destinationSegment?.arrival.iataCode!]?.city.cityNameFa}
          </p>
          <p>{moment(destinationSegment?.arrival.at).locale("fa").format("HH:mm")}</p>
        </div>
      </div>

      {/* {props.itinerary.segments.map((segment, index, segments) => {
        if (segments[index + 1]) {
          // stop
          if (segments[index + 1]?.departure.iataCode === segments[index]?.arrival.iataCode) {
          }

          //airport change
          if (segments[index + 1]?.departure.iataCode !== segments[index]?.arrival.iataCode) {
          }
        }

        return <FlightCard flight={}/>
      })} */}
    </div>
  );
};

const Stop = (props: { stopIata: string; durationInMinutes: number }) => {
  return (
    <div className="relative z-[100]">
      <p className="absolute  left-1/2 -translate-x-1/2 w-[200px] text-center -top-6 text-[10px]">
        {citiesMap[props.stopIata]?.cityNameFa ?? airportsMap[props.stopIata]?.airportNameFa ?? "-"}
      </p>
      <p className="absolute  left-1/2 -translate-x-1/2 top-5 text-[16px]">{formatDurationHHMM(props.durationInMinutes)} </p>
      <div className="w-2 h-2 bg-gray-700  rounded-full"></div>
    </div>
  );
};

function formatDurationHHMM(minutes: number) {
  if (!Number.isInteger(minutes) || minutes < 0) {
    throw new Error("Duration must be a non-negative integer");
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  // Pad hours and minutes with leading zeros
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMins = String(mins).padStart(2, "0");

  return `${paddedHours}:${paddedMins}`;
}
