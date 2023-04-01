/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from './ProductCard'

const Products = () => {
  const {id} = useParams()
  const [ product, setProduct ] = useState([])

  useEffect(()=>{
  getProductInfo()
  },[])

  const getProductInfo = async() => {
    const response = await fetch("https://fakestoreapi.com/products/"+ id)
    const json = await response.json();
    setProduct(json)
    console.log(json)
  }
  return (
    
    <div>
      <div>
        <ProductCard info={product}/>
      </div>

    </div>
  )
}

export default Products