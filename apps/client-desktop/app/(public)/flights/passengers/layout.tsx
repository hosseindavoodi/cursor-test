import { ReactNode } from "react";
import Navbar from "../../../_components/navbar";
import Stepper from "../availability/_components/stepper";
import Padding from "../../../_components/padding";

function PassegnersLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full pt-[200px]  ">
      <Navbar varient="glass" />
      <Padding>
        <Stepper step={2} />
        {children}
      </Padding>
    </div>
  );
}

export default PassegnersLayout;
