import { ChevronsUpDown, NotepadText, ChevronDown, HousePlus, Users, Receipt, Settings, CircleDollarSign, LucideIcon } from "lucide-react";

interface SubItem {
  title: string;
  url: string;
}

interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  subitems?: SubItem[];
}

export const menuItems: MenuItem[] = [
  {
    title: "ویزا",
    url: "/dashboard/visa",
    icon: NotepadText,
    subitems: [
      { title: "لیست ویزا", url: "/dashboard/visa" },
      { title: "ایجاد ویزا", url: "/dashboard/visa/create" },
    ],
  },
  {
    title: "اقامت",
    url: "/dashboard/residency",
    icon: HousePlus,
    subitems: [
      { title: "لیست اقامت", url: "/dashboard/residency/list" },
      { title: "ایجاد اقامت", url: "/dashboard/residency/create" },
    ],
  },
  {
    title: "مدیریت کاربران",
    url: "/dashboard/users",
    icon: Users,
    subitems: [
      { title: "کاربران سایت", url: "/dashboard/users/list" },
      { title: "کاربران داشبورد", url: "/dashboard/users/panel/list" },
      { title: "مدیریت نقش‌ها و دسترسی‌ها", url: "/dashboard/users/panel/permissions" },
    ],
  },
  {
    title: "سفارش‌ها",
    url: "/dashboard/orders",
    icon: Receipt,
    subitems: [
      { title: "ویزا", url: "/dashboard/orders/visa/list" },
      { title: "اقامت", url: "/dashboard/orders/residency/list" },
      { title: "پرواز", url: "/dashboard/orders/flight/list" },
    ],
  },
  {
    title: "تراکش ها",
    url: "/dashboard/transactions",
    icon: CircleDollarSign,
    subitems: [{ title: "لیست تراکنش ها", url: "/dashboard/transactions" }],
  },
  {
    title: "تنظیمات",
    url: "/dashboard/settings",
    icon: Settings,
    subitems: [{ title: "مدیریت وب سرویس", url: "/dashboard/settings/ws" }],
  },
];
