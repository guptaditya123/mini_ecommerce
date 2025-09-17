import { useContext, createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const updateLocalStorage = (updatedItems) => {
    const cleaned = updatedItems.filter((item) => item && item._id);
    localStorage.setItem("cartItems", JSON.stringify(cleaned));
    const totalCount = cleaned.reduce((sum, i) => sum + i.quantity, 0);
    localStorage.setItem("count", totalCount);
    setCount(totalCount);
  };

  const addToCart = (product) => {
    console.log("🛒 addToCart called with:", product);

    if (!product || !product._id) {
      console.error("❌ Invalid product, must include _id");
      return;
    }

    const existingItem = cartItems.find((item) => item._id === product._id);

    let updatedItems;
    if (existingItem) {
      updatedItems = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedItems = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);

    console.log("🧺 cartItems after add:", updatedItems);
  };

  const incQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const decQuantity = (id) => {
    const updatedItems = cartItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
    updateLocalStorage(updatedItems);
  };

  const removeFromCart = (id) => {
  const updatedItems = cartItems.filter(item => item && item._id !== id);
  setCartItems(updatedItems);

  if (updatedItems.length === 0) {
    // Cart is now empty
    localStorage.removeItem("cartItems");
    localStorage.removeItem("cartData");  // 🔥 clear cartData too
    localStorage.setItem("count", "0");
    setCount(0);
  } else {
    updateLocalStorage(updatedItems);
  }

  console.log("🗑 Removed item:", id, " | Remaining:", updatedItems);
};

  // Load from localStorage on first mount
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const validItems = savedItems.filter((item) => item && item._id);
    const savedCount = parseInt(localStorage.getItem("count") || "0", 10);
    setCartItems(validItems);
    setCount(savedCount);
    console.log("📦 Loaded cart from localStorage:", validItems);
  }, []);

  useEffect(() => {
    console.log("📦 cartItems changed:", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        count,
        incQuantity,
        removeFromCart,
        decQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
