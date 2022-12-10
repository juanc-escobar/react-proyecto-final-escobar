
import "../ItemCount/ItemCount.css"

const ItemCount = ({setCount}) => {
  
  return (
    <div>
      <i class="fa-solid fa-plus fa-2x plus" onClick={() => setCount((currentValue) => currentValue + 1)}></i>
      <i class="fa-solid fa-minus fa-2x minus" onClick={() => setCount((currentValue) => {
        if (currentValue > 1) {
          return currentValue - 1
        } else {
          return currentValue
        }})
      }></i>
    </div>
  )
}

export default ItemCount