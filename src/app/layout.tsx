
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HeaderSwitcher from "@/components/HeaderSwitcher/Headerswitcher";


const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "BNB Pro | Next-Gen Property Management",
  description: "Turn your property into a revenue engine with data-driven management.",

    manifest: "/manifest.json",

  themeColor: "#10b981",

  icons: {
     icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased text-slate-900 `}>
        <HeaderSwitcher/>
        <div className=" bg-[var(--bg-secondary)]">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}