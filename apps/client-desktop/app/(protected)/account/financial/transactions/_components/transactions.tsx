import { ReactNode } from "react";

function Transactions({ children }: { children: ReactNode }) {
  return <div className="w-full bg-white flex flex-col gap-y-4 rounded-[25px] border border-gray-300 p-[25px]">{children}</div>;
}

export default Transactions;
