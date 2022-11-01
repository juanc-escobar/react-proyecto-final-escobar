// importacion de archivos
import React, { Component } from 'react'
import CartIcon from '../CartIcon/CartIcon'
import logo from '../../img/logo.png'
import './NavBar.css'

// Se crea el componente de clase navbar para manejar estados del despliegue de menu
class NavBar extends Component {
  state = {clicked: false}
  // Se crea la funcion handleClick para cambiar el estado de clickeado.
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    // Se crea el menu principal de la pagina con el comprobador de estado. 
    return (
      <div className='nav'>
          <a href="#"><img src={logo} alt="logo" className='nav__logo' /></a>
          <ul id = 'navList' className={this.state.clicked ? '#navList active' : '#navList'}>
              <li><a href='#' className='nav__item'>Clothes</a></li> 
              <li><a href='#' className='nav__item'>Electronics</a></li>  
              <li><a href='#' className='nav__item'>furniture</a></li>
              <li><a href='#' className='nav__item'>Shoes</a></li>   
              <li><a href='#' className='nav__item'>Others</a></li>      
          </ul>
          <CartIcon/>
          <div id='mobile' className='nav__btn' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times fa-2x' : 'fas fa-bars fa-2x'}></i>
          </div>
      </div>
      // Se crean los icones de meno para tamanos de dispositivos mobiles id = mobile. 
    )
  }
}

export default NavBar
