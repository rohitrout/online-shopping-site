import React from 'react'

const Card = (props) => {
  return (
    <div className='w-72 p-4 border shadow-lg rounded-lg h-84'>
        <img src={props.info.image} alt="imagePic" className='h-52 w-60'/>
        <h2 className='text-sm pt-2'>{props?.info?.title}</h2>
        {/* <h2>{props?.info?.description}</h2> */}
        {/* <h2>{props?.info?.rating?.rate}</h2> */}
        <h2 className='text-lg pt-1'>Price : ₹ {props?.info?.price}</h2>

    </div>
  )
}

export default Card