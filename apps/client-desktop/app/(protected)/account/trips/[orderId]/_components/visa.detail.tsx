import { Order } from "@sana/types/order/order";
import { Button } from "@sana/ui/components/button";
import { cn } from "@sana/ui/lib/utils";
import { orderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { ArrowRight, User } from "lucide-react";
import moment from "moment-jalaali";
import { useRouter } from "next/navigation";

function VisaDetail(props: { order: Order }) {
  const router = useRouter();

  if (!props.order.visa) return <></>;

  return (
    <>
      <div className="w-full bg-white border flex justify-between items-center rounded-[25px] p-[25px]">
        <div className="flex items-center gap-x-[12px]">
          <button
            onClick={() => router.back()}
            className="rounded-full flex items-center justify-center w-[40px] h-[40px] bg-gray-100"
          >
            <ArrowRight size={20} />
          </button>
          <div>
            <p className="text-[14px] font-semibold">سفارش {props.order?.orderNumber}</p>
            <p className="text-[12px]">زمان خرید: {moment(props.order?.createdAt).locale("fa").format("jYYYY/jMM/jDD HH:mm")}</p>
          </div>
        </div>

        <div className=" flex gap-x-4">
          <p className={cn(orderStatusMapper[props.order.visa.status]?.className, "text-[12px] py-2 px-4 font-semibold rounded-full")}>
            {orderStatusMapper[props.order.visa.status]?.fa}
          </p>
        </div>
      </div>
      <div className="w-full p-[25px] flex flex-col gap-y-[40px] bg-white border border-gray-300 rounded-[25px]">
        <p className="font-semibold text-[16px]">مشخصات ویزا</p>
        <div className="w-full flex items-center gap-x-[40px]">
          <div className="">
            <div>
              <p className="text-gray-500 text-[14px]">کشور مقصد</p>
              <p className="text-[14px] font-semibold"> {props.order?.visa.country.countryFaName}</p>
            </div>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">اعتبار ویزا پس از صدور</p>
            <p className="text-[14px] font-semibold">{props.order?.visa.country.isValidForDays} روز</p>
          </div>
          <div>
            <p className="text-gray-500 text-[14px]">زمان اخذ ویزا</p>
            <p className="text-[14px] font-semibold">{props.order?.visa.country.processTime}</p>
          </div>
        </div>
      </div>

      <div className="w-full p-[25px] flex flex-col gap-y-[40px] border bg-white rounded-[25px] border-gray-300">
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center gap-x-[12px]">
            <User size={20} />
            <p className="text-[24px] font-semibold">مشخصات مسافران</p>
          </div>
          <Button
            variant={"outline"}
            className="rounded-full border-primary-500"
          >
            ویرایش مسافران
          </Button>
        </div>

        <div className="w-full  grid grid-cols-6 gap-y-3 text-center">
          <p className="text-gray-600 text-[14px]">نام و نام خانوادگی</p>
          <p className="text-gray-600 text-[14px]">جنسیت</p>
          <p className="text-gray-600 text-[14px]">نوع ویزا</p>
          <p className="text-gray-600 text-[14px]">بازه سنی</p>
          <p className="text-gray-600 text-[14px]">مبلغ پرداخت شده</p>
          <p className="text-gray-600 text-[14px]">مدارک</p>
          {props.order?.visa.passengers.map((passenger) => (
            <div className="w-full items-center justify-center border h-[60px] col-span-6 grid grid-cols-6 rounded-[15px]">
              <p>{!passenger.firstName || !passenger.lastName ? "ثبت نشده" : `${passenger.firstName} ${passenger.lastName}`}</p>
              <p>{!passenger.gender ? "ثبت نشده" : passenger.gender === "male" ? "مرد" : "زن"}</p>
              <p>{visaTypeMapper[props.order.visa!.type]}</p>
              <p>{passenger.group.title}</p>
              <p>{rialToTomanConvertor(passenger.price.totalPriceAmount).toLocaleString()}</p>
              <div>
                <Button
                  variant={"outline"}
                  className="border-primary-500 rounded-full h-[40px] w-[144px]"
                >
                  مشاهده
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default VisaDetail;
