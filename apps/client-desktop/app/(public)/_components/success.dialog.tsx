import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@sana/ui/components/dialog";
import SuccessPhoneSvg from "@sana/assets/success-phone.svg";
import { Button } from "@sana/ui/components/button";
import Link from "next/link";

function SuccessDialog() {
  return (
    <Dialog
      open={true}
      defaultOpen
    >
      <DialogTrigger></DialogTrigger>
      <DialogContent
        className="rounded-[25px] w-[586px]"
        showCloseButton={false}
      >
        <DialogHeader>
          <DialogTitle></DialogTitle>

          <div className="w-full flex flex-col justify-center gap-y-[32px] text-center items-center">
            <SuccessPhoneSvg />
            <div className="flex flex-col gap-y-[16px]">
              <p className="font-semibold text-[24px]">ثبت درخواست موفق</p>
              <p className="text-gray-700">درخواست شما با موفقیت ثبت شد ، کارشناسان ما به زودی با شما تماس خواهند گرفت .</p>
            </div>
            <Link
              href={"/"}
              className="w-full border hover:bg-primary-500 hover:text-white transition-all flex items-center justify-center border-gray-300 text-black h-[52px] rounded-full"
            >
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SuccessDialog;
