import { CalendarDays, Plane, User } from "lucide-react";
import { useFlightSearchStore } from "../../../_store/flight.search.store";
import moment from "moment-jalaali";
import { flightCabinMapper } from "@sana/utilities/mappers/flight.cabin.mapper";
import { Button } from "@sana/ui/components/button";

function MinimalSearch() {
  const { requestedPayload, inputs, setStore } = useFlightSearchStore();

  return (
    <div className="w-full gap-x-7 flex justify-center items-center">
      <div className="flex text-black font-semibold text-[14px] items-center gap-x-2">
        <Plane
          className="text-gray-500"
          size={20}
        />
        {requestedPayload?.flightTypeName === "one_way" ? (
          <p>
            بلیط یک طرفه از {inputs[0]?.originPreview} به {inputs[0]?.destinationPreview}
          </p>
        ) : (
          <p>
            بلیط رفت و برگشت از {inputs[0]?.originPreview} به {inputs[0]?.destinationPreview}
          </p>
        )}
      </div>

      <div className="flex text-black font-semibold text-[14px] items-center gap-x-2">
        <CalendarDays
          className="text-gray-500"
          size={20}
        />
        {requestedPayload?.flightTypeName === "one_way" ? (
          <p>رفت {moment(requestedPayload.segs[0]?.departureDate).locale("fa").format("jD jMMMM")}</p>
        ) : (
          <p>
            رفت {moment(requestedPayload?.segs[0]?.departureDate).locale("fa").format("jD jMMMM")} - برگشت{" "}
            {moment(requestedPayload?.segs[1]?.departureDate).locale("fa").format("jD jMMMM")}{" "}
          </p>
        )}
      </div>

      <div className="flex items-center gap-x-2">
        <User
          className="text-gray-500"
          size={20}
        />
        <p className="text-[14px] font-semibold">
          {requestedPayload?.adult} بزرگسال ، {requestedPayload?.child !== 0 && requestedPayload?.child + "کودک ،"}{" "}
          {requestedPayload?.infant !== 0 && requestedPayload?.infant + " نوزاد ،"} {flightCabinMapper[requestedPayload?.cabinClasses[0]!]}
        </p>
      </div>

      <Button
        onClick={() => setStore({ showSearchBar: true })}
        variant={"link"}
      >
        ایجاد تغییر
      </Button>
    </div>
  );
}

export default MinimalSearch;
