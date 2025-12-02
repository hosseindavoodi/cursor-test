import { ReactNode, Suspense } from "react";
import Navbar from "../../../_components/navbar";

function AvailabilityLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense>
      <div>
        <Navbar varient="default" />
        {children}
      </div>
    </Suspense>
  );
}

export default AvailabilityLayout;
