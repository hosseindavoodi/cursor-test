import { ReactNode, Suspense } from "react";

function UsersLayout({ children }: { children: ReactNode }) {
  return <Suspense>{children}</Suspense>;
}

export default UsersLayout;
