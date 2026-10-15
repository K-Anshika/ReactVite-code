import React,{useContext, createContext, useState} from "react";

const CartData = createContext()

export function CreateCartData({children}){
    const [cartItems, setCartItems] = useState(()=>{
        const savedCart = localStorage.getItem("cartItems"); 
        return savedCart ? JSON.parse(savedCart) : [];
    })

    const addToCart = (product) =>{
        const existingItem = cartItems.find(item => item.id === product.id)

        let updatedCart;


        if (existingItem) { updatedCart = cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item ); }

        else { updatedCart = [ ...cartItems, { ...product, quantity: 1 } ]; }

        // Update React state 
        setCartItems(updatedCart); 
        // Save updated cart to localStorage 
        localStorage.setItem( "cartItems", JSON.stringify(updatedCart) );
        
    }

    // const removefromCart = (product) => {
    //     // setCartItems(prevItem => prevItem.filter(item => item.id !== product.id));
    //     const updatedCart = cartItems.filter(item => item.id !== product.id);
    //     setCartItems(updatedCart);
    //     // 3. Update localStorage with the key "cartItems" matching your state initialization
    //     localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    // }


    return (
        <>
        {/* <CartData.Provider value={{cartItems,  addToCart, removefromCart}}> */}
        <CartData.Provider value={{cartItems,  addToCart}}>
            {children}
        </CartData.Provider>
        </>
    )
}

export const useCart = () => {
    const context = useContext(CartData)

    if(!context) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}