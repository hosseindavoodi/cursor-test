"use client";
import { Button } from "@sana/ui/components/button";
import { getServices } from "../../../../lib/services";
import { AccountMenuConfig, menuItems } from "../_configs/menu.config";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@sana/ui/lib/utils";
import { ChevronLeft, LogOut } from "lucide-react";

function AccountrSideBar() {
  const services = getServices();
  const { data } = services.user.useUserProfile({ queryKey: ["USER_PROFILE"] });

  return (
    <div className="min-w-[362px] w-[362px] bg-gray-50 border border-gray-300 px-[10px] py-[20px] rounded-[25px] bg-gray flex flex-col gap-y-[10px]">
      <div className="w-full flex justify-between items-center h-[110px] py-[20px] px-[16px]">
        <div className="flex items-center gap-x-2">
          <div className="bg-gradient-to-b from-[#4730D8] flex items-center justify-center text-white font-medium   w-[50px] h-[50px] rounded-full to-[#7D74B9]">
            {data?.firstName ? data.firstName[0] : "م"}
          </div>
          <p>{data?.firstName ? data.firstName + " " + data.lastName : "مسافر گرامی"}</p>
        </div>
      </div>

      {menuItems.map((item, index, items) => (
        <div className="w-full flex flex-col gap-y-2">
          <MenuButton
            {...item}
            isSub={false}
            key={item.title}
          />
          <hr
            key={index}
            className="border-gray-200"
          />
        </div>
      ))}

      <button className="text-red-600 flex px-[16px] py-[13.5px] font-medium items-center gap-x-2">
        <LogOut size={20} />
        <p>خروج</p>
      </button>
    </div>
  );
}

export default AccountrSideBar;

const MenuButton = (props: AccountMenuConfig & { isSub: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = props.hasSlug ? pathname.includes(props.path) : pathname === props.path;
  const hasActiveSub = Boolean(props.subPaths.find((path) => path.path === pathname));

  const routeOnClickHandler = () => {
    if (props.subPaths.length > 0) {
      router.push(props.subPaths[0]?.path as string);
    } else {
      router.push(props.path);
    }
  };

  return (
    <>
      <button
        onClick={() => routeOnClickHandler()}
        className={cn(
          "px-[16px] w-full py-[13.5px] text-[18px] flex justify-between items-center rounded-[15px] font-medium",
          isActive ? "bg-[#F7F7F7] text-primary-600" : "text-gray-500"
        )}
      >
        <div className="flex gap-x-2">
          <div className={``}>{props.icon}</div>
          <p>{props.title}</p>
        </div>
        {!props.isSub && <ChevronLeft className={cn("transition-all", hasActiveSub ? "-rotate-90" : "rotate-0")} />}
      </button>
      {hasActiveSub && (
        <div className="w-full pr-5 flex flex-col ">
          {props.subPaths.map((subPath) => (
            <MenuButton
              {...subPath}
              isSub
              key={subPath.title}
            />
          ))}
        </div>
      )}
    </>
  );
};
