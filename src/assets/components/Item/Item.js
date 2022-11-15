import { Link } from 'react-router-dom'
import "../Item/Item.css"

const Item = ({product}) => {
  return (
    <div>
        <Link to={`/item/${product.id}`}> 
            <div className='card'>
                <img className='card__img' alt={product.title} src={product.images[0]} />
                <h2>{product.title}</h2>
                <h3>Price: ${product.price}</h3>
                <h3>Product id: {product.id}</h3>
            </div>
        </Link>
    </div>
  )
}

export default Item