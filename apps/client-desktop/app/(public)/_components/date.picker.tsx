import { Input } from "@sana/ui/components/input";
import useFocusWithin from "@sana/ui/hooks/useFoucsWithin";
import { useEffect, useRef } from "react";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import FlightCalendar from "./flight.calendar";

function DatePicker(props: { routeIndex: number }) {
  const { focuses, payload, inputs } = useFlightSearchStore();

  const departureRef = useRef<HTMLDivElement>(null);

  const { isFocusedWithin: isDepartureFocus, setIsFocusedWithin: setIsDepartureFocus } = useFocusWithin(departureRef);

  useEffect(() => {
    if (isDepartureFocus) {
      if (focuses[props.routeIndex] && focuses[props.routeIndex]?.setIsDestinationFocus) {
        focuses[props.routeIndex]?.setIsDestinationFocus(false);
      }
    }
  }, [isDepartureFocus]);

  return (
    <div
      ref={departureRef}
      className="w-full relative flex"
    >
      <div className=" flex w-full flex-col gap-y-1">
        <p className="font-semibold text-[14px]">تاریخ رفت</p>
        <Input
          readOnly
          value={inputs[0]?.departure_date}
          id={`${props.routeIndex}-departure-date`}
          className={`w-full h-[52px] px-5 rounded-r-full ${payload.flightTypeName === "round_trip" ? "rounded-l-none" : "rounded-full"}`}
        />
      </div>

      {payload.flightTypeName === "round_trip" && (
        <div className=" flex w-full flex-col gap-y-1">
          <p className="font-semibold text-[14px]">تاریخ برگشت</p>
          <Input
            readOnly
            value={inputs[1]?.departure_date}
            className="w-full h-[52px] px-5 rounded-r-none rounded-l-full"
          />
        </div>
      )}

      {isDepartureFocus && <FlightCalendar />}
    </div>
  );
}

export default DatePicker;
