import { cn } from "@sana/ui/lib/utils";

function OrderCardSkeleton() {
  return (
    <div className="w-full h-[200px] border p-[25px] rounded-[15px] flex flex-col gap-y-[20px]">
      <div className="w-full flex justify-between">
        <div className="flex gap-x-3 items-center">
          <div className="w-[42px] flex justify-center items-center h-[42px] rounded-full bg-gray-100 animate-pulse"></div>
          <div>
            <p className="text-[14px] text-gray-900 font-semibold w-[200px] h-[30px] rounded-full bg-gray-100 animate-pulse"></p>
            <p className="text-[12px] w-[140px] h-[30px] bg-gray-100 animate-pulse rounded-full mt-2 text-gray-500"></p>
          </div>
        </div>

        <div className="flex gap-x-5 items-center">
          <p className="text-[12px] w-[140px] h-[40px] rounded-full bg-gray-100  animate-pulse font-medium"></p>
          <p className={cn("text-[12px] rounded-full h-[40px] px-2  font-semibold w-[100px] bg-gray-100 animate-pulse")}></p>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <p className="text-gray-500 flex gap-x-2 w-[190px] rounded-full h-[30px] bg-gray-100 animate-pulse items-center text-[14px]"></p>
      </div>
    </div>
  );
}

export default OrderCardSkeleton;
