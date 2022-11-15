// importacion de archivos
import React from 'react'
import { useEffect, useState } from 'react'
import {data} from "../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


// se crea ItemListContainer que muestra un mensaje de bienvenida. 
const ItemsListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams ();

  const getProducts = new Promise ((resolve) => {
    setTimeout(()=>{
      if (categoryName) {
        const filteredData = data.filter((product)=> {
          return product.category.name === categoryName
        })
        resolve(filteredData)
      } else {
        resolve(data)
      }
    }, 700)
  })

  useEffect (()=> {
    getProducts.then(res => setProductList(res)).catch(error => console.log (error))
  },[categoryName])

    return (
    <div className='containter'>
      <ItemList productList= {productList}/>
    </div>
  ) 
}
export default ItemsListContainer