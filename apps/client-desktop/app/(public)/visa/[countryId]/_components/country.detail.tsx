import { VisaCountry, VisaDetailResponse } from "@sana/types/visa/visa";
import { CalendarDays, Clock } from "lucide-react";

function CountryDetail(props: { country: VisaDetailResponse }) {
  return (
    <div className="w-full items-center flex justify-between p-[25px] border rounded-[25px]">
      <div className="flex flex-col gap-y-3">
        <div className="w-[80px] h-[80px] border rounded-full"></div>
        <p className="text-[24px] font-semibold"> ویزای {props.country.countryFaName}</p>
      </div>
      <div className="flex gap-x-3 h-[150px]">
        <div className="flex border w-[200px] flex-col gap-y-2 rounded-[25px] justify-center items-center">
          <Clock
            className="text-gray-500"
            size={20}
          />
          <p className="text-gray-500 font-medium text-[16px]">اعتبار ویزا پس از صدور</p>
          <p className="font-semibold text-[16px]">{props.country.isValidForDays} روز</p>
        </div>
        <div className="flex border w-[200px] flex-col gap-y-2 rounded-[25px] justify-center items-center">
          <CalendarDays
            className="text-gray-500"
            size={20}
          />
          <p className="text-gray-500 font-medium text-[16px]">زمان اخذ ویزا</p>
          <p className="font-semibold text-[16px]">{props.country.processTime}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
