import React from 'react'

const Shimmer = () => {
  return (
    <div data-testid='shimmer' className='flex flex-wrap p-5 m-5 gap-4 pt-11'>
    {Array(20).fill("").map((item,index)=>(<div key={index} className='w-72 p-4 h-80 border shadow-lg rounded-lg bg-gray-50'></div>))}
    </div>
  )
}

export default Shimmer