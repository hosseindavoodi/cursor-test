"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@sana/ui/components/dialog";
import { Button } from "@sana/ui/components/button";
import RightArrowIcon from "@sana/assets/icons/common/next.arrow.svg";
import SanaPersianLogo from "@sana/assets/icons/auth/logo.svg";
import { useAuthStore } from "../_store/auth.store";
import PhoneStep from "./auth/phone.step";
import OTP from "./auth/otp.step";

function AuthDialog() {
  const { step, setStore, openAuthDialog } = useAuthStore();

  const stepRenderer = () => {
    switch (step) {
      case "PHONE":
        return <PhoneStep />;
      case "OTP":
        return <OTP />;
      case "CHANGE_METHOD":
        return <></>;

      default:
        break;
    }
  };

  return (
    <Dialog
      open={openAuthDialog}
      onOpenChange={(open) => setStore({ openAuthDialog: open })}
    >
      <form>
        <DialogTrigger asChild>
          <Button className="bg-gradient-to-r cursor-pointer flex items-center rounded-full h-[50px] text-white border-none from-primary-400 to-primary-500">
            <p>ورود یا ثبت نام</p>
            <RightArrowIcon className="size-fit stroke-[1.5px]" />
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[676px] flex flex-col  justify-center pt-[72px] pb-[48px] items-start h-[522px] bg-white max-w-full">
          <DialogTitle></DialogTitle>
          <div className="flex flex-col gap-y-[32px] flex-1 w-full items-center ">
            <SanaPersianLogo />

            <div className="w-full px-24 flex-1  flex-col justify-center items-center ">{stepRenderer()}</div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AuthDialog;
