// importacion de archivos
import React from 'react'
import './CartIcon.css'

// se crea el componente CartIcon que muestra el icono del carrito. 
const CartIcon = () => {
  return (
    <div className='cart__icon'>
        <i className="fa-solid fa-cart-shopping fa-2x"></i>
    </div>
  )
}

export default CartIcon
