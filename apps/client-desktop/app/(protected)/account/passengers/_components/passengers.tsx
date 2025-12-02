import { ReactNode } from "react";

function Passengers({ children }: { children: ReactNode }) {
  return <div className="w-full p-[25px] flex flex-col gap-y-4 rounded-[25px] border border-gray-300 bg-white">{children}</div>;
}

export default Passengers;
