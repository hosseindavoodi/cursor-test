import { Toggle } from "@sana/ui/components/toggle";
import { ArrowUpNarrowWide } from "lucide-react";
import { useAvailableStore } from "../../_store/available.store";
import { FlightSorts } from "@sana/types/flight/flight";

function Sorts() {
  const { sort, setStore } = useAvailableStore();
  return (
    <div className="w-full flex items-center gap-x-2">
      <div className="flex items-center min-w-fit text-[14px] text-gray-600 gap-x-2">
        <ArrowUpNarrowWide size={20} />
        <p>مرتب سازی :</p>
      </div>
      <div className="w-full flex gap-x-2 items-center">
        <Toggle
          onPressedChange={() => setStore({ sort: FlightSorts.FROM_LOWEST_PRICE })}
          pressed={sort === FlightSorts.FROM_LOWEST_PRICE}
        >
          ارزان ترین
        </Toggle>
        <Toggle
          onPressedChange={() => setStore({ sort: FlightSorts.FROM_HIGHEST_PRICE })}
          pressed={sort === FlightSorts.FROM_HIGHEST_PRICE}
        >
          گران ترین
        </Toggle>
        <Toggle
          onPressedChange={() => setStore({ sort: FlightSorts.FROM_CLOSEST_FLIGHT })}
          pressed={sort === FlightSorts.FROM_CLOSEST_FLIGHT}
        >
          زودترین
        </Toggle>
        <Toggle
          onPressedChange={() => setStore({ sort: FlightSorts.FROM_LATEST_FLIGHT })}
          pressed={sort === FlightSorts.FROM_LATEST_FLIGHT}
        >
          دیرترین
        </Toggle>
      </div>
    </div>
  );
}

export default Sorts;
