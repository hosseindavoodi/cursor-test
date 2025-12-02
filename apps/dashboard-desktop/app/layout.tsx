import { ReactQueryProvider } from "@sana/react-query";
import "@sana/ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ direction: "rtl" }}
        className={`w-full font-pinar`}
      >
        {/* <Navbar /> */}
        <ReactQueryProvider>{children}</ReactQueryProvider>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
