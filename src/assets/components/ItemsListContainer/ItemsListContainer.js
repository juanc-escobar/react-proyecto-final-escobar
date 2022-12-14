// importacion de archivos
import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore"
import './ItemListContainer.css'


// se crea ItemListContainer que muestra un mensaje de bienvenida. 
const ItemsListContainer = () => {
  const [productList, setProductList] = useState([]);
  const {categoryName} = useParams ();

  const getProducts = () => {
    const db = getFirestore();
    const queryBase = collection(db, "items")
    const querySnapshot = categoryName

    ? query(queryBase, where("category","==",categoryName)) : queryBase 

    getDocs(querySnapshot).then((response) => {
      const data = response.docs.map((item) => {
        return {id: item.id, ...item.data()}
      })
      setProductList(data)
    }).catch((error) => {console.log (error)})

  }

  useEffect (()=> {
    getProducts()
  },[categoryName])

    return (
    <div className='containter'>
      <ItemList productList= {productList}/>
    </div>
  ) 
}

export default ItemsListContainer