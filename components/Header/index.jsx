"use client";

import { useState, useEffect, useMemo } from "react";
import { useCart } from "@/provider/CartProvider";
import { usePathname } from "next/navigation";

export default function Header() {
  const {
    cartData: { products = [] } = {},
    setCartData,
    removeProductFromCart,
  } = useCart(); 
  
  const pathname = usePathname();

  const [darkBg, setDarkBg] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setDarkBg(window.scrollY > 500 || pathname === "/feature-products");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const headerClass = useMemo(
    () =>
      `fixed w-full z-50 transition-colors duration-300 ${
        darkBg
          ? "bg-white text-black sm:bg-opacity-70 sm:backdrop-blur-xl"
          : "bg-transparent text-white"
      }`,
    [darkBg]
  );

  const logoSrc = darkBg
    ? "/images/RIGHTFIT_DARK.COM.svg"
    : "/images/RIGHTFIT.COM.svg";

  const cartIconSrc = darkBg ? "/images/cart_dark.svg" : "/images/cart.svg";

  const linkClass = darkBg ? "text-black" : "text-gray-200";
  const hoverClass = "hover:text-gray-900";

  const hamburgerDark = darkBg
    ? "/images/hamburger_dark.svg"
    : "/images/hamburger_light.svg";

  return (
    <header className={headerClass}>
      <div className="mx-auto px-4 py-4 flex justify-between items-center md:px-20">
        <a href="/">
          <img src={logoSrc} alt="Logo" />
        </a>
        <nav className="hidden md:flex gap-4 space-x-4">
          <a href="/" className={`${linkClass} font-bold ${hoverClass}`}>
            All Products
          </a>
          <a href="/feature-products" className={`${linkClass} ${hoverClass}`}>
            Featured Products
          </a>
          <button
            onClick={() => setCartData((prev) => ({ ...prev, cartOpen: true }))}
          >
            <img src={cartIconSrc} alt="Cart" />
          </button>
          <span className={linkClass}>{products.length}</span>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              setCartData((prev) => ({ ...prev, cartOpen: true }));
              setMenuOpen(false);
            }}
            className="flex items-center gap-2"
          >
            <img src={cartIconSrc} alt="Cart" className="h-6 w-6" />
            <span className={linkClass}>{products.length}</span>
          </button>
          <button className="block" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <div className="text-xl text-black dark:text-white">X</div>
            ) : (
              <img src={hamburgerDark} alt="Menu" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className={`md:hidden ${
            darkBg ? "bg-white text-black" : "bg-gray-800 text-white"
          }`}
        >
          <nav className="flex flex-col items-start px-4 py-2 space-y-2">
            <a href="/" className={`${linkClass} ${hoverClass}`}>
              All Products
            </a>
            <a
              href="/feature-products"
              className={`${linkClass} ${hoverClass}`}
            >
              Featured Products
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
