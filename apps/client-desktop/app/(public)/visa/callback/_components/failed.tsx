import SuccessPaymentSvg from "@sana/assets/success-payment.svg";
import FailedPaymentSvg from "@sana/assets/failed-payment.svg";
import { Button } from "@sana/ui/components/button";
import { RefreshCcw } from "lucide-react";

function FailedPayment() {
  return (
    <div className="w-[1000px] bg-white border rounded-[25px] pt-[50px] pb-[80px] flex flex-col justify-center items-center">
      <FailedPaymentSvg />

      <p className="text-[24px] mt-5 text-red-700 font-semibold">پرداخت ناموفق</p>
      <p className="text-[16px] mt-5 text-gray-600">
        پرداخت شما ناموفق بود، در صورتی که پول از حساب شما کسر شده است (طبق قوانین بانکی) نهایتا تا ۶ ساعت آينده به حساب شما باز میگردد.
      </p>

      <Button
        className="w-[420px] h-[52px] mt-20 rounded-full"
        variant={"primary"}
      >
        <RefreshCcw size={20} />
        <p>تلاش مجدد</p>
      </Button>
    </div>
  );
}

export default FailedPayment;
