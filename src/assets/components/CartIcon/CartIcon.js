// importacion de archivos
import React from 'react'
import {Link } from 'react-router-dom'
import { useContext } from 'react'
import { cartContext } from '../../context/CartProvider'
import './CartIcon.css'


// se crea el componente CartIcon que muestra el icono del carrito. 
const CartIcon = () => {
  const {cart} = useContext(cartContext)
  const totalProducts = () => {
    return cart.reduce((acc, product) => acc + product.quantity, 0)
  }
  return (
    <Link to ="/cart"> 
      <div className='cart__icon'>
          <i className="fa-solid fa-cart-shopping fa-2x"><span className='cart-number'>{totalProducts()}</span></i>
      </div>
    </Link>
  )
}

export default CartIcon
