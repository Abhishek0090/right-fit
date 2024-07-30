"use client";
import { useCart } from "@/provider/CartProvider";

export default function Cart() {
  const {
    cartData: { cartCount, cartOpen, products },
    setCartData,
    removeProductFromCart,
  } = useCart();

  return (
    <div
      className={`h-full  bg-cartColor w-[450px] ${
        cartOpen ? "fixed right-0 z-50 cart-slide-in" : "hidden cart-slide-out"
      }  p-5`}
    >
      <nav className="flex gap-4 justify-center space-x-4">
        <a href="#" className="text-gray-800 font-bold hover:text-gray-900">
          All Products
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Featured Products
        </a>
        <button
          onClick={() => setCartData((prev) => ({ ...prev, cartOpen: false }))}
        >
          <img src="/images/darkcart.svg" />
        </button>
        <span className="text-black">{cartCount}</span>
      </nav>
      <div className="p-4 flex flex-col gap-6">
        <h3>Shopping Cart</h3>

        <div className="max-h-[80vh] overflow-y-auto flex flex-col gap-6">
          {products.map(({ name, colorId, materialId, price, id }) => (
            <div className="flex gap-4" key={id}>
              <img src="/images/product.svg" className="h-56" />
              <div className="flex flex-col gap-3">
                <span>{name}</span>
                <div className="space-x-4">
                  <span className="font-semibold">{colorId}</span>
                  <span className="font-thin">{materialId}</span>
                </div>
                <span className="text-textColor">{`INR ${price}`}</span>
                <button
                  className="text-white px-4 py-2 bg-btnColor"
                  onClick={() => removeProductFromCart(id)}
                >
                  Remove X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
