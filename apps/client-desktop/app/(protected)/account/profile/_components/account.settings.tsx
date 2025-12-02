"use client";
import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import { CircleCheck, Mail, MessageCircle, MessageCircleMore, Pencil } from "lucide-react";
import { Switch } from "@sana/ui/components/switch";
import { getServices } from "../../../../../lib/services";

function AccountSettings() {
  const services = getServices();

  const { data } = services.user.useUserProfile({ queryKey: ["USER_PROFILE"] });

  return (
    <div className="w-full bg-white rounded-[25px] border-gray-300 border p-[30px] flex flex-col gap-y-[30px]">
      <p className="font-semibold text-[24px]">تنظیمات حساب</p>

      <div className="flex items-center gap-x-[20px] w-full">
        <div className="flex w-full  flex-col gap-y-2">
          <div className="w-full flex justify-between items-center">
            <p className="text-[14px] font-medium">شماره تماس</p>
            {/* <Button
              variant={"link"}
              className="text-[14px] px-0 gap-x-1"
            >
              <Pencil size={16} />
              <p>ویرایش</p>
            </Button> */}
          </div>
          <div className="relative">
            <Input className="  rounded-full " />
            {!data?.isPhoneNumberVerified ? (
              <div className="bg-green-100 absolute top-1/2 -translate-y-1/2 left-[10px] gap-x-1 w-fit flex items-center text-[12px] font-semibold rounded-full px-[6px] py-[4px]  text-green-900">
                <CircleCheck size={18} />
                <p>تایید شده</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="flex w-full  flex-col gap-y-2">
          <div className="w-full flex justify-between items-center">
            <p className="text-[14px] font-medium">ایمیل</p>
            <Button
              variant={"link"}
              className="text-[14px] h-fit px-0 gap-x-1"
            >
              <Pencil size={16} />
              <p>ویرایش</p>
            </Button>
          </div>
          <div className="relative">
            <Input className="w-full rounded-full " />
            {!data?.isPhoneNumberVerified ? (
              <div className="bg-green-100 absolute top-1/2 -translate-y-1/2 left-[10px] gap-x-1 w-fit flex items-center text-[12px] font-semibold rounded-full px-[6px] py-[4px]  text-green-900">
                <CircleCheck size={18} />
                <p>تایید شده</p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex text-[16px] text-gray-900 justify-between items-center">
        <div className="flex items-center gap-x-[45px]">
          <div className="flex items-center gap-x-2">
            <Mail
              size={20}
              className="text-gray-500"
            />
            <p>ایمیل</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center gap-x-[45px]">
          <div className="flex items-center gap-x-2">
            <MessageCircle
              size={20}
              className="text-gray-500"
            />
            <p>واتس اپ</p>
          </div>
          <Switch />
        </div>
        <div className="flex items-center gap-x-[45px]">
          <div className="flex items-center gap-x-2">
            <MessageCircleMore
              size={20}
              className="text-gray-500"
            />
            <p>SMS</p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
