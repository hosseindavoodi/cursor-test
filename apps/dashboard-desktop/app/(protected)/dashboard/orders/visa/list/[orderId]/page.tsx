"use client";
import { useParams, useRouter } from "next/navigation";
import { getServices } from "../../../../../../../lib/services";
import OrderDetail from "../_components/visa.order.detail";
import VisaOrderStatusModifier from "../_components/order.status.modifier";
import { toast } from "sonner";
import VisaOrderDetail from "../_components/visa.order.detail";

function VisaOrderDetailPage() {
  const { orders } = getServices();
  const router = useRouter();
  const params: { orderId: string } = useParams();
  const { mutateAsync } = orders.usePrivateChangeVisaOrderStatus();

  const { data, refetch } = orders.usePrivateVisaOrderDetail({
    queryKey: [{ orderId: params.orderId }],
    enabled: params.orderId ? true : false,
  });

  const handleChangeOrderStatus = async (status: string) => {
    if (!data) return;

    try {
      const updateStatus = await mutateAsync({ orderId: data.id, status: status });

      await refetch();
      toast.success("ویرایش وضعیت با موفقیت انجام شد");
    } catch (error) {
      toast.error("خطا در ویرایش وضعیت سفارش");
    }
  };

  return (
    <div className="p-[30px] flex flex-col gap-y-10">
      <VisaOrderDetail order={data} />
      <VisaOrderStatusModifier
        onStatusChange={(status) => handleChangeOrderStatus(status)}
        status={data?.visa.status}
      />
    </div>
  );
}

export default VisaOrderDetailPage;
