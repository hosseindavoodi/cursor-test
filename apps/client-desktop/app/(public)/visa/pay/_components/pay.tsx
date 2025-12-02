import { Button } from "@sana/ui/components/button";
import { getServices } from "../../../../../lib/services";
import { Order } from "@sana/types/order/order";
import { usePayStore } from "../_store/pay.store";
import { toast } from "sonner";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { FormEvent, FormEventHandler, useEffect, useRef, useState } from "react";
import { client } from "../../../../../lib/axios.config";
import { VisaRequestPaymentResponse } from "@sana/types/order/visa";
import axios from "axios";

function Pay(props: { order?: Order }) {
  const services = getServices();

  const { setStore, wallet } = usePayStore();

  const { data: walletData } = services.wallet.useWalletBalance({ queryKey: [{ currency: "IRR" }] });

  const { data, mutateAsync: requestPaymentHandler, isPending } = services.visa.useVisaPayment();

  const [pay, setPay] = useState<VisaRequestPaymentResponse>();

  const formRef = useRef<HTMLFormElement>(null);

  const handlePayment = async () => {
    if (props.order) {
      try {
        const pay = await requestPaymentHandler({
          orderId: props.order.id,
          wallet: wallet,
        });

        // const formData = new FormData();

        // Object.entries(pay.body).map(([key, value]) => formData.append(key, value));

        // await axios.post(pay.redirectUrl, formData);

        setPay(pay);
      } catch (error) {
        toast.error("بروز خطا در فرآیند خرید");
      }
    }
  };

  const hasEnoughBalenceForDirectPayment = walletData?.balance ?? 0 > rialToTomanConvertor(props.order?.totalPriceAmount ?? 0);
  const payAmount = () => {
    if (walletData?.balance && props.order) {
      const diffAmount = props.order.totalPriceAmount - walletData.balance;
      if (wallet) {
        if (diffAmount > 0) {
          return diffAmount;
        } else {
          return 0;
        }
      } else {
        return rialToTomanConvertor(props.order.totalPriceAmount);
      }
    }
  };

  useEffect(() => {
    formRef.current?.submit();
  }, [pay]);

  return (
    <div className="w-[363px] min-w-[363px] rounded-[25px] border p-[25px]">
      <p className="text-[18px] font-semibold">مبلغ قابل پرداخت</p>

      {pay && (
        <form
          ref={formRef}
          method="POST"
          className="hidden"
          action={pay.redirectUrl}
        >
          {Object.entries(pay.body).map(([key, value]) => (
            <input
              name={key}
              id={key}
              key={key}
              value={value}
            />
          ))}
        </form>
      )}

      <div className="flex flex-col items-end gap-y-[16px]  w-full justify-end">
        {props.order ? (
          <p className="text-[28px] font-semibold">
            {payAmount()?.toLocaleString()} <span className="text-[12px]">تومان</span>
          </p>
        ) : (
          <div className="w-[200px] h-[30px] bg-gray-100 animate-pulse rounded-full" />
        )}
        <Button
          onClick={handlePayment}
          className="w-full font-medium h-[52px] rounded-full"
          variant={"primary"}
        >
          {isPending ? <div className="loader" /> : <>{wallet && hasEnoughBalenceForDirectPayment ? "تکمیل خرید" : "پرداخت آنلاین"}</>}
        </Button>
      </div>
    </div>
  );
}

export default Pay;
