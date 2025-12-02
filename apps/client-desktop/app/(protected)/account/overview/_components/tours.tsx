import { Plane } from "lucide-react";

function Tours() {
  return (
    <div className="p-[25px] border border-orange-50 w-full h-[220px] relative rounded-[25px] bg-gradient-to-b from-[#EFF9FF] via-[#E1F1FA] via-20% to-white  ">
      <div className="flex items-center gap-x-2">
        <div className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-gray-50">
          <Plane
            size={24}
            className="text-blue-900"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-blue-900 text-[24px] font-semibold">تورهای انجام شده</p>
        </div>
      </div>

      <p className="font-bold absolute left-[25px] bottom-[25px] text-[44px] text-blue-900">56</p>
    </div>
  );
}

export default Tours;
