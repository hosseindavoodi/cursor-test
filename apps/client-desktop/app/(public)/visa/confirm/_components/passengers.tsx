import { ReactNode } from "react";

function Passengers({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col gap-y-[20px]">{children}</div>;
}

export default Passengers;
