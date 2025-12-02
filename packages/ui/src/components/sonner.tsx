"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      dir="rtl"
      toastOptions={{
        className: "font-pinar",
        classNames: {
          success: "bg-green-50! text-green-900! border-green-400!",
          error: "bg-red-50! text-red-900! border-red-400!",
          warning: "bg-orange-50! text-orange-900! border-orange-400!",
        },
      }}
      className="toaster group"
      // style={
      //   {
      //     "--normal-bg": "var(--popover)",
      //     "--normal-text": "var(--popover-foreground)",
      //     "--normal-border": "var(--border)",
      //   } as React.CSSProperties
      // }
      {...props}
    />
  );
};

export { Toaster };
