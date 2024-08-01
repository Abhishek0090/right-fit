"use client";

import { useState, useEffect } from "react";
import { useCart } from "@/provider/CartProvider";

export default function Header() {
  const {
    cartData: { products },
    setCartData,
  } = useCart();
  const [darkBg, setDarkBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setDarkBg(true);
      } else {
        setDarkBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full z-50 bg-transparent">
      <div className="mx-auto px-20 py-4 flex justify-between items-center">
        <a href="/">
          {darkBg ? (
            <img src="/images/RIGHTFIT_DARK.COM.svg" />
          ) : (
            <img src="/images/RIGHTFIT.COM.svg" />
          )}
        </a>
        <nav className="flex gap-4  space-x-4">
          <a
            href="/"
            className={`${
              darkBg ? "text-black" : "text-gray-200"
            } font-bold hover:text-gray-900`}
          >
            All Products
          </a>
          <a
            href="/feature-products"
            className={`${
              darkBg ? "text-black" : "text-gray-200"
            }  hover:text-gray-900`}
          >
            Featured Products
          </a>
          <button
            onClick={() => setCartData((prev) => ({ ...prev, cartOpen: true }))}
          >
            {darkBg ? (
              <img src="/images/cart_dark.svg" />
            ) : (
              <img src="/images/cart.svg" />
            )}
          </button>
          <span className={`${darkBg ? "text-black" : "text-gray-200"} `}>
            {products.length}
          </span>
        </nav>
      </div>
    </header>
  );
}
