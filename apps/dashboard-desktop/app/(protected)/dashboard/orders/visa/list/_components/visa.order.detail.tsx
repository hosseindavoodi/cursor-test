import { Button } from "@sana/ui/components/button";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { ArrowRight, CalendarDays, Download } from "lucide-react";
import moment from "moment-jalaali";
import PassengerDocumentDialog from "./passenger.doc.dialog";
import Image from "next/image";
import countries from "@sana/constants/country.phone.code.list.json";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { PrivateVisaOrderListResponse } from "@sana/types/order/visa";
export const indexToPersianLocaleNumber: Record<number, string> = {
  1: "اول",
  2: "دوم",
  3: "سوم",
  4: "چهارم",
  5: "پنجم",
  6: "ششم",
  7: "هفتم",
  8: "هشتم",
  9: "نهم",
  10: "دهم",
  11: "یازدهم",
  12: "دوازدهم",
  13: "سیزدهم",
  14: "چهاردهم",
};

function VisaOrderDetail(props: { order?: PrivateVisaOrderListResponse["orders"][number] }) {
  const router = useRouter();
  return (
    <div className="w-full ">
      <div className="flex items-center gap-x-2">
        <button
          onClick={() => router.back()}
          className="w-[40px] h-[40px] rounded-full bg-gray-200 flex items-center justify-center"
        >
          <ArrowRight size={24} />
        </button>

        {props.order ? (
          <p className="font-semibold text-[24px]">سفارش {props.order.orderNumber} </p>
        ) : (
          <p className="w-[200px] h-[40px] rounded-full animate-pulse bg-gray-200"></p>
        )}
        {props.order ? (
          <div className="flex h-[36px] px-3 font-medium text-gray-600 bg-gray-200 rounded-md  items-center gap-x-2">
            <p>{moment(props.order.createdAt).locale("fa").format("jYYYY/jMM/jDD hh:mm")}</p>
            <CalendarDays size={20} />
          </div>
        ) : (
          <p className="h-[36px] w-[150px] rounded-full bg-gray-200 animate-pulse"></p>
        )}
      </div>
      <div className="mt-[40px] flex flex-col gap-y-[12px]">
        <VisaCountryBaseDetail order={props.order} />
        <Passengers passengers={props.order?.visa.passengers} />
      </div>
    </div>
  );
}

export default VisaOrderDetail;

const VisaCountryBaseDetail = (props: { order?: PrivateVisaOrderListResponse["orders"][number] }) => {
  return (
    <div className="w-full px-[16px] text-[14px] h-[53px] border rounded-[15px] text-gray-600  flex justify-between">
      <div className="flex items-center gap-x-5">
        <p>کشور مقصد</p>

        <div className="flex items-center gap-x-2">
          {props.order ? (
            <p>{props.order.visa.country.countryFaName}</p>
          ) : (
            <p className="w-[100px] h-[30px] rounded-full bg-gray-200 animate-pulse"></p>
          )}
        </div>
      </div>

      <div className="flex gap-x-10 items-center">
        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-10">
            <p>نوع ویزا</p>
            {props.order ? (
              <p>{visaTypeMapper[props.order.visa.type]}</p>
            ) : (
              <p className="w-[60px] h-[30px] bg-gray-200 rounded-full animate-pulse"></p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-x-10">
          <div className="flex items-center gap-x-10">
            <p>تعداد روز درخواستی</p>
            {props.order ? (
              <p>{props.order.visa.durationInDays} روز</p>
            ) : (
              <p className="w-[60px] bg-gray-200 animate-pulse rounded-full h-[30px]"></p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Passengers = (props: { passengers?: PrivateVisaOrderListResponse["orders"][number]["visa"]["passengers"] }) => {
  return (
    <div className="w-full grid grid-cols-2 gap-[24px]">
      {props.passengers ? (
        <>
          {props.passengers.map((passenger, index) => (
            <Passenger
              index={index}
              key={passenger.id}
              passenger={passenger}
            />
          ))}
        </>
      ) : (
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="w-full h-[300px]  rounded-[15px] animate-pulse bg-gray-200" />
          ))}
        </>
      )}
    </div>
  );
};

const Passenger = (props: { passenger: PrivateVisaOrderListResponse["orders"][number]["visa"]["passengers"][1]; index: number }) => {
  return (
    <div className="w-full border text-[14px] rounded-[15px] p-[16px]">
      <div className="w-full flex justify-between items-center">
        <p className="h-[31px] px-4 rounded-full bg-gray-200 flex items-center text-gray-600">
          مسافر {indexToPersianLocaleNumber[props.index + 1]}
        </p>
        <div className="flex items-center gap-x-2">
          <Button variant={"link"}>
            <Download />

            <p>دانلود مدارک</p>
          </Button>
          <PassengerDocumentDialog />
        </div>
      </div>
      <div className="w-full mt-[24px] gap-x-[60px] flex justify-between">
        <div className="w-[320px] flex  flex-col gap-y-[16px]">
          <div className="flex justify-between items-center">
            <p>نام (لاتین)</p>
            <p className="font-switzer font-medium">{props.passenger.firstName ?? "-"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>نام خانوادگی (لاتین)</p>
            <p className="font-switzer font-medium">{props.passenger.lastName ?? "-"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>جنسیت</p>
            <p className="font-medium">{props.passenger.gender === "female" ? "زن" : "مرد"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>ملت</p>
            <div className="flex gap-x-2 items-center">
              <p className="font-medium">{countries.find((c) => c.code === props.passenger.nationalityCode)?.name}</p>
              {props.passenger.nationalityCode && (
                <Image
                  src={`/flags/${props.passenger.nationalityCode?.toLowerCase()}.svg`}
                  width={30}
                  height={30}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>

        <div className="w-[320px] flex flex-col gap-y-[16px]">
          <div className="flex justify-between items-center">
            <p>تاریخ تولد میلادی</p>
            <p className="font-switzer font-medium">
              {props.passenger.birthdate ? moment(props.passenger.birthdate).locale("en").format("YYYY-MM-DD") : "-"}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>کدملی</p>
            <p className="font-switzer font-medium">-</p>
          </div>
          <div className="flex justify-between items-center">
            <p>شماره پاسپورت</p>
            <p className="font-medium font-switzer uppercase">{props.passenger.passportNumber ?? "-"}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>تاریخ انقضای پاسپورت</p>
            <p className="font-medium font-switzer">
              {props.passenger.passportExpireDate ? moment(props.passenger.passportExpireDate).locale("en").format("YYYY-MM-DD") : "-"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
