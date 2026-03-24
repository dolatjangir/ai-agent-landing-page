"use client";

import { usePathname } from "next/navigation";
import Header from "../header/header";
import Footer from "../footer/footer";


export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideRoutes = ["/login"];
  const hideLayout = hideRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}