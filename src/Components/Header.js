import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Title = () => {
  return <h1 data-testid='title' className='text-3xl font-bold text-white'>ONLINE_SHOPPING_STORE</h1>
}

const Header = () => {
  const cartItems = useSelector(state=>state.cart.items)

  return (
    <div className='bg-purple-400 flex justify-between p-8 shadow-lg'>
      <Link to="/"><Title/></Link>
      <ul className='text-xl flex gap-5 pr-12 text-white'>
        <li><Link to="/">HOME</Link></li>
        <li data-testid='cart'><Link to="/cart">CART ( {cartItems.length} )</Link></li>
      </ul>
    </div>
  )
}

export default Header