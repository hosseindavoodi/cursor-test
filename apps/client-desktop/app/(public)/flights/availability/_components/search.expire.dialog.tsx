"use client";
import SearchExpireIcon from "@sana/assets/icons/flight/availability/search-expire.svg";
import { Button } from "@sana/ui/components/button";
import { useFlightSearchStore } from "../../../../_store/flight.search.store";
import { getServices } from "../../../../../lib/services";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "@sana/ui/components/dialog";

function SearchExpiredPopup() {
  const { flight } = getServices();

  const router = useRouter();
  const resultValidForSeconds = 1200;
  const [renderExpirePopup, setRenderExpirePopup] = useState(false);
  const { requestedPayload, timePassed, timeout } = useFlightSearchStore();
  const { data, isPending, refetch, isRefetching } = flight.useFlightAvailable({
    queryKey: [requestedPayload!],
    enabled: Boolean(requestedPayload) && timePassed < timeout,
    // refetchInterval: enablePolling ? 4000 : false,
  });

  useEffect(() => {
    if (!isPending && data?.data.data) {
      const timeout = setTimeout(() => {
        setRenderExpirePopup(true);
      }, resultValidForSeconds * 1000);

      return () => {
        clearTimeout(timeout);
        setRenderExpirePopup(false);
      };
    }

    if (!isRefetching) {
      setRenderExpirePopup(false);
    }
  }, [isPending, isRefetching]);

  return (
    renderExpirePopup && (
      <Dialog open>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent
          showCloseButton={false}
          overlayClassName="z-[999]"
          className="w-fit z-[9999]"
        >
          <div className="  h-fit w-[550px]  p-[32px]    rounded-[25px] bg-white flex flex-col justify-center items-center">
            <SearchExpireIcon />
            <div className="text-center mt-[32px]">
              <p className="text-[24px] font-bold">اعتبار نتایج به پایان رسید</p>
              <p className="text-[16px] text-gray-600 mt-3 ">برای دیدن آخرین نرخ‌ها لطفا صفحه را مجددا بارگذاری کنید.</p>
            </div>

            <div className="grid mt-[32px] grid-cols-2 w-full gap-x-2">
              <Button
                onClick={() => refetch()}
                className="h-[52px] text-[18px] rounded-full"
                variant={"primary"}
              >
                به روزرسانی جستجو
              </Button>
              <Button
                onClick={() => router.push("/")}
                className="h-[52px] border-gray-400 font-medium  text-black text-[18px] rounded-full"
                variant={"outline"}
              >
                بازگشت به صفحه اصلی
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  );
}

export default SearchExpiredPopup;
