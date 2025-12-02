import { ReactNode, Suspense } from "react";

function VisaOrderLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default VisaOrderLayout;
