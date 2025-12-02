import { ReactNode, Suspense } from "react";

function PaymentLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default PaymentLayout;
