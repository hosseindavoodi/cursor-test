"use client";
import { SidebarProvider, SidebarTrigger } from "@sana/ui/components/sidebar";
import { AppSidebar } from "./_components/sidebar";
import { Breadcrumb } from "./_components/breadcrumb";
import { Toaster } from "@sana/ui/components/sonner";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 bg-[#FAFAFA] w-full ">
        <div className="flex items-center gap-x-3">
          <SidebarTrigger />
          <Breadcrumb />
        </div>
        {children}
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
