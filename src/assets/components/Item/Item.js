import { Link } from 'react-router-dom'
import "../Item/Item.css"

const Item = ({product}) => {
  return (
    <div>
        <Link to={`item/${product.id}`}> 
            <div className='card'>
                <img className='card__img' alt={product.title} src={product.images[0]} />
                <h2>{product.title}</h2>
                <h2>Price: ${product.price}</h2>
                <h2>Product id: {product.id}</h2>
            </div>
        </Link>
    </div>
  )
}

export default Item