import { Order } from "@sana/types/order/order";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { orderStatusMapper, residencyOrderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import VisaIcon from "@sana/assets/icons/account/orders/visa.svg";
import { cn } from "@sana/ui/lib/utils";
import { Sailboat } from "lucide-react";
import moment from "moment-jalaali";
moment.loadPersian({ dialect: "persian-modern" });
function ResidencyOrderCard(props: { order: Order }) {
  if (!props.order.residency) return <></>;

  return (
    <div className="w-full min-h-[80px] flex flex-col gap-y-[20px]">
      <div className="w-full flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div className="w-[42px] flex justify-center items-center h-[42px] rounded-full text-blue-600 bg-blue-50">
            <Sailboat size={20} />
          </div>
          <div>
            <p className="text-[14px] text-gray-900 font-semibold">درخواست اقامت {props.order.residency.country.countryFaName}</p>
            <p className="text-[12px] text-gray-500">{moment(props.order.createdAt).locale("fa").format("dddd jMMMM jYYYY")}</p>
          </div>
        </div>

        <div className="flex gap-x-10 items-center">
          <p className="text-[12px] font-medium">
            شماره سفارش : <span className="font-semibold text-[14px]">{props.order.orderNumber}</span>
          </p>
          <p
            className={cn(
              residencyOrderStatusMapper[props.order.residency.status]?.className,
              "text-[12px] rounded-full px-2 py-2 font-semibold"
            )}
          >
            {residencyOrderStatusMapper[props.order.residency.status]?.fa}
          </p>
        </div>
      </div>

      {/* <div className="flex justify-end items-center">
        <p className="text-gray-500 flex gap-x-2 items-center text-[14px]">
          مبلغ پرداخت شده{" "}
          <span className="font-bold text-[18px] text-gray-900">{rialToTomanConvertor(props.order.totalPriceAmount).toLocaleString()}</span>{" "}
          <span className="text-[10px] text-gray-500">تومان</span>
        </p>
      </div> */}
    </div>
  );
}

export default ResidencyOrderCard;
