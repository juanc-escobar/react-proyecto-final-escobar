import { useContext, useState, useEffect } from "react"
import { cartContext } from "../../context/CartProvider"
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore"
import moment from "moment/moment"
import "../Cart/Cart.css"

const Cart = () => {
  const {cart, clear} = useContext(cartContext)
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const getTotalPrice = () => {
    setTotal(cart.reduce((acc, product) => acc + (product.price * product.quantity) , 0).toFixed(2))
  }

  const showForm = () => {
    setShow(!show)
  }

  const createOrder = () => {
    const db = getFirestore();
    const query = collection(db, "orders" )
    const newOrder = {
      buyer: {
        name: formValues.name,
        phone: formValues.phone,
        email: formValues.email
      },
      date: moment().format("DD/MM/YYYY"),
      items: cart,
      total: total
    }
    if (formValues.name == "" || formValues.phone == "" || formValues.email == "") {
      alert("Fill all de requested data to fulfill the order")
    } else {
    addDoc(query, newOrder).then((response)=> {
      alert(`Order created with the id: ${response.id}`)
      return response
    }).then((res) => {
      cart.forEach((product) => {
        const query = doc(db, "items", product.id)
        updateDoc(query,{
          stock: product.stock - product.quantity,
        })
      })
      alert("Your order has been submited, thanks")
      clear();
      showForm();
    }).catch((error) => console.log(error))
    }
  }
  useEffect(() => {getTotalPrice()}, [cart])

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="container">
      {cart.map((product) => (
        <div className='cproduct' key={product.id}>
          <img className='product__img__cart' alt={product.title} src={product.image} />
          <div className='cproduct__body'>
            <h2 className='cproduct__body__title'>{product.title}</h2>
            <h3 className='cproduct__body__price'>Price: ${product.price}</h3>
            <h3 className='cproduct__body__count'>Product quantity: {product.quantity}</h3>
          </div>
        </div>
      ))}
      <div className="total">
        <h2 className="total__title">Total: {total}</h2>
        <div className="btn-layout">
        <button className="btn-add" onClick={()=> clear()}>Empty Cart</button>
        <button className="btn-add" onClick={showForm}>Create Order</button>
        </div>
        <div className={show ? "inputs-text" : "inputs-text hide" }>
          <input className="input-style" name="name" type="text" placeholder="Name" value={formValues.name} onChange={handleInputChange} />
          <input className="input-style"name="phone" type="text" placeholder="Phone" value={formValues.phone} onChange={handleInputChange} />
          <input className="input-style" name="email" type="text" placeholder="E-mail" value={formValues.email} onChange={handleInputChange} />
          <button className="btn-add" onClick={createOrder}>Buy</button>
        </div>
      </div>
    </div>
  )
}

export default Cart