"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@sana/ui/components/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@sana/ui/components/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@sana/ui/components/avatar";
import { ChevronsUpDown, NotepadText, ChevronDown, HousePlus, LucideIcon, Users, Receipt, Settings, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "../../../_config/menu.conf";

export function AppSidebar() {
  const pathname = usePathname();
  const [openCollapsibles, setOpenCollapsibles] = useState<string[]>([]);

  useEffect(() => {
    const activeParent = menuItems.find((item) => pathname.startsWith(item.url));

    if (activeParent) {
      setOpenCollapsibles((prevOpen) => {
        if (!prevOpen.includes(activeParent.title)) {
          return [...prevOpen, activeParent.title];
        }
        return prevOpen;
      });
    }
  }, [pathname]);

  const toggleCollapsible = (title: string) => {
    setOpenCollapsibles((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]));
  };

  return (
    <Sidebar
      side="right"
      dir="rtl"
    >
      <SidebarHeader>
        <div className="flex gap-x-2 items-center py-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-x-2 items-center">
              <Image
                src="/sidebar-icon.svg"
                width={46}
                height={46}
                alt="Logo"
              />
              <div className="flex flex-col">
                <span className="text-[#5D5D5D] font-semibold text-[18px]">ثناپرشین</span>
                <p className="text-[#5D5D5D] text-[14px] font-normal">پنل مدیریت</p>
              </div>
            </div>
            <ChevronsUpDown
              size={20}
              className="text-[#5D5D5D]"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>منو</SidebarGroupLabel>
          <SidebarGroupContent>
            {menuItems.map((item) => {
              const isOpen = openCollapsibles.includes(item.title);
              return (
                <Collapsible
                  key={item.title}
                  open={isOpen}
                  onOpenChange={() => toggleCollapsible(item.title)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between w-full p-2 rounded-md">
                        <div className="flex items-center">
                          <item.icon className="ml-2 w-4 h-4" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.subitems?.map((subitem) => {
                          const isSubItemActive = pathname.includes(subitem.url);
                          return (
                            <SidebarMenuSubItem key={subitem.title}>
                              <Link
                                href={subitem.url}
                                className={`flex items-center w-full pr-1 py-1 text-sm rounded-md hover:bg-gray-100 ${isSubItemActive ? " text-primary-300" : ""}`}
                              >
                                {subitem.title}
                              </Link>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="bg-black/10 w-full h-[1px]"></div>
        <div className="flex items-center justify-between pl-2">
          <div className="flex items-center gap-x-2">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-[#5D5D5D] font-semibold text-[14px]">نوشین شیبانی</span>
              <p className="text-[#5D5D5D] text-[12px] font-normal">nooshin@sanapersian.com</p>
            </div>
          </div>
          <ChevronsUpDown
            size={20}
            className="text-[#5D5D5D]"
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
