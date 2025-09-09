import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("brandName", brandName);
      formData.append("price", price);
      formData.append("image", image);

      const res = await fetch("http://localhost:4000/api/products/upload/img", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data);
      alert("Product added successfully");

      // reset
      setProductName("");
      setBrandName("");
      setPrice(0);
      setImage(null);
      e.target.reset(); // reset file input
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='mt-10 flex flex-col items-center shadow-lg p-10 h-[95%] w-[95%] justify-center mx-auto bg-gray-200'>
      <h1 className='text-2xl font-black uppercase '>Add Your Product To DataBase</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/3 m-auto mt-10'>
        <input 
          type="text"
          placeholder='Product Name'
          className='border-2 m-2 p-2 rounded-md'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input 
          type="text"
          placeholder='Brand Name'
          className='border-2 m-2 p-2 rounded-md'
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <input 
          type="number"
          placeholder='Price'
          className='border-2 m-2 p-2 rounded-md'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input 
          type="file"
          className='border-2 m-2 p-2 rounded-md'
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button 
          type='submit' 
          className='bg-blue-500 text-white m-2 p-2 rounded-md'>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
