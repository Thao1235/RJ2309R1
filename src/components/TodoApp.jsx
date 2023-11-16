import React, { useState, useEffect } from "react";
import useFetchProduct from "../hooks/useFetchProduct";
import useFetch from "../hooks/useFetch";

function TodoApp(){
    // const [productList, setProductList] = useState([])
    // useEffect(() => {
    //     async function fetchData(){
    //         let productRes = await fetch('https://jsonserver-vercel-api.vercel.app/products')
    //         let data = await productRes.json()
    //         setProductList(data)
    //     }
    //     fetchData()
    // },[])
    // const productList = useFetchProduct()
    const productList = useFetch('https://jsonserver-vercel-api.vercel.app/products')
    const categoryList = useFetch('https://jsonserver-vercel-api.vercel.app/categories')
    return(
        <>
            <div>
                {categoryList.map(cat => (
                    <li>{cat.id}-{cat.name}</li>
                ))}
            </div>
            <div>
                {productList.map(product => (
                <p>{product.title}-{product.company}</p>
                ))}
            </div>
            
        </>  
    )
}

export default TodoApp;