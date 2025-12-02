import { ReactNode, Suspense } from "react";

function ResidencyOrderLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default ResidencyOrderLayout;
