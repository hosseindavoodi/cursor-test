"use client";

import { ChevronLeft, Plus, Wallet } from "lucide-react";
import { getServices } from "../../../../../lib/services";
import { useRouter } from "next/navigation";

function WalletCard() {
  const router = useRouter();
  const { wallet } = getServices();
  const { data } = wallet.useWalletBalance({
    queryKey: [
      {
        currency: "IRR",
      },
    ],
  });

  return (
    <div className="p-[25px] border border-orange-50 w-full h-[220px] relative rounded-[25px] bg-gradient-to-b from-[#FEF5ED] via-[#FEF2E7] via-20% to-white  ">
      <div className="flex items-center gap-x-2">
        <div className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-gray-50">
          <Wallet
            size={24}
            className="text-orange-900"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-orange-900 text-[24px] font-semibold">کیف پول</p>
          <button
            onClick={() => router.push("/account/financial/wallet")}
            className="bg-[#FAD5DA]/30 text-primary-400 text-[14px] rounded-full flex items-center gap-x-1"
          >
            <Plus size={18} />
            <p>افزایش موجودی</p>
            <ChevronLeft size={15} />
          </button>
        </div>
      </div>

      <p className="font-bold absolute left-[25px] bottom-[25px] text-[44px] text-orange-900">
        {data?.balance.toLocaleString() ?? 0} <span className="text-[14px]">تومان</span>
      </p>
    </div>
  );
}

export default WalletCard;
