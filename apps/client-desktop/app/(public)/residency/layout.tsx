import { ReactNode } from "react";
import Navbar from "../../_components/navbar";

function ResidencyLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar varient="glass" />
      {children}
    </div>
  );
}

export default ResidencyLayout;
