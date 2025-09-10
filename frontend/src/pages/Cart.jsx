import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import API from "../api";

const Cart = () => {
  const { cartItems ,quantity , incQuantity , decQuantity } = useCart();
  console.log(cartItems);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // This will run only once when the component mounts
    const fetchCartItems = async () => {
      try {
        const res = await API.post("/allProducts/cartItems", { cartItems }); // Adjust the endpoint as needed
        // Assuming the response contains the cart items
        setCartData(res.data);
        console.log(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
        alert("Error fetching cart items", err);
      }
    };
    fetchCartItems();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="min-h-screen bg-gray-100 shadow-lg  w-[80%] flex flex-col mx-auto mt-10 p-4 rounded">
      <h1 className="text-3xl font-bold text-center my-8">Cart Page</h1>
      <div>
        {/* Cart items will be displayed here */}
        {cartItems.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty</p>
        ) : (
          <ul className="max-w-2xl mx-auto space-y-4">
            {cartData.map((item, index) => (
              <li
                key={index}
                className="border p-4 justify-between  rounded-lg shadow-md flex items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt="img not found"
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex flex-col">

                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Brand: {item.brand}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h2 className=" font-bold">
                    Quantity
                  </h2>
                  <div className="flex gap-4 items-center cursor-pointer">
                  <p className="text-2xl font-bold" onClick={()=>decQuantity(quantity)}> -</p>
                  <p className="text-center text-xl">{quantity}</p>
                  <p className="text-2xl font-bold cursor-pointer"onClick={()=>incQuantity(quantity)} > +</p>
                  </div>
                </div>

                {/* price */}
                <div>
                  <h2 className=" font-bold">Total Price</h2>
                  <p className="text-center text-xl">${item.price * quantity}</p>
                </div>  
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
