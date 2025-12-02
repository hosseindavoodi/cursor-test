import { ReactNode } from "react";

function OrderDetails({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}

export default OrderDetails;
