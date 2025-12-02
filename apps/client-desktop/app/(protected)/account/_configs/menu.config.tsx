import { CircleUserRound, House, Plane, Sparkles, Users, Wallet } from "lucide-react";
import { ReactNode } from "react";

export type AccountMenuConfig = {
  title: string;
  icon?: ReactNode;
  path: string;
  hasSlug?: boolean;
  subPaths: AccountMenuConfig[];
};

export const menuItems: AccountMenuConfig[] = [
  {
    title: "پیشخوان",
    icon: <House />,
    path: "/account/overview",
    subPaths: [],
  },
  {
    title: "پروفایل",
    icon: <CircleUserRound />,
    path: "/account/profile",
    subPaths: [],
  },
  {
    title: "سفرها",
    icon: <Plane />,
    hasSlug: true,
    path: "/account/trips",
    subPaths: [],
  },
  {
    title: "امور مالی",
    icon: <Wallet />,
    path: "/account/financial",
    subPaths: [
      {
        title: "تراکنش ها",
        path: "/account/financial/transactions",
        subPaths: [],
      },
      {
        title: "کیف پول",
        path: "/account/financial/wallet",
        subPaths: [],
      },
    ],
  },
  {
    title: "مسافران",
    path: "/account/passengers",
    icon: <Users />,
    subPaths: [],
  },
  // {
  //   title: "دعوت از دوستان",
  //   path: "/account/referal",
  //   icon: <Sparkles />,
  //   subPaths: [],
  // },
];
