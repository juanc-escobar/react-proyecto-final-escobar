// importacion de archivos
import {BrowserRouter, Route, Routes} from  "react-router-dom"
import NavBar from './assets/components/NavBar/NavBar.js'
import CartIcon from "./assets/components/CartIcon/CartIcon.js";
import ItemsListContainer from './assets/components/ItemsListContainer/ItemsListContainer.js';
import ItemDetailContainer from "./assets/components/ItemDetailContainer/ItemDetailContainer.js";
import './App.css';

// Se crea la funcion app que muestra despliega nuestra aplicacion.  
function App() {
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element = {<ItemsListContainer/>} /> 
      <Route path="/category/:categoryName" element = {<ItemsListContainer/>}>
        <Route path="item/:id" element = {<ItemDetailContainer />} />
      </Route>
      <Route path="/item/:id" element = {<ItemDetailContainer />} />
      <Route path="cart" element = {<CartIcon/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
