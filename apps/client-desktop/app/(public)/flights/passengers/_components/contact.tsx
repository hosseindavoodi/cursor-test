import { Input } from "@sana/ui/components/input";
import { Label } from "@sana/ui/components/label";
import { Phone } from "lucide-react";

function Contact() {
  return (
    <div className="w-full flex flex-col gap-y-[40px] p-[25px] rounded-[25px] border">
      <div className="flex items-center gap-x-2">
        <Phone className="text-gray-600" />
        <p className="font-semibold text-[24px]">اطلاعات تماس</p>
      </div>
      <div>
        <p className="text-[14px] text-[#05203C]">
          در صورت مغایرت اطلاعات تماس این فرم با اطلاعات درج شده در حساب کاربری، بلیط و تاییدیه خرید به اطلاعات تماس همین فرم ارسال خواهد
          شد. همچنین «اعلام تغییرات بلیط» یا «دریافت تاییدیه» از یکی از کانال‌های «اطلاعات تماس حساب کاربری» یا «اطلاعات همین فرم» صورت
          خواهد گرفت و سناپرشین متعهد به برقراری ارتباط با یکی از این کانال‌هاست. خواهشمندیم هر دو کانال را در دسترس نگه دارید.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-[24px]">
        <div className="flex flex-col gap-y-2">
          <Label>ایمیل</Label>
          <Input className="w-full rounded-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label>شماره همراه</Label>
          <Input className="w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
