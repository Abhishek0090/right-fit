"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import CartProvider from "@/provider/CartProvider";
import FilterProvider from "@/provider/FilterProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    console.log("Route changed, resetting ads...");
    if (typeof window !== "undefined" && window.adsbygoogle) {
      window.adsbygoogle = [];
    }
  }, [pathname]); // Runs on route change

  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <FilterProvider>
          <CartProvider>{children}</CartProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
