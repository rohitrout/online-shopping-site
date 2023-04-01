import React from 'react'
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addToCart, decreaseCart} from '../utils/cartSlice'
// import {deleteFromCart} from '../utils/cartSlice'

const CartCard = (props) => {
    const dispatch = useDispatch();
    // const cartVal = useSelector(state=>state.cart.items.cartQuantity)
    const item = props?.info;
    console.log(item.cartQuantity)
    // const {id} = item; 
    
    const handleDecrease = (item) => {
        dispatch(decreaseCart(item))
    }
    const handleIncrease = (item) => {
        dispatch(addToCart(item))
    }
  return (
    
    <div className='flex p-8 items-center justify-around border h-[400px]'>
        <div className='flex flex-col items-center gap-3'>
        <img className='pt-5 w-72 h-80' src={item.image} alt='productImage'/>
        <h3 className='text-gray-400'>Quantity : {item.cartQuantity}</h3>
        </div>
        <div className='ml-4 text-lg pl-5 pt-5'>
        <h2 className='text-3xl'>{item.title.slice(0,27)+"..."}</h2>
        <h2>Price: ₹ {item.price}</h2>
        </div>
        <div>
            {/* <h3 className='mb-3 text-xl'>Quantity: <span className='font-bold'>{item.cartQuantity}</span></h3> */}
            
            <button className='text-3xl font-bold border p-2 w-11 rounded bg-purple-200 mr-3 hover:bg-purple-300' onClick={()=>{handleDecrease(item)}}>-</button>
            <span className='font-bold text-xl'>{item.cartQuantity}</span>
            <button className='text-3xl font-bold border p-2 w-11 rounded ml-3 bg-purple-200 hover:bg-purple-300' onClick={()=>{handleIncrease(item)}}>+</button>
            
        </div>

    </div>
  )
}

export default CartCard