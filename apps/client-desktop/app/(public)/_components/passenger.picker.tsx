import { Input } from "@sana/ui/components/input";
import { Toggle } from "@sana/ui/components/toggle";
import useFocusWithin from "@sana/ui/hooks/useFoucsWithin";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useRef } from "react";
import { useFlightSearchStore } from "../../_store/flight.search.store";
import { CabinClass } from "@sana/types/flight/flight";
import { flightCabinMapper } from "@sana/utilities/mappers/flight.cabin.mapper";

function PassengerPicker() {
  const ref = useRef<HTMLDivElement>(null);

  const { isFocusedWithin, setIsFocusedWithin } = useFocusWithin(ref);

  const { payload } = useFlightSearchStore();

  return (
    <div
      ref={ref}
      className="flex w-full basis-[70%] relative flex-col gap-y-1"
    >
      <p className="font-semibold text-[14px]">تعداد مسافران / کلاس پرواز</p>

      <div className="relative">
        <Input
          value={`${payload.adult + payload.child + payload.infant} مسافر ، ${flightCabinMapper[payload.cabinClasses[0] as CabinClass]}`}
          className="w-full h-[52px] "
        />
        <ChevronDown
          size={15}
          className="absolute text-gray-500 top-1/2 -translate-y-1/2 left-3"
        />
      </div>

      {isFocusedWithin && <PassengerPickerPopover />}
    </div>
  );
}

export default PassengerPicker;

const PassengerPickerPopover = () => {
  const { payload, setStore } = useFlightSearchStore();

  const MAX_TOTAL = 9;
  const MAX_CHILD_PER_ADULT = 2;
  const MIN_ADULT_FOR_INFANT = 1;

  const total = payload.adult + payload.child + payload.infant;

  type Passenger = {
    adult: number;
    child: number;
    infant: number;
  };

  const update = (passenger: Passenger) => {
    setStore((prev) => ({ ...prev, payload: { ...prev.payload, ...passenger } }));
  };

  const updateCabin = (cabin: CabinClass) => {
    setStore((prev) => ({ ...prev, payload: { ...prev.payload, cabinClasses: [cabin] } }));
  };

  const canIncrement = (key: keyof Passenger, current: Passenger): boolean => {
    const tentative = { ...current, [key]: current[key] + 1 };
    console.log(total, MAX_TOTAL);
    return (
      total < MAX_TOTAL && // max 9
      tentative.infant <= tentative.adult && // 1 infant per adult
      tentative.child <= tentative.adult * MAX_CHILD_PER_ADULT // 2 children per adult
    );
  };

  const increment = (key: keyof Passenger, current: Passenger): Passenger => {
    if (!canIncrement(key, current)) return current; // no change

    return { ...current, [key]: current[key] + 1 };
  };

  const canDecrement = (key: keyof Passenger, current: Passenger): boolean => {
    // adult cannot go below 1
    if (key === "adult") return current.adult > 1;
    return current[key] > 0;
  };
  const decrement = (key: keyof Passenger, current: Passenger): Passenger => {
    if (!canDecrement(key, current)) return current;

    const next: Passenger = {
      ...current,
      [key]: Math.max(key === "adult" ? 1 : 0, current[key] - 1),
    };

    // ----- AUTO-REMOVE excess infants / children when an adult is removed -----
    if (key === "adult") {
      // 1. infants cannot exceed remaining adults
      const excessInfants = Math.max(0, next.infant - next.adult);
      next.infant = Math.max(0, next.infant - excessInfants);

      // 2. children cannot exceed remaining adults * 2
      const maxChildren = next.adult * MAX_CHILD_PER_ADULT;
      const excessChildren = Math.max(0, next.child - maxChildren);
      next.child = Math.max(0, next.child - excessChildren);
    }

    return next;
  };

  const currentPassengers: { adult: number; infant: number; child: number } = {
    adult: payload.adult,
    child: payload.child,
    infant: payload.infant,
  };

  return (
    <div className="w-[360px] text-[14px]  bg-white shadow-md border rounded-[25px] p-[25px] absolute z-[800] top-20">
      <p className="font-semibold">مسافران</p>
      <div className="flex flex-col gap-y-[12px]">
        <div className="w-full text-[16px] flex justify-between items-center">
          <p>
            بزرگسال <span>(12 سال به بالا)</span>
          </p>
          <div className="w-[120px] px-3 flex items-center justify-between h-[40px] border rounded-full">
            <button
              disabled={!canIncrement("adult", currentPassengers)}
              onClick={() => update(increment("adult", currentPassengers))}
              className="text-primary-500"
            >
              <Plus size={15} />
            </button>
            <p>{payload.adult}</p>
            <button
              disabled={!canDecrement("adult", currentPassengers)}
              onClick={() => update(decrement("adult", currentPassengers))}
              className="text-primary-500"
            >
              <Minus size={15} />
            </button>
          </div>
        </div>
        <div className="w-full text-[16px] flex justify-between items-center">
          <p>
            کودک <span>(2 تا 12 سال)</span>
          </p>
          <div className="w-[120px] px-3 flex items-center justify-between h-[40px] border rounded-full">
            <button
              disabled={!canIncrement("child", currentPassengers)}
              onClick={() => update(increment("child", currentPassengers))}
              className="text-primary-500"
            >
              <Plus size={15} />
            </button>
            <p>{payload.child}</p>
            <button
              disabled={!canDecrement("child", currentPassengers)}
              onClick={() => update(decrement("child", currentPassengers))}
              className="text-primary-500"
            >
              <Minus size={15} />
            </button>
          </div>
        </div>
        <div className="w-full text-[16px] flex justify-between items-center">
          <p>
            خردسال <span>(10 روز تا 2 سال)</span>
          </p>
          <div className="w-[120px] px-3 flex items-center justify-between h-[40px] border rounded-full">
            <button
              disabled={!canIncrement("infant", currentPassengers)}
              onClick={() => update(increment("infant", currentPassengers))}
              className="text-primary-500"
            >
              <Plus size={15} />
            </button>
            <p>{payload.infant}</p>
            <button
              disabled={!canDecrement("infant", currentPassengers)}
              onClick={() => update(decrement("infant", currentPassengers))}
              className="text-primary-500"
            >
              <Minus size={15} />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-[20px]" />
      <div className="">
        <p className="font-semibold text-[14px]">کلاس پرواز</p>
        <div className="grid mt-3 grid-cols-3 gap-2 ">
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.ECONOMY)}
            pressed={payload.cabinClasses[0] === "economy"}
            className="text-[12px]"
          >
            اکونومی
          </Toggle>
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.PREMIUM_ECONOMY)}
            pressed={payload.cabinClasses[0] === "premium_economy"}
            className="text-[12px]"
          >
            پرمیوم اکونومی
          </Toggle>
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.BUSINESS)}
            pressed={payload.cabinClasses[0] === "business"}
            className="text-[12px]"
          >
            بیزنس
          </Toggle>
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.PREMIUM_BUSINESS)}
            pressed={payload.cabinClasses[0] === "premium_business"}
            className="text-[12px]"
          >
            پرمیوم بیزنس
          </Toggle>
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.FIRST)}
            pressed={payload.cabinClasses[0] === "first"}
            className="text-[12px]"
          >
            فرست
          </Toggle>
          <Toggle
            onPressedChange={(state) => updateCabin(CabinClass.PREMIUM_FIRST)}
            pressed={payload.cabinClasses[0] === "premium_first"}
            className="text-[12px]"
          >
            پرمیوم فرست
          </Toggle>
        </div>
      </div>
    </div>
  );
};
