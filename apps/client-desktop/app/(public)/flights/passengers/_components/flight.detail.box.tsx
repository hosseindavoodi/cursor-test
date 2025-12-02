import Link from "next/link";
import { usePassengersStore } from "../_store/passenger.store";
import { CabinClass, Flight } from "@sana/types/flight/flight";
import AirlineLogo from "../../_components/airline.logo";
import moment from "moment-jalaali";
import airports from "@sana/constants/airports.json";
import { flightCabinMapper } from "@sana/utilities/mappers/flight.cabin.mapper";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import qs from "qs";
import { Button } from "@sana/ui/components/button";

moment.loadPersian({ dialect: "persian-modern" });
function FlightDetailBox(props: { flight: Flight; onSave: () => Promise<void> }) {
  const { requestedPayload } = usePassengersStore();
  const flightOriginIata = props.flight.itineraries[0]?.segments[0]?.departure.iataCode;
  const flightDesitnationIata = props.flight.itineraries[0]?.segments[props.flight.itineraries[0].segments.length - 1]?.arrival.iataCode;
  const originCity = airports
    .flatMap((country) => country.cities)
    .find((city) => city.city_code === flightOriginIata || city.airports.find((airport) => airport.airport_code === flightOriginIata));

  const destinationCity = airports
    .flatMap((country) => country.cities)
    .find(
      (city) => city.city_code === flightDesitnationIata || city.airports.find((airport) => airport.airport_code === flightDesitnationIata)
    );

  return (
    <div className="w-full flex flex-col gap-y-[24px] border rounded-[25px] p-[25px]">
      <div className="w-full flex items-center justify-between">
        <p className="text-[18px] font-semibold">جزئیات پرواز</p>
        <Link
          href={`/flights/availability?${qs.stringify(requestedPayload)}`}
          className="text-[14px] font-medium text-primary-500"
        >
          تغییر پرواز
        </Link>
      </div>
      <hr />

      <p className="font-semibold text-[14px] ">
        {originCity?.city_name_fa} به {destinationCity?.city_name_fa}
      </p>

      {props.flight.itineraries.map((itenery, index, iteneries) => (
        <>
          <IteneryCard
            itenery={itenery}
            key={index}
            index={index}
          />
          {iteneries.length - 1 !== index && <hr />}
        </>
      ))}

      <div className="w-full p-[20px] rounded-[20px] bg-gray-100">
        <p className="text-[14px]">مبلغ قابل پرداخت</p>
        <div className="flex justify-end items-center">
          <p className="text-[28px] font-semibold">
            {rialToTomanConvertor(parseInt(props.flight.price.grandTotal)).toLocaleString()} <span className="text-[12px]">تومان</span>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-1">
        <Button
          onClick={() => props.onSave()}
          className="h-[52px] w-full rounded-full"
        >
          تایید و ادامه
        </Button>
        <p className="font-semibold text-[14px]">
          رفتن به مرحله بعد به معنای پدیرفتن{" "}
          <Link
            href={""}
            className="underline text-primary-500"
          >
            قوانین سایت
          </Link>{" "}
          است.
        </p>
      </div>
    </div>
  );
}

export default FlightDetailBox;

const IteneryCard = (props: { itenery: Flight["itineraries"][1]; index: number }) => {
  const { requestedPayload } = usePassengersStore();

  const airlines = Array.from(new Set(props.itenery.segments.map((seg) => seg.airline)));

  return (
    <div className="flex items-start gap-x-2">
      <div className="flex items-center">
        {airlines.map((code, index) => (
          <AirlineLogo
            offset={28}
            parentClassName="p-1 border-none"
            airlineCode={code}
            size={42}
            index={index}
          />
        ))}
      </div>
      <div>
        {requestedPayload?.flightTypeName === "round_trip" ? (
          <>
            <p className="font-semibold text-[14px]">{props.index === 0 ? "پرواز رفت" : "پرواز برگشت"}</p>
          </>
        ) : (
          <>
            <p className="font-semibold text-[14px]">پرواز رفت</p>
          </>
        )}
        <p className="text-[12px] text-gray-600 font-medium">
          {moment(props.itenery.segments[0]?.departure.at).locale("fa").format("jD jMMMM - HH:mm")}
        </p>
        <p className="text-[14px] font-medium text-gray-600">{flightCabinMapper[requestedPayload?.cabinClasses[0] as CabinClass]}</p>
      </div>
    </div>
  );
};
