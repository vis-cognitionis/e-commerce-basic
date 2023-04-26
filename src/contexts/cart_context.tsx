import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductCardProps } from "service/interface";

interface CartContextProps {
  cart: ProductCardProps[];
  addToCart: (product: ProductCardProps) => void;
  removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // required to add products to the cart and to determine the amount of the added product
  const addToCart = (product: ProductCardProps) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        const newCart = [...prevCart];
        newCart[index] = {
          ...newCart[index],
          quantity: newCart[index].quantity + 1,
        };
        return newCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // required to remove items in the cart
  // uses only productId data to remove product
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex(
        (product) => Number(product.id) === productId
      );

      if (index === -1) {
        return prevCart;
      }
      if (prevCart[index].quantity > 1) {
        const updatedCart = [...prevCart];
        updatedCart[index] = {
          ...updatedCart[index],
          quantity: updatedCart[index].quantity - 1,
        };
        return updatedCart;
      } else {
        return prevCart.filter((product) => Number(product.id) !== productId);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
