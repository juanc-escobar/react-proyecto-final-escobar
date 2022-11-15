import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({productSelected}) => {
  return (
    <div className='product'>
        <img className='product__img' alt={productSelected.title} src={productSelected.images[0]} />
        <div className='product__body'>
            <h2 className='product__body__title'>{productSelected.title}</h2>
            <h3 className='product__body__description'>Description: {productSelected.description}</h3>
            <h3 className='product__body__price'>Price: ${productSelected.price}</h3>
        </div>
    </div>
  )
}

export default ItemDetail