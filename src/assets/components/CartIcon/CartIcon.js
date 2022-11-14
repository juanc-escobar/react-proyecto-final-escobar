// importacion de archivos
import React from 'react'
import {Link } from 'react-router-dom'
import './CartIcon.css'

// se crea el componente CartIcon que muestra el icono del carrito. 
const CartIcon = () => {
  return (
    <Link to ="/cart"> 
      <div className='cart__icon'>
          <i className="fa-solid fa-cart-shopping fa-2x"></i>
      </div>
    </Link>
  )
}

export default CartIcon
