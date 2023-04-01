import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../utils/cartSlice'


const ProductCard = (props) => {
    const item = props?.info;
    const dispatch = useDispatch()

    const clickHandler=(item)=>{
        dispatch(addToCart(item))
    }
  return (
    
    <div className='flex p-8 pb-96' data-testid='prod'>
        <div>
        <h2 className='text-gray-400'>Category: {item.category}</h2>
        <img className='pt-5 h-[400px] w-[570px]' src={item.image} alt='productImage'/>
        </div>
        <div className='ml-4 text-lg pl-5 pt-5'>
        <h2 className='text-3xl'>{item.title}</h2>
        <h2>Price: ₹ {item.price}</h2>
        <h2>Ratings: {item.rating?.rate}</h2>
        <h2>Description: {item.description}</h2>
        <button className='border p-4 mt-14 hover:bg-purple-300' data-testid='addBtn' onClick={()=>clickHandler(item)}>ADD TO CART</button>
        </div>

    </div>
  )
}

export default ProductCard