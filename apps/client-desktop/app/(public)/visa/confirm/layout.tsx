import { ReactNode, Suspense } from "react";

function VisaConfirmLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default VisaConfirmLayout;
