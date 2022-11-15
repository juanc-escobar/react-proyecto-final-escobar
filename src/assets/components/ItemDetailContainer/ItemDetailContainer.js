import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import {data} from "../data/data"
import { useEffect, useState } from "react"

const ItemDetailContainer = () => {
    const [productSelected, setProductSelected] = useState()
    const {id} = useParams();
    const getProduct = () => {
        const productFiltered = data.filter((product) => {
            return product.id == id
        })
        setProductSelected(...productFiltered);
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