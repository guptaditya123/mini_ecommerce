import React, { useState, useEffect } from "react";
import API from "../api";
import { useCart } from "../context/cartContext";

const Product = () => {
  const [data, setData] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get("/allProducts");
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
        alert("Error fetching products", err);
      }
    };
    fetchData();
  }, [setData]); // ✅ runs only once

  return (
    <div className="min-h-screen bg-gray-100 shadow-lg  ">
      <h1 className="text-3xl font-bold text-center my-8">Product Listing</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow-md">
            <img
              src={`http://localhost:4000${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
            <p className="text-gray-600 mb-1">Price: ${product.price}</p>
            <p className="text-gray-600">Size: {product.size}</p>
            <button
              className="bg-red-400 px-4 text-xl text-white rounded-lg py-2 flex mx-auto cursor-pointer"
              onClick={() => addToCart(product)}
            >
              Add To Cart
              
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
