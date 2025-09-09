import React, { useState, useEffect } from "react";

const Product = () => {
  const [data, setData] = useState([]);
  const records = [
    {
      id: 1,
      name: "Air Zoom Runner",
      brand: "Nike",
      price: 120,
      size: 42,
      image:
        "https://images.unsplash.com/photo-1606813909355-207a4b8a52b3?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Ultraboost 21",
      brand: "Adidas",
      price: 180,
      size: 43,
      image:
        "https://images.unsplash.com/photo-1606813909673-cd1d7f8e1ec2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Classic Leather",
      brand: "Reebok",
      price: 95,
      size: 41,
      image:
        "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Chuck Taylor All Star",
      brand: "Converse",
      price: 70,
      size: 44,
      image:
        "https://images.unsplash.com/photo-1584735175097-719d848f1c8b?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Gel-Kayano 28",
      brand: "ASICS",
      price: 160,
      size: 42,
      image:
        "https://images.unsplash.com/photo-1629794086993-6c292743ffb4?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Clyde Court",
      brand: "Puma",
      price: 110,
      size: 45,
      image:
        "https://images.unsplash.com/photo-1621605813754-0587d98ae035?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Fresh Foam 1080",
      brand: "New Balance",
      price: 150,
      size: 43,
      image:
        "https://images.unsplash.com/photo-1606813909355-207a4b8a52b3?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Old Skool",
      brand: "Vans",
      price: 65,
      size: 42,
      image:
        "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 9,
      name: "Blazer Mid '77",
      brand: "Nike",
      price: 100,
      size: 44,
      image:
        "https://images.unsplash.com/photo-1627894483270-bf41bb27a6f2?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 10,
      name: "Cloud X",
      brand: "On Running",
      price: 140,
      size: 43,
      image:
        "https://images.unsplash.com/photo-1595950658071-8f4596d6f6c3?auto=format&fit=crop&w=400&q=80",
    },
  ];

  useEffect(() => {
    setData(records);
  }, []); // ✅ runs only once

  return (
    <div className="min-h-screen bg-gray-100 shadow-lg  ">
      <h1 className="text-3xl font-bold text-center my-8">Product Listing</h1>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {data.map((product) => {
          return (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
              <p className="text-gray-600 mb-1">Price: ${product.price}</p>
              <p className="text-gray-600">Size: {product.size}</p>
              <button className="bg-red-400 px-4 text-xl text-white rounded-lg py-2 flex mx-auto cursor-pointer ">Add To Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
