"use client";

import { useSearchParams } from "next/navigation";
import Padding from "../../../_components/padding";
import Pay from "./_components/pay";
import VisaDetail from "./_components/visa.detail";
import { getServices } from "../../../../lib/services";
import Passengers from "./_components/passengers";
import PaymentSection from "./_components/payment";

function Payment() {
  const searchParams = useSearchParams();

  const { orders } = getServices();

  const { data } = orders.useOrderDetail({
    queryKey: [{ orderId: searchParams.get("orderId") as string }],
    enabled: searchParams.get("orderId") ? true : false,
    refetchOnMount: "always",
  });

  return (
    <Padding>
      <div className="w-full pt-[200px] flex gap-x-[20px]">
        <div className="flex flex-col w-full gap-y-[20px]">
          <div className="w-full h-[84px] bg-gray-50 p-[30px] rounded-[25px] flex items-center  border">
            <p className="font-semibold text-[24px]">تایید مشخصات</p>
          </div>
          <VisaDetail order={data} />
          <Passengers passengers={data?.visa?.passengers} />
          <PaymentSection />
        </div>
        <div>
          <Pay order={data} />
        </div>
      </div>
    </Padding>
  );
}

export default Payment;
