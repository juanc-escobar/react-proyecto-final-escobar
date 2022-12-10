import { createContext, useState } from "react";


export const cartContext = createContext([])

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const isInCart = (id) => {
        return cart.some((product) => product.id === id)
    }

    const addToCart = (product, quantity) => {
        if (isInCart(product.id)) {
            alert("Product is Already in the Cart")
        } else {
            setCart([...cart, {...product, quantity}])
        }
    }
    
    const totalProducts = () => {
        return cart.reduce((acc, product) => acc + product.quantity, 0)
    }

    const clear = () => {
        setCart([]);
    }

    return (
        <cartContext.Provider value ={{cart, addToCart, clear, totalProducts}}>
            {children}
        </cartContext.Provider>
    )
}
export default CartProvider;