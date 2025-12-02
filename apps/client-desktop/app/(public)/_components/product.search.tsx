"use client";
import FlightIcon from "@sana/assets/icons/landing/plane-icon.svg";
import TourIcon from "@sana/assets/icons/landing/baggage.svg";
import GroupTourIcon from "@sana/assets/icons/landing/tour-icon.svg";
import HotelIcon from "@sana/assets/icons/hotel.svg";
import { ReactNode } from "react";
import { useProductSearchStore } from "../../_store/product.search.store";
import { motion } from "framer-motion";
import { cn } from "@sana/ui/lib/utils";
import FlightSearch from "./flight.search";

function ProductSearch() {
  const { productType, setStore } = useProductSearchStore();

  const renderer = (): ReactNode => {
    switch (productType) {
      case "FLIGHT":
        return <FlightSearch />;
      case "HOTEL":
        return <></>;
      case "GROUP_TOUR":
        return <></>;
      case "INDIVIUAL_TOUR":
        return <></>;
      default:
        break;
    }
  };

  return (
    <div className="w-full  -mt-[200px] z-[15] relative bg-white rounded-[25px] h-[320px]  border">
      <motion.div className="flex w-full gap-x-5 px-5  items-center border-b  h-[70px] ">
        <ProductTypeButton
          title="پرواز"
          icon={<FlightIcon />}
          isActive={productType === "FLIGHT"}
          onClick={() => setStore({ productType: "FLIGHT" })}
        />
        <ProductTypeButton
          title="تور گروهی"
          icon={<GroupTourIcon />}
          isActive={productType === "GROUP_TOUR"}
          onClick={() => setStore({ productType: "GROUP_TOUR" })}
        />
        <ProductTypeButton
          title="تور شخصی"
          icon={<TourIcon />}
          isActive={productType === "INDIVIUAL_TOUR"}
          onClick={() => setStore({ productType: "INDIVIUAL_TOUR" })}
        />
        <ProductTypeButton
          title="هتل"
          icon={<HotelIcon />}
          isActive={productType === "HOTEL"}
          onClick={() => setStore({ productType: "HOTEL" })}
        />
      </motion.div>

      <div className="p-[30px]">{renderer()}</div>
    </div>
  );
}

export default ProductSearch;

const ProductTypeButton = (props: { title: string; isActive: boolean; icon: ReactNode; onClick: () => void }) => {
  return (
    <button
      onClick={props.onClick}
      className={`${cn("flex w-[100px] h-full relative transition-all items-center gap-x-2 stroke-gray-500 justify-center", props.isActive && "stroke-primary-500 text-primary-500")}`}
    >
      <div className="w-[20px] h-[20px]">{props.icon}</div>
      <p>{props.title}</p>
      {props.isActive && (
        <motion.div
          layoutId="active_state_underline"
          className="w-full h-[2px] rounded-2xl absolute bottom-0 bg-primary-500"
        />
      )}
    </button>
  );
};
