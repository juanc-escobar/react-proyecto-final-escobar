// importacion de archivos
import NavBar from './assets/components/NavBar/NavBar.js'
import ItemsList from './assets/components/ItemsList/ItemsList.js';
import './App.css';

// Se crea la funcion app que muestra despliega nuestra aplicacion.  
function App() {
  return (
    <>
    <NavBar/>
    <ItemsList name = 'Welcome to Platzza Store'/>
    </>
  );
}

export default App;
