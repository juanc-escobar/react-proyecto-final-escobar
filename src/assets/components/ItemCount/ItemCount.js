
import "../ItemCount/ItemCount.css"

const ItemCount = ({setCount}) => {
  
  return (
    <div>
      <button onClick={() => setCount((currentValue) => currentValue + 1)}>Add</button>
      <button onClick={() => setCount((currentValue) => {
        if (currentValue > 0) {
          return currentValue - 1
        } else {
          return currentValue
        }})
      }>Remove</button>
    </div>
  )
}

export default ItemCount