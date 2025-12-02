import { ReactNode, Suspense } from "react";
import Navbar from "../../_components/navbar";

function VisaLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <Navbar varient="glass" />
      {children}
    </Suspense>
  );
}

export default VisaLayout;
