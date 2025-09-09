import React, { useEffect, useState } from 'react'
import { useCart } from '../context/cartContext';
import API from '../api';

const Cart = () => {
  const {cartItems} = useCart();
  console.log(cartItems);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // This will run only once when the component mounts
    const fetchCartItems = async () => {
      try {
        const res = await API.post('/allProducts/cartItems',{cartItems} ); // Adjust the endpoint as needed
        // Assuming the response contains the cart items
        setCartData(res.data);
        console.log(res.data);
      } catch (err) {

        console.log(err);
        alert('Error fetching cart items', err);
      }
    };
    fetchCartItems();
  }, []); // Empty dependency array ensures this runs only once


  return (
    <div>
      <h1 className='text-3xl font-bold text-center my-8'>Cart Page</h1>
      <div>
        {/* Cart items will be displayed here */}
        {cartItems.length === 0 ? (
          <p className='text-center text-xl'>Your cart is empty</p>
        ) : (
          <ul className='max-w-2xl mx-auto space-y-4'>
            {cartItems.map((item, index) => (
              <li key={index} className='border p-4 rounded-lg shadow-md flex items-center gap-4'>
                <img src={item.image} alt={item.name} className='w-24 h-24 object-cover rounded' />
                <div>
                  <h2 className='text-xl font-semibold'>{item.name}</h2>
                  <p className='text-gray-600'>Brand: {item.brand}</p>
                  <p className='text-gray-600'>Price: ${item.price}</p>
                  <p className='text-gray-600'>Size: {item.size}</p>
                </div>  
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}

export default Cart