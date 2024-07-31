import { Inter } from "next/font/google";
import "./globals.css";
import FilterProvider from "@/provider/FilterProvider";
import CartProvider from "@/provider/CartProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Right Fit",
  description: "An Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <FilterProvider>
            <Header />
            {children}
            <Footer />
          </FilterProvider>
        </CartProvider>
      </body>
    </html>
  );
}
