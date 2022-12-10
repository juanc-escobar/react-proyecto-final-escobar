import ItemDetail from "../ItemDetail/ItemDetail"
import { Form, useParams } from "react-router-dom"
import {data} from "../../data/data"
import { useEffect, useState } from "react"
import {doc, getDoc, fireStore, getFirestore} from "firebase/firestore"

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState()
    const {id} = useParams();

    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, "items", id);
        getDoc(query).then((response) => {
            setProductSelected({id: response.id, ...response.data()})
        }).catch((error) => {console.log (error)})
    }

    useEffect(() => {
        getProduct()
    },[id])

  return (
    <div>
        {productSelected && 
        <ItemDetail  productSelected = {productSelected} />
        }
    </div>
  )
}

export default ItemDetailContainer