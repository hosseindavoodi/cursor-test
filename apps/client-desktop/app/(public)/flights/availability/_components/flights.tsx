import { ReactNode } from "react";

function Flights({ children }: { children: ReactNode }) {
  return <div className="w-full flex flex-col gap-y-10">{children}</div>;
}

export default Flights;
