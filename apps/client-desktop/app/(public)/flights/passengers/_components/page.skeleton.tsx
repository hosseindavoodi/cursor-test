import Link from "next/link";
import ContactForInfoBox from "../../_components/contact.for.info.box";
import { Phone } from "lucide-react";

function PassengerPageSkeleton() {
  return (
    <div className="w-full mt-[40px] pb-20 flex gap-x-[20px]">
      <div className="flex w-full gap-y-[20px] flex-col">
        <div className="p-[25px] flex justify-between items-center rounded-[25px] border">
          <p className="font-semibold text-[24px]">مشخصات مسافر</p>
          <p className="w-[330px] animate-pulse bg-gray-200 h-[20px] rounded-full"></p>
        </div>
        {Array.from({ length: 3 }).map(() => (
          <div className="w-full border p-[25px] rounded-[25px]">
            <div className="w-full flex justify-between">
              <p className="w-[120px] h-[44px] rounded-full bg-gray-200 animate-pulse"></p>
              <div className="flex items-center gap-x-5">
                <div className="w-[250px] rounded-full h-[44px] bg-gray-200 animate-pulse"></div>
                <p className="animate-pulse h-[25px] w-[150px] rounded-full bg-gray-200 "></p>
              </div>
            </div>

            <div className="grid mt-[60px] grid-cols-3 gap-x-[20px] gap-y-[32px]">
              {Array.from({ length: 7 }).map(() => (
                <div className="flex flex-col gap-y-1 w-full">
                  <p className="w-[100px] h-[20px] animate-pulse rounded-full bg-gray-200"></p>
                  <div className="w-full h-[45px] bg-gray-200 animate-pulse rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="w-full flex flex-col gap-y-[40px] p-[25px] rounded-[25px] border">
          <div className="flex items-center gap-x-2">
            <Phone />
            <p className="font-semibold text-[24px]">اطلاعات تماس</p>
          </div>
          <p className="text-[14px] text-[#05203C] ">
            در صورت مغایرت اطلاعات تماس این فرم با اطلاعات درج شده در حساب کاربری، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد
            شد. همچنین «اعلام تغییرات بلیط» یا «دریافت تاییدیه» از یکی از کانال‌های «اطلاعات تماس حساب کاربری» یا «اطلاعات همین فرم» صورت
            خواهد گرفت و سناپرشین متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم هر دو کانال را در دسترس نگه دارید.
          </p>

          <div className="grid grid-cols-3 gap-x-[20px]">
            {Array.from({ length: 2 }).map(() => (
              <div className="flex flex-col gap-y-1 w-full">
                <p className="w-[100px] h-[20px] animate-pulse rounded-full bg-gray-200"></p>
                <div className="w-full h-[45px] bg-gray-200 animate-pulse rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex min-w-[360px] flex-col gap-y-[20px]">
        <div className="w-full flex flex-col gap-y-[24px] border p-[25px] rounded-[25px]">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[18px]">جزئیات پرواز</p>
            <p className="w-[70px] h-[20px] rounded-full bg-gray-200 animate-pulse"> </p>
          </div>
          <hr />
          <p className="w-[140px] h-[20px] rounded-full bg-gray-200 animate-pulse"></p>

          <div className="flex gap-x-2">
            <div className="w-[42px] h-[42px] bg-gray-200 animate-pulse rounded-full"></div>
            <div className="flex flex-col gap-y-1">
              <p className="w-[90px] h-[15px] bg-gray-200 rounded-full animate-pulse"></p>
              <p className="w-[120px] h-[10px] bg-gray-200 rounded-full animate-pulse"></p>
              <p className="w-[180px] h-[17px] bg-gray-200 rounded-full animate-pulse"></p>
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="w-[42px] h-[42px] bg-gray-200 animate-pulse rounded-full"></div>
            <div className="flex flex-col gap-y-1">
              <p className="w-[90px] h-[15px] bg-gray-200 rounded-full animate-pulse"></p>
              <p className="w-[120px] h-[10px] bg-gray-200 rounded-full animate-pulse"></p>
              <p className="w-[180px] h-[17px] bg-gray-200 rounded-full animate-pulse"></p>
            </div>
          </div>

          <div className="p-[20px] flex flex-col gap-y-4 rounded-[20px] bg-gray-100">
            <p className="font-medium text-[14px]">مبلغ قابل پرداخت</p>
            <div className="flex justify-end items-center">
              <p className="w-[160px] h-[35px] rounded-full bg-gray-300 animate-pulse"></p>
            </div>
          </div>

          <div>
            <div className="w-full h-[52px] bg-gray-200 animate-pulse rounded-full"></div>
            <p className="text-[14px] mt-1 font-medium">
              رفتن به مرحله بعد به معنای پدیرفتن{" "}
              <Link
                href={""}
                className="underline text-primary-500"
              >
                قوانین سایت
              </Link>{" "}
              است .
            </p>
          </div>
        </div>
        <ContactForInfoBox />
      </div>
    </div>
  );
}

export default PassengerPageSkeleton;
