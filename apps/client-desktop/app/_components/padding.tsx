import { ReactNode } from "react";

function Padding({ children }: { children: ReactNode }) {
  return <div className="px-[200px]">{children}</div>;
}

export default Padding;
