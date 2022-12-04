import {useState, useContext} from "react"
import ItemCount  from "../ItemCount/ItemCount"
//import {Link } from 'react-router-dom'
import { cartContext } from "../../context/CartProvider"
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({productSelected}) => {
  const [count,setCount] = useState(0)
  const {cart, addToCart}  = useContext(cartContext)
  console.log(cart)
  return (
    <div className='product'>
        <img className='product__img' alt={productSelected.title} src={productSelected.images[0]} />
        <div className='product__body'>
            <h2>cantidad en el carro {cart.length}</h2>
            <h2 className='product__body__title'>{productSelected.title}</h2>
            <h3 className='product__body__description'>Description: {productSelected.description}</h3>
            <h3 className='product__body__price'>Price: ${productSelected.price}</h3>
            <h3>{count}</h3>
            <ItemCount setCount = {setCount}/>
            <button onClick={() => {addToCart(productSelected, count)}}>Cart</button>
        </div>
    </div>
  )
}

export default ItemDetail