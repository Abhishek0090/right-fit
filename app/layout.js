import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import CartProvider from "@/provider/CartProvider";
import FilterProvider from "@/provider/FilterProvider";

// app/layout.js or app/layout.tsx
import Script from "next/script";

const nuna = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Right Fit",
  description: "An Ecommerce Website",
};

export default function RootLayout({ children }) {
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
            <CartProvider>
          {children}
           </CartProvider>
       </FilterProvider>
            </body>
    </html>
  );
}
