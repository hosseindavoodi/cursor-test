"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@sana/ui/components/popover";
import { getServices } from "../../lib/services";
import UserIcon from "@sana/assets/icons/landing/user.svg";
import { ChevronDown, ChevronLeft, Plus, Wallet } from "lucide-react";
import { Button } from "@sana/ui/components/button";
import { usePathname, useRouter } from "next/navigation";
import { SignOutAction } from "../_api/auth/auth.actions";
function User(props: { varient: "glass" | "default" }) {
  const services = getServices();
  const router = useRouter();
  const pathname = usePathname();
  const { data: walletData } = services.wallet.useWalletBalance({
    queryKey: [
      {
        currency: "IRR",
      },
    ],
  });

  const { data: userData } = services.user.useUserProfile({ queryKey: ["USER_PROFILE"] });

  const handleSignOut = async () => {
    await SignOutAction();

    if (pathname.includes("/account")) {
      router.push("/");
    }
  };

  return (
    <Popover>
      <PopoverTrigger
        className={`${props.varient === "glass" ? "bg-[#E0D5CD]/50" : "bg-transparent"} border h-[52px]   px-[16px] rounded-full flex items-center gap-x-2`}
      >
        <UserIcon />
        <p className="whitespace-nowrap min-w-fit text-[14px] font-medium text-primary-500">
          {userData?.firstName ? userData.firstName + " " + (userData.lastName ?? "") : "مسافر گرامی"}
        </p>
        <ChevronDown className="text-primary-500" />
      </PopoverTrigger>
      <PopoverContent
        sideOffset={20}
        align="end"
        className="left-20 w-[300px]  p-[10px] rounded-[25px] border-white/20 bg-white"
      >
        <div className="rounded-[20px] bg-gray-100 px-[10px] py-[15px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-[10px] items-center">
              <div className="bg-gradient-to-b from-[#4730D8] flex items-center justify-center text-white font-medium   w-[50px] h-[50px] rounded-full to-[#7D74B9]">
                {userData?.firstName ? userData.firstName[0] : "م"}
              </div>
              <div>
                <p className="font-medium text-[16px]">
                  {" "}
                  {userData?.firstName ? userData.firstName + " " + (userData.lastName ?? "") : "مسافر گرامی"}
                </p>
                <p className="text-gray-600 font-medium text-[14px]">
                  {userData?.phoneNumber ? userData?.phoneNumber.slice(1) : "تلفن ثبت نشده"}
                </p>
              </div>
            </div>
            <button
              onClick={() => router.push("/account/overview")}
              className="text-gray-900"
            >
              <ChevronLeft />
            </button>
          </div>
          <hr className="my-[16px]" />

          <div className="flex justify-between w-full items-center">
            <div className="flex items-center gap-x-1">
              <Wallet
                size={16}
                className="text-gray-600"
              />
              <p className="text-[14px] font-semibold px-2">
                <span>{walletData?.balance.toLocaleString() ?? 0}</span>
                <span className="text-gray-600 text-[12px] mr-2">تومان</span>{" "}
              </p>
            </div>

            <Button
              onClick={() => router.push("/account/financial/wallet")}
              className="text-[12px]"
              variant={"link"}
            >
              <Plus size={5} />
              <p>افزایش موجودی</p>
            </Button>
          </div>
        </div>

        <div className="flex flex-col mt-[15px]  items-start gap-y-[8px]">
          <Button
            variant={"link"}
            className="text-gray-600"
          >
            سفرها
          </Button>
          <Button
            onClick={handleSignOut}
            className="text-red-500"
            variant={"link"}
          >
            خروج از حساب
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default User;
