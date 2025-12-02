import { Order, ProductType } from "@sana/types/order/order";
import { Button } from "@sana/ui/components/button";
import { CircleArrowLeft } from "lucide-react";
import VisaOrder from "./visa.order.card";
import { useOrderStore } from "../_store/orders.store";
import { useRouter } from "next/navigation";
import ResidencyOrderCard from "./residency.order.card";

function OrderCard(props: { order: Order }) {
  const { setStore } = useOrderStore();

  const router = useRouter();

  const renderer = () => {
    switch (props.order.product) {
      case ProductType.VISA:
        return <VisaOrder order={props.order} />;
      case ProductType.RESIDENCY:
        return <ResidencyOrderCard order={props.order} />;
      case ProductType.FLIGHT:
        return <></>;
      case ProductType.GROUP_TOUR:
        return <></>;
      case ProductType.INDIVIDUAL_TOUR:
        return <></>;
    }
  };

  return (
    <div className="w-full border  border-gray-300 rounded-[15px] flex flex-col ">
      <div className="p-[30px]"> {renderer()}</div>

      <div className="w-full h-[60px] border-t flex justify-center items-center border-gray-300">
        <Button
          onClick={() => router.push(`/account/trips/${props.order.id}`)}
          variant={"link"}
        >
          <p>جزئیات سفارش</p>
          <CircleArrowLeft size={20} />
        </Button>
      </div>
    </div>
  );
}

export default OrderCard;
