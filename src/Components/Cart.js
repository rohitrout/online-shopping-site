import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const Cart = () => {
  const cart = useSelector(state=>state.cart.items)

  
  return cart.length === 0 ? <h1 className='text-3xl p-10'>No Items in Cart...</h1> : (
    <div>
      {cart.map((item)=><CartCard key={item.id} info={item}/>)}
      {/* <CartCard info={cart[0]}/> */}
    </div>
  )
}

export default Cart