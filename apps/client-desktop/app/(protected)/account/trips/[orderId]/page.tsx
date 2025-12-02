"use client";

import { useParams, useRouter } from "next/navigation";
import { getServices } from "../../../../../lib/services";
import { ArrowRight, User } from "lucide-react";
import moment from "moment-jalaali";
import { Button } from "@sana/ui/components/button";
import { visaTypeMapper } from "@sana/utilities/mappers/visa.type.mapper";
import { rialToTomanConvertor } from "@sana/utilities/rial.to.toman.convertor";
import { ProductType } from "@sana/types/order/order";
import VisaDetail from "./_components/visa.detail";
import { orderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";
function OrderDetailPage() {
  const { orders } = getServices();
  const params: { orderId: string } = useParams();

  const { data } = orders.useOrderDetail({ queryKey: [{ orderId: params.orderId }] });

  const renderer = () => {
    switch (data?.product) {
      case ProductType.VISA:
        return <VisaDetail order={data} />;
      case ProductType.FLIGHT:
        return <></>;
      case ProductType.GROUP_TOUR:
        return <></>;
      case ProductType.INDIVIDUAL_TOUR:
        return <></>;
      case ProductType.HOTEL:
        return <></>;
      case ProductType.RESIDENCY:
        return <></>;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-[20px]">
     

      {renderer()}
    </div>
  );
}

export default OrderDetailPage;
