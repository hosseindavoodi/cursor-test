"use client";

import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import { Toggle } from "@sana/ui/components/toggle";
import { Hourglass } from "lucide-react";
import { getServices } from "../../../../../lib/services";
import { useEffect, useRef, useState } from "react";
import { addThousandSeparators, removeThousandSeparators } from "@sana/utilities/number.string.to.locale.string";

function WalletPage() {
  const [amount, setAmount] = useState("0");

  const { wallet } = getServices();
  const { data } = wallet.useWalletBalance({
    queryKey: [
      {
        currency: "IRR",
      },
    ],
  });

  const { data: increaseWalletData, mutateAsync: increaseWalletHandler } = wallet.useWalletIncrease();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.submit();
  }, [increaseWalletData]);

  return (
    <div className="w-full flex flex-col gap-y-[20px]">
      <div className="w-full bg-white border border-gray-300 rounded-[25px] flex items-center justify-between p-[25px]">
        <p className="text-[24px] font-semibold">موجودی حساب</p>
        <p className="font-semibold text-[32px]">
          {data?.balance.toLocaleString() ?? 0} <span className="text-[12px] text-gray-500">تومان</span>
        </p>
      </div>

      <div className="w-full p-[25px] flex flex-col gap-y-[30px] rounded-[25px] bg-white border border-gray-300">
        <p className="font-semibold text-[24px]">افزایش موجودی</p>

        <div className="w-full flex gap-x-[20px] items-center">
          <Toggle
            pressed={amount === "5000000"}
            onPressedChange={() => setAmount("5000000")}
            className="w-full h-[45px]"
          >
            5,000,000 تومان
          </Toggle>
          <Toggle
            pressed={amount === "10000000"}
            onPressedChange={() => setAmount("10000000")}
            className="w-full h-[45px]"
          >
            10,000,000 تومان
          </Toggle>
          <Toggle
            pressed={amount === "20000000"}
            onPressedChange={() => setAmount("20000000")}
            className="w-full h-[45px]"
          >
            20,000,000 تومان
          </Toggle>
          <Toggle
            pressed={amount === "50000000"}
            onPressedChange={() => setAmount("50000000")}
            className="w-full h-[45px]"
          >
            50,000,000 تومان
          </Toggle>
        </div>

        <div className="w-full flex gap-x-2 items-end">
          <div className="w-full flex flex-col gap-y-2">
            <p className="text-[14px]">مبلغ دلخواه</p>
            <div className="w-full relative">
              <Input
                value={amount ? addThousandSeparators(amount) : ""}
                onChange={(e) => {
                  if (/^(?!,)[0-9,]*$/.test(e.target.value)) {
                    setAmount(e.target.value);
                  }
                }}
                className="w-full rounded-full"
                placeholder="مبلغ مورد نظر خود را به تومان وارد کنید"
              />
              <p className="absolute top-1/2 -translate-y-1/2 left-5 text-[12px] text-gray-600 font-semibold">تومان</p>
            </div>
          </div>

          {increaseWalletData && (
            <form
              method="POST"
              action={increaseWalletData.redirectUrl}
              ref={formRef}
            >
              {Object.entries(increaseWalletData.body).map(([key, value]) => (
                <input
                  key={key}
                  value={value}
                  id={key}
                  name={key}
                />
              ))}
            </form>
          )}
          <Button
            onClick={() => increaseWalletHandler({ amount: removeThousandSeparators(amount), gatewayCode: "ikc" })}
            variant={"primary"}
            className="h-[45px] min-w-[250px] font-normal text-[14px] rounded-full"
          >
            ورود به درگاه بانکی
          </Button>
        </div>
      </div>

      <div className="w-full p-[25px] flex flex-col gap-y-[30px] rounded-[25px] bg-white border border-gray-300">
        <p className="text-[24px] font-semibold">برداشت موجودی</p>

        <div className="w-full flex gap-x-2 items-end">
          <div className="w-full flex flex-col gap-y-2">
            <p className="text-[14px]">مبلغ دلخواه</p>
            <div className="w-full relative">
              <Input
                className="w-full rounded-full"
                placeholder="مبلغ مورد نظر خود را به تومان وارد کنید"
              />
              <p className="absolute top-1/2 -translate-y-1/2 left-5 text-[12px] text-gray-600 font-semibold">تومان</p>
            </div>
          </div>
          <Button
            variant={"outline"}
            className="h-[45px] min-w-[250px] font-normal text-[14px] rounded-full"
          >
            برداشت موجودی
          </Button>
        </div>

        <div className="flex gap-x-2 items-center">
          <Hourglass
            size={20}
            className="text-gray-500"
          />

          <p className="text-gray-600 text-[14px]">زمان تسویه حدودی ۷۲ ساعت پس از ثبت درخواست می‌باشد.</p>
        </div>
      </div>
    </div>
  );
}

export default WalletPage;
