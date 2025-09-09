import { useContext,createContext,useState } from "react";

const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(0);
    const addToCart = (product) => {
        console.log("Adding to cart:", product);
        // Implement your add to cart logic here
        setCartItems([...cartItems, product]);
        setCount(count + 1);
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, count }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

