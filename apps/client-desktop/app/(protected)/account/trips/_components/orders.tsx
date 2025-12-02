import { ReactNode } from "react";

function Orders({ children }: { children: ReactNode }) {
  return <div className="w-full bg-white rounded-[25px] border border-gray-300 p-[25px] flex flex-col gap-y-[12px]">{children}</div>;
}

export default Orders;
