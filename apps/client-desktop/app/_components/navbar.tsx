import { Button } from "@sana/ui/components/button";
import SanaPersianLogo from "../../public/sana-logo-navbar.svg";
import AuthDialog from "./auth.dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@sana/ui/components/popover";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@sana/ui/components/dropdown.menu";
import { cookies } from "next/headers";
import User from "./user";
import Link from "next/link";
async function Navbar(props: { varient: "glass" | "default" }) {
  const cookiesData = await cookies();
  const accessToken = cookiesData.get("accessToken")?.value;
  const refreshToken = cookiesData.get("refreshToken")?.value;

  return props.varient === "glass" ? (
    <div className="absolute w-full z-[5] top-[40px] px-[40px]">
      <div className="w-full h-[82px] pr-[50px] pl-[15px] border-white/30 backdrop-blur-sm bg-[#e0d5cd]/20 border flex items-center justify-between rounded-full  ">
        <Link href={"/"}>
          <SanaPersianLogo className="min-w-fit" />
        </Link>

        <div className="w-full justify-center flex gap-x-[60px] text-gray-900 items-center ">
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
                <p>بلیط</p>
                <ChevronDown size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80"></PopoverContent>
          </Popover> */}
          {/* <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
                <p>تور خارجی</p>
                <ChevronDown size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80"></PopoverContent>
          </Popover> */}
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger className="flex items-center gap-x-2">
              <p>بلیط</p>
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={"/"}>بلیط پرواز</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href={"/residency"}
            className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer"
          >
            <p>اقامت</p>
          </Link>

          <Link
            href={"/visa"}
            className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer"
          >
            <p>ویزا</p>
          </Link>

          {/* <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
            <p>باشگاه مشتریان</p>
          </Button> */}
        </div>

        {refreshToken ? <User varient={props.varient} /> : <AuthDialog />}
      </div>
    </div>
  ) : (
    <div className="w-full flex px-[200px] border-b justify-between py-[20px] bg-white ">
      <Link href={"/"}>
        <SanaPersianLogo className="min-w-fit" />
      </Link>

      <div className="w-full justify-center flex gap-x-[60px] text-gray-900 items-center ">
        {/* <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
                <p>بلیط</p>
                <ChevronDown size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80"></PopoverContent>
          </Popover> */}
        {/* <Popover>
            <PopoverTrigger asChild>
              <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
                <p>تور خارجی</p>
                <ChevronDown size={20} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80"></PopoverContent>
          </Popover> */}

        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger className="flex items-center gap-x-2">
            <p>بلیط</p>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link href={"/"}>بلیط پرواز</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          href={"/residency"}
          className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer"
        >
          <p>اقامت</p>
        </Link>

        <Link
          href={"/visa"}
          className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer"
        >
          <p>ویزا</p>
        </Link>

        {/* <Button className="bg-transparent text-gray-900 hover:bg-transparent hover:text-primary-400 cursor-pointer">
            <p>باشگاه مشتریان</p>
          </Button> */}
      </div>
      {refreshToken ? <User varient={props.varient} /> : <AuthDialog />}
    </div>
  );
}

export default Navbar;
