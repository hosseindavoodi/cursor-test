import { ReactNode } from "react";

function StickySidebar({ children }: { children: ReactNode }) {
  return <div className="min-w-[370px] flex flex-col gap-y-[24px] sticky top-5">{children}</div>;
}

export default StickySidebar;
