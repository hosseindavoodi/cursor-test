import { ReactNode, Suspense } from "react";

function PassengerLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default PassengerLayout;
