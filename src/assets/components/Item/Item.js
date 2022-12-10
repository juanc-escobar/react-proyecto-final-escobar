import { Link } from 'react-router-dom'
import "../Item/Item.css"

const Item = ({product}) => {
  return (
    <div>
        <Link to={`/item/${product.id}`}> 
            <div className='card'>
                <img className='card__img' alt={product.title} src={product.image} />
                <h2 className='card__title'>{product.title}</h2>
                <h3 className='card__content'>Price: ${product.price}</h3>
                <h3 className='card__content'>Product stock: {product.stock}</h3>
            </div>
        </Link>
    </div>
  )
}

export default Item