import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around p-4 bg-white shadow-md '>
        <div>
            <h1 className='text-2xl font-black cursor-pointer'>Product Listing</h1>

        </div>
        <div className='flex gap-8 text-lg font-semibold'>
            <Link to="/product">Product</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/addProduct">Add Product</Link>
        </div>
    </div>
  )
}

export default Header