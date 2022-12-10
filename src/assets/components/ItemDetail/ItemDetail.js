import {useState, useContext} from "react"
import ItemCount  from "../ItemCount/ItemCount"
//import {Link } from 'react-router-dom'
import { cartContext } from "../../context/CartProvider"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({productSelected}) => {
  const [count,setCount] = useState(1)
  const {cart, addToCart}  = useContext(cartContext)
  return (
    <div className='product'>
        <img className='product__img' alt={productSelected.title} src={productSelected.image} />
        <div className='product__body'>
            <h2 className='product__body__title'>{productSelected.title}</h2>
            <h3 className='product__body__description'>Description: {productSelected.description}</h3>
            <h3 className='product__body__price'>Price: ${productSelected.price}</h3>
            <h3 className='product__body__count'>Quantity: {count}</h3>
            <ItemCount setCount = {setCount}/>
            <button className='btn-add' onClick={() => {addToCart(productSelected, count)}}>Add to Cart</button>
        </div>
    </div>
  )
}

export default ItemDetail