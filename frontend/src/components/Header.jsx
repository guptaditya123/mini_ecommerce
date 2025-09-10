import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/cartContext'

const Header = () => {
  const {count} = useCart();
  return (
    <div className='flex justify-around p-4 bg-white shadow-md '>
        <div>
            <h1 className='text-2xl font-black cursor-pointer'>Product Listing</h1>

        </div>
        <div className='flex gap-8 text-lg font-semibold'>
          <Link to="/">Home</Link>
            <Link to="/product">Product</Link>
            <Link to="/cart" className='flex gap-1 '>Cart 
            <p className='text-sm font-semibold text-red-400'>{count}</p>
            </Link>
            <Link to="/addProduct">Add Product</Link>
        </div>
    </div>
  )
}

export default Header