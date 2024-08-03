"use client";
import { useCart } from "@/provider/CartProvider";

export default function Cart() {
const {
  cartData: { cartCount = 0, cartOpen = false, products = [] } = {},
  setCartData,
  removeProductFromCart,
} = useCart();


  return (
    <div
      className={`h-full bg-cartColor w-full sm:w-[450px] ${
        cartOpen ? "fixed right-0 z-50 cart-slide-in" : "hidden cart-slide-out"
      } p-5`}
    >
      <nav className="flex gap-4 justify-between sm:justify-center sm:space-x-4">
        <a href="/" className="text-gray-800 font-bold hover:text-gray-900">
          All Products
        </a>
        <a
          href="/feature-products"
          className="text-gray-600 hover:text-gray-900"
        >
          Featured Products
        </a>
        <button
          onClick={() => setCartData((prev) => ({ ...prev, cartOpen: false }))}
        >
          <img src="/images/darkcart.svg" alt="Close Cart" />
        </button>
        <span className="text-black">{cartCount}</span>
      </nav>
      <div className="p-4 flex flex-col gap-6">
        <h3 className="text-lg sm:text-xl font-semibold">Shopping Cart</h3>

        <div className="max-h-[60vh] sm:max-h-[80vh] overflow-y-auto flex flex-col gap-6">
          {products?.length > 0 ? (
            products.map(({ name, color, material, price, id }, index) => (
              <div className="flex gap-4" key={id}>
                <img
                  src="/images/product.svg"
                  className="h-24 sm:h-32"
                  alt={name}
                />
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium">{name}</span>
                  <div className="space-x-2 sm:space-x-4">
                    <span className="font-semibold">{color}</span>
                    <span className="font-thin">{material}</span>
                  </div>
                  <span className="text-textColor">{`INR ${price}`}</span>
                  <button
                    className="text-white px-3 py-1 sm:px-4 sm:py-2 bg-btnColor rounded-md"
                    onClick={() => removeProductFromCart(index)}
                  >
                    Remove X
                  </button>
                </div>
              </div>
            ))
        ) : (
            <div className="text-center">No Product in Cart 🙃</div>
          )}
        </div>
      </div>
    </div>
  );
}
