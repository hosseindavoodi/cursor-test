import { Order } from "@sana/types/order/order";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { orderStatusMapper, visaOrderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import VisaIcon from "@sana/assets/icons/account/orders/visa.svg";
import { cn } from "@sana/ui/lib/utils";
function VisaOrder(props: { order: Order }) {
  if (!props.order.visa) return <></>;

  return (
    <div className="w-full flex flex-col gap-y-[20px]">
      <div className="w-full flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div className="w-[42px] flex justify-center items-center h-[42px] rounded-full bg-primary-50">
            <VisaIcon />
          </div>
          <div>
            <p className="text-[14px] text-gray-900 font-semibold">ویزا {props.order.visa.country.countryFaName}</p>
            <p className="text-[12px] text-gray-500">
              {visaTypeMapper[props.order.visa.type]} ، {props.order.visa.durationInDays} روزه
            </p>
          </div>
        </div>

        <div className="flex gap-x-10 items-center">
          <p className="text-[12px] font-medium">
            شماره سفارش : <span className="font-semibold text-[14px]">{props.order.orderNumber}</span>
          </p>
          <p className={cn(visaOrderStatusMapper[props.order.visa.status]?.className, "text-[12px] rounded-full px-2 py-2 font-semibold")}>
            {visaOrderStatusMapper[props.order.visa.status]?.fa}
          </p>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <p className="text-gray-500 flex gap-x-2 items-center text-[14px]">
          مبلغ پرداخت شده{" "}
          <span className="font-bold text-[18px] text-gray-900">{rialToTomanConvertor(props.order.totalPriceAmount).toLocaleString()}</span>{" "}
          <span className="text-[10px] text-gray-500">تومان</span>
        </p>
      </div>
    </div>
  );
}

export default VisaOrder;
