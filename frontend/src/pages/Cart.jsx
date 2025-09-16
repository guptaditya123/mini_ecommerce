import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import API from "../api";

const Cart = () => {
  const { cartItems, incQuantity, decQuantity } = useCart();
  const [cartData, setCartData] = useState([]);

  console.log("🧺 cartItems from context:", cartItems);

  useEffect(() => {
    const fetchCartItems = async () => {
      console.log("📡 Sending cart payload:", cartItems);
      try {
        const res = await API.post("/allProducts/cartItems", {
          cartItems: cartItems.map((item) => ({
            _id: item._id,
            quantity: item.quantity,
          })),
        });
        console.log("✅ Backend cart response:", res.data);
        setCartData(res.data);
      } catch (err) {
        console.error("❌ Error fetching cart items:", err);
      }
    };

    if (cartItems.length > 0) {
      fetchCartItems();
    } else {
      console.log("⚠️ No cart items to send");
    }
  }, [cartItems]);

  const totalAmount = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-8 text-center">🛒 Your Cart</h1>

        {cartData.length === 0 ? (
          <p className="text-center text-lg text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          <div className="space-y-6">
            {cartData.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border rounded-lg p-4 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`http://localhost:4000${item.image}`}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-500 text-sm">{item.brand}</p>
                    <p className="text-gray-700 font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium mb-2">Quantity</p>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decQuantity(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => incQuantity(item._id)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-500">Total</p>
                  <p className="text-lg font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}

            {/* Cart summary */}
            <div className="flex justify-end pt-6 border-t">
              <div className="text-right">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-2xl font-bold">
                  ${totalAmount.toFixed(2)}
                </p>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
