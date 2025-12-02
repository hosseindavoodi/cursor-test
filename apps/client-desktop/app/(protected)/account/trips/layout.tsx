import { ReactNode, Suspense } from "react";

function TripsLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default TripsLayout;
