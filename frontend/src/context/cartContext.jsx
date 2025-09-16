import { useContext, createContext, useState , useEffect} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
   const [count , setCount] = useState(0);

  const addToCart = (product) => {
    console.log("🛒 addToCart called with:", product);
    setCount(count + 1);
    console.log("🧮 Updated count:", count + 1);

    // Ensure product has _id
    if (typeof product === "string") {
      console.error("❌ Product is just an ID, must be full object");
      return;
    }

    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    console.log("🧺 cartItems after add:", [...cartItems, { ...product, quantity: 1 }]);
  };

  const incQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    console.log("📦 cartItems changed:", cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart,count, incQuantity, decQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
