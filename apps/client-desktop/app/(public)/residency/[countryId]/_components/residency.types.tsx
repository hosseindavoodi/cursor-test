import { ResidencyCountry } from "@sana/types/residency/residency";
import { CircleArrowLeft } from "lucide-react";

function ResidencyTypes(props: { data?: ResidencyCountry }) {
  return (
    <div className="p-[25px] border  flex flex-col gap-y-[24px] rounded-[25px]">
      <p className="font-semibold text-[24px]">انواع اقامت {props.data?.countryFaName}</p>
      <div className="w-full flex flex-col gap-y-2">
        {props.data?.types.map((type) => (
          <div className="flex items-center gap-x-2">
            <CircleArrowLeft
              size={24}
              strokeWidth={1.2}
              className="text-primary-500"
            />
            <p className="text-[16px] text-gray-600">{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResidencyTypes;
