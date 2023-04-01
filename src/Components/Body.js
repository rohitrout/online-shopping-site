import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Shimmer from './Shimmer';


const Body = () => {
  const [ allProducts, setAllProducts ] = useState([])
  const [ filteredProducts, setFilteredProducts ] = useState([])
  const [inputText, setInputText] = useState('')

  useEffect(()=>{
      fetchProducts()
  },[])

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    console.log(json)
    setAllProducts(json)
    setFilteredProducts(json)
  }
  const filterProducts = (inputText, productList) => {
    const filterData = productList.filter((item)=>
      item.title.toLowerCase().includes(inputText.toLowerCase())
    )
    return filterData;
  }

  return allProducts?.length === 0 ? (<Shimmer/>) : (

    <div className='pt-7'>
    <input data-testid="search-input" className='border p-2 ml-6 m-3 w-96 rounded-lg bg-gray-100' 
    onChange={(e)=>{setInputText(e.target.value)}} 
    value={inputText}/>


    <button data-testid="search" className='border p-2 rounded-lg bg-purple-200 hover:bg-purple-300'
     onClick={()=>{
     const data=filterProducts(inputText, allProducts)
     console.log(data)
     setFilteredProducts(data)
     }}>Search</button>

    
    <div className='flex flex-wrap gap-5 p-5' data-testid="product-list">
      {filteredProducts.map((item)=> <Link to={'/products/'+ item.id} key={item.id}><Card key={item.id}info={item}/></Link>)}
      {/* <Card info={data[0]}/> */}
    </div>

    </div>

  )

}

export default Body