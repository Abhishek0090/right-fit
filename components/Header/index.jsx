"use client";

import { useCart } from "@/provider/CartProvider";

export default function Header() {
  const {
    cartData: { products },
    setCartData,
  } = useCart();

  return (
    <header className="fixed w-full z-50">
      <div className="mx-auto px-20 py-4 flex justify-between items-center">
        <a href="/">
          <img src="/images/RIGHTFIT.COM.svg" />
        </a>
        <nav className="flex gap-4  space-x-4">
          <a href="/" className="text-gray-200 font-bold hover:text-gray-900">
            All Products
          </a>
          <a
            href="/feature-products"
            className="text-gray-300 hover:text-gray-900"
          >
            Featured Products
          </a>
          <button
            onClick={() => setCartData((prev) => ({ ...prev, cartOpen: true }))}
          >
            <img src="/images/cart.svg" />
          </button>
          <span className="text-white">{products.length}</span>
        </nav>
      </div>
    </header>
  );
}
