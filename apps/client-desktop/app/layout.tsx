import { ReactQueryProvider } from "@sana/react-query/index";
import "@sana/ui/globals.css";
import Navbar from "./_components/navbar";
import { Toaster } from "@sana/ui/components/sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ direction: "rtl" }}
        className={`w-full relative font-pinar`}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
