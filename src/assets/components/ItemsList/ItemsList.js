// importacion de archivos
import React from 'react'
import './ItemList.css'

// se crea ItemList que muestra un mensaje de bienvenida. 
const ItemsList = (props) => {
  return (
    <div className='containter'>
      <h2 className='msn'>{props.name}</h2>
    </div>
  )
}

export default ItemsList