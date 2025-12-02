import { Order } from "@sana/types/order/order";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { Tickets } from "lucide-react";

function VisaDetail(props: { order?: Order }) {
  return (
    <div className="w-full bg-gray-50 border rounded-[25px] p-[30px]">
      <div className="flex items-center gap-x-3">
        <Tickets
          className="text-gray-500"
          size={24}
        />
        <p className="text-[24px] font-semibold">اطلاعات ویزا</p>
      </div>

      <div className="w-full grid mt-[40px] gap-x-4 grid-cols-4">
        <div>
          <p className="text-[14px] font-medium text-gray-500">نوع ویزا</p>
          {props.order ? (
            <p className="text-[14px] font-semibold">{visaTypeMapper[props.order.visa!.type]}</p>
          ) : (
            <div className="w-full  h-[30px] bg-gray-100 animate-pulse rounded-full" />
          )}
        </div>
        <div>
          <p className="text-[14px] font-medium text-gray-500">حداکثر مدت زمان اقامت</p>
          {props.order ? (
            <p className="text-[14px] font-semibold">{props.order.visa?.durationInDays} روز</p>
          ) : (
            <div className="w-full  h-[30px] bg-gray-100 animate-pulse rounded-full" />
          )}
        </div>
        <div>
          <p className="text-[14px] font-medium text-gray-500">اعتبار ویزا پس از صدور</p>
          {props.order ? (
            <p className="text-[14px] font-semibold">{props.order.visa?.country.isValidForDays}</p>
          ) : (
            <div className="w-full  h-[30px] bg-gray-100 animate-pulse rounded-full"></div>
          )}
        </div>{" "}
        <div>
          <p className="text-[14px] font-medium text-gray-500">تعداد مسافران</p>
          {props.order ? (
            <p className="text-[14px] font-semibold">{props.order.visa?.passengers.length} نفر</p>
          ) : (
            <div className="w-full  h-[30px] bg-gray-100 animate-pulse rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VisaDetail;
