// importacion de archivos
import React from 'react'
import { useEffect, useState } from 'react'
import {data} from "../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


// se crea ItemListContainer que muestra un mensaje de bienvenida. 
const ItemsListContainer = (props) => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams ();
  console.log (categoryName)

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(()=>{
      if (categoryName) {
        const filteredData = data.filter((product)=> {
          return product.category.name === categoryName
        })
        resolve(filteredData)
      } else {
        resolve(data)
      }
    }, 1000)
  })

  useEffect (()=> {
    getProducts.then(res => setProductList(res)).catch(error => console.log (error))
    
    setTimeout(()=> {
      console.log(productList)
    },2000) 
    
  },[categoryName])

    return (
    <div className='containter'>
      <h2 className='msn'>{props.name}</h2>
      <ItemList productList= {productList}/>
    </div>
  ) 
}
export default ItemsListContainer