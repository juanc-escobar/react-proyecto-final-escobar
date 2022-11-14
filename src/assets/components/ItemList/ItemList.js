import Item from "../Item/Item"
import "../ItemList/ItemList.css"

const ItemList = ({productList}) => {
    console.log(productList)
    return ( 
    <div className="card__container">
        {productList.map((product)=>(
            <Item key={product.id} product={product} />
        ))}
    </div>
    )
}

export default ItemList