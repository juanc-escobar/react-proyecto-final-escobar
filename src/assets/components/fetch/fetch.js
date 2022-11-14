import { useState } from "react"


const fetch = () => {
    const [pokemonList, setPokemnonList] = useState([]);
    const getPokemos = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        .then()
    }
  return (
    <div>fetch</div>
  )
}

export default fetch