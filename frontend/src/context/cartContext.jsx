import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    // Implement your add to cart logic here
    setCartItems([...cartItems, product]);
    setCount(count + 1);
  };

  const incQuantity = (qty) => {
    setQuantity(qty + 1);
  };
  const decQuantity = (qty) => {
    if (qty > 1) {
      setQuantity(qty - 1);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        count,
        incQuantity,
        decQuantity,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
