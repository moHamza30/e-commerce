import React, { createContext, useEffect, useState } from 'react'


export const productsContext = createContext();



const Productsprovider = ({children}) => {
 const [products,setProducts] = useState([])
 const [category, setCategory] = useState("")

 useEffect(()=>{
    getProducts();
 },[])
 const getProducts =()=>{
      fetch('https://fakestoreapi.com/products')
     .then((res)=> res.json())
     .then((data)=>{
     setProducts(data)
   
      })
 }

  return (
    <div>
        <productsContext.Provider value={{products, category, setCategory }}>
        {children}
        </productsContext.Provider>
    </div>
  )
}

export default Productsprovider