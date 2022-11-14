
const ItemDetail = ({productSelected}) => {
  return (
    <div>
        <h1>{productSelected.title}</h1>
        <h2>{productSelected.id}</h2>
    </div>
  )
}

export default ItemDetail