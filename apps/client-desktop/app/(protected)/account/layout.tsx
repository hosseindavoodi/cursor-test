import { ReactNode } from "react";
import Navbar from "../../_components/navbar";
import AccountrSideBar from "./_components/sidebar";

function AccountLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" w-full min-h-screen bg-gray-100">
      <Navbar varient="glass" />

      <div className="flex gap-x-[20px] px-[100px] pt-[200px] pb-[150px]">
        <AccountrSideBar />
        {children}
      </div>
    </div>
  );
}

export default AccountLayout;
