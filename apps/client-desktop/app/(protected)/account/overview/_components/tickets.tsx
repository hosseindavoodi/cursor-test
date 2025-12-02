import { Ticket } from "lucide-react";

function Tickets() {
  return (
    <div className="p-[25px] border border-orange-50 w-full h-[220px] relative rounded-[25px] bg-gradient-to-b from-[#F1FFF3] via-[#E9F9EB] via-20% to-white  ">
      <div className="flex items-center gap-x-2">
        <div className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-gray-50">
          <Ticket
            size={24}
            className="text-green-900"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-green-900 text-[24px] font-semibold">تورهای انجام شده</p>
        </div>
      </div>

      <p className="font-bold absolute left-[25px] bottom-[25px] text-[44px] text-green-900">56</p>
    </div>
  );
}

export default Tickets;
