import { Button } from "@sana/ui/components/button";
import { getServices } from "../../../../../lib/services";
import { useParams } from "next/navigation";
import { accessCheck } from "../../../../_api/auth/auth.actions";
import { useAuthStore } from "../../../../_store/auth.store";
import { toast } from "sonner";
import SuccessDialog from "../../../_components/success.dialog";

function RequestConsult() {
  const { residency } = getServices();

  const { openAuthDialog, setStore } = useAuthStore();

  const params: { countryId: string } = useParams();
  const { data, isPending, mutateAsync: requestOrderHandler, isSuccess } = residency.useResidencyOrderRequest({});

  const handleRequestOrder = async () => {
    const isUserLogin = await accessCheck();

    if (isUserLogin) {
      try {
        const createOrder = await requestOrderHandler({ countryId: params.countryId });

        toast.success("درخواست شما با موفقیت ثبت شد");
      } catch (error) {
        toast.error("بروز خطا در ثبت سفارش");
      }
    } else {
      setStore({ openAuthDialog: true, step: "PHONE" });
    }
  };

  return (
    <div className="p-[25px] h-fit min-w-[363px] flex flex-col gap-y-[20px] border rounded-[25px]">
      <p className="text-[20px] font-semibold">برای مشاوره اطلاعات خود را ثبت کنید</p>

      <Button
        onClick={() => handleRequestOrder()}
        className="w-full rounded-full h-[52px]"
      >
        {isPending ? <span className="loader"></span> : "ثبت درخواست"}
      </Button>

      {isSuccess && <SuccessDialog />}
    </div>
  );
}

export default RequestConsult;
