import { History } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { usePassengersStore } from "../_store/passenger.store";
import qs from "qs";
import { useRouter } from "next/navigation";

function Timer(props: { validTo: string }) {
  const [remainingSec, setRemainingSec] = useState<number>(0);
  const { requestedPayload } = usePassengersStore();
  const router = useRouter();
  useEffect(() => {
    if (props.validTo) {
      const calc = () => {
        const now = Date.now();
        const diffSec = Math.floor((parseInt(props.validTo) - now) / 1000);
        setRemainingSec(diffSec);

        return diffSec;
      };

      calc();
      const interval = setInterval(() => {
        const remainingSec = calc();
        if (remainingSec <= 0) {
          toast.warning("مدت زمان اعتبار این پرواز به اتمام رسید لطفا دوباره جستجو کنید");

          const queries = qs.stringify(requestedPayload);

          router.push(`/flights/availability?${queries}`);
          clearInterval(interval);
        }
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [props.validTo]);

  // useEffect(() => {
  //   if (remainingSec <= 0 && intervalRef.current) {
  //     clearInterval(intervalRef.current);
  //     intervalRef.current = null;
  //   }
  // }, [remainingSec]);

  const display = remainingSec > 0 ? formatMMSS(remainingSec) : "00:00";

  return (
    <div className="w-full flex justify-between items-center p-[25px] rounded-[25px] border">
      <p className="font-semibold text-[24px]">مشخصات مسافر</p>

      <div className="flex  text-[14px] gap-x-1 text-red-500 items-center ">
        <History size={20} />
        <p>مدت زمان باقی مانده برای تکمیل خرید :</p>
        <p className="font-semibold w-[40px] text-center">{display}</p>
      </div>
    </div>
  );
}

export default Timer;

function formatMMSS(totalSeconds: number): string {
  const mins = Math.floor(Math.abs(totalSeconds) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (Math.abs(totalSeconds) % 60).toString().padStart(2, "0");
  return `${totalSeconds < 0 ? "-" : ""}${mins}:${secs}`;
}
