// importacion de archivos
import React, { Component, useContext } from 'react'
import { NavLink,Link } from 'react-router-dom'
import CartIcon from '../CartIcon/CartIcon'
import logo from '../../img/logo.png'
import './NavBar.css'
import CartProvider from '../../context/CartProvider'

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
             <Link to="/"><img src={logo} alt="logo" className='nav__logo' /></Link> 
          <ul id = 'navList' className={this.state.clicked ? '#navList active' : '#navList'}>
              <li><NavLink to = "/category/men's clothing" className={({isActive})=> { return isActive ? "nav__item_active" : "nav__item"}}>Men's clothing</NavLink> </li>
              <li><NavLink to = "/category/jewelery" className={({isActive})=> { return isActive ? "nav__item_active" : "nav__item"}}>Jewelery</NavLink></li>   
              <li><NavLink to = "/category/electronics" className={({isActive})=> { return isActive ? "nav__item_active" : "nav__item"}}>Electronics</NavLink></li>
              <li><NavLink to = "/category/women's clothing" className={({isActive})=> { return isActive ? "nav__item_active" : "nav__item"}}>Women's clothing</NavLink></li>     
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
