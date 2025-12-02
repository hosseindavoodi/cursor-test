import { Button } from "@sana/ui/components/button";
import { Input } from "@sana/ui/components/input";
import { CreditCard } from "lucide-react";
import { usePayStore } from "../_store/pay.store";
import { getServices } from "../../../../../lib/services";

function PaymentSection() {
  const { setStore, wallet } = usePayStore();

  const services = getServices();

  const { data, isPending } = services.wallet.useWalletBalance({ queryKey: [{ currency: "IRR" }] });

  return (
    <div className="w-full p-[30px] flex flex-col gap-y-[40px]  border rounded-[25px]">
      <div className="flex w-full items-center gap-x-3">
        <CreditCard
          className="text-gray-500"
          size={24}
        />
        <p className="font-semibold text-[24px]">پرداخت</p>
      </div>
      <div className="flex gap-x-3 items-center ">
        <div className="inline-flex items-center">
          <label className="flex items-center cursor-pointer relative">
            <input
              checked={wallet}
              onChange={(e) => setStore({ wallet: e.target.checked })}
              type="checkbox"
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-blue-600 checked:border-blue-600"
              id="check1"
            />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
        </div>
        <p className="text-gray-900">استفاده از اعتبار کیف پول</p>

        {isPending ? (
          <div className="w-[130px] h-[35px] rounded-full bg-gray-100 animate-pulse" />
        ) : (
          <p className="font-semibold text-[14px] bg-gray-100 rounded-full px-4 py-2">{data?.balance.toLocaleString()} تومان</p>
        )}
      </div>
      <p>
        استرداد محصول طبق قوانین و مقررات آن محصول انجام می‌شود و بعد از کسر جریمه، مابه‌التفاوت آن مبلغ به موجودی حساب کاربری شما
        برمی‌گردد.
      </p>

      <div>
        <p>اگر کد تخفیف دارید آن را در کادر زیر وارد و دکمه اعمال را بزنید.</p>
        <div className="w-[480px] h-[52px] mt-1 relative flex ">
          <Input className="w-full h-full rounded-l-none rounded-r-full" />
          <Button
            className="min-w-[164px] h-full rounded-l-full rounded-r-none "
            variant={"primary"}
          >
            اعمال کد تخفیف
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSection;
