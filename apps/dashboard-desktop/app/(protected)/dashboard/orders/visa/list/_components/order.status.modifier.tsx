import { Toggle } from "@sana/ui/components/toggle";
import { orderStatusMapper, visaOrderStatusMapper } from "@sana/utilities/mappers/order.status.mapper";

function VisaOrderStatusModifier(props: { status?: string; onStatusChange: (newStatus: string) => Promise<void> }) {
  return (
    <div className="text-[14px] w-full">
      <p className="text-gray-600">وضعیت سفارش :</p>
      <div className="w-full h-[50px] bg-gray-100 mt-3 py-1 gap-x-3  rounded-[8px] flex ">
        {props.status ? (
          <>
            {Object.entries(visaOrderStatusMapper).map(([key, value]) => (
              <button
                onClick={() => props.onStatusChange(key)}
                className={`${props.status === key ? value?.mainColor + " text-white" : "text-gray-500"} px-4 whitespace-nowrap rounded-lg transition-all w-full`}
              >
                {value?.fa}
              </button>
            ))}
          </>
        ) : (
          <>
            {Array.from({ length: 9 }).map((_, index) => (
              <div className="w-full h-[40px] rounded-lg bg-gray-200 animate-pulse" />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default VisaOrderStatusModifier;
