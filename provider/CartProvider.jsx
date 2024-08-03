"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartData, setCartData] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartData");
      return storedCart
        ? JSON.parse(storedCart)
        : { cartOpen: false, cartCount: 0, products: [] };
    } 
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartData", JSON.stringify(cartData));
    }
  }, [cartData]);

  const addProductToCart = (product) => {
    setCartData((prevState) => {
      const updatedProducts = [...prevState.products, product];
      return {
        ...prevState,
        products: updatedProducts,
        cartCount: updatedProducts.length,
      };
    });
  };

  const removeProductFromCart = (pIdx) => {
    setCartData((prevState) => {
      const updatedProducts = prevState.products.filter(
        (_, index) => index !== pIdx
      );
      return {
        ...prevState,
        products: updatedProducts,
        cartCount: updatedProducts.length,
      };
    });
  };

  const cartMemoValue = useMemo(
    () => ({
      cartData,
      setCartData,
      addProductToCart,
      removeProductFromCart,
    }),
    [cartData]
  );

  return (
    <CartContext.Provider value={cartMemoValue}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);

export default CartProvider;
