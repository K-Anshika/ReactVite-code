import React, {useContext, createContext, useState, useEffect} from "react";

const CartData = createContext()

export function CreateCartData1({children}){

    //replace useState([])  ----empty array because it initializing again and again
    const [cartItems, setCartItems] = useState(()=>{
        const getcartdata = localStorage.getItem("CartData");
        return getcartdata ? JSON.parse(getcartdata) : [];
        })
    
    // useEffect(
    //     ()=> localStorage.setItem('CartData',JSON.stringify(cartItems))
    // ,[cartItems])                    // whenever cartItems changes, it update local storage

    let updateCart;

    const addToCart = (product) =>{
        const existingItem = cartItems.find(item=> item.id === product.id)
        if(existingItem){
            // using callback function concept, destructure/ spread previtem
            
        //  setCartItems(prevItem => prevItem.map(item => item.id=== product.id ? {...item, quantity: item.quantity + 1} : item))
         updateCart = cartItems.map(item => item.id=== product.id ? {...item, quantity: item.quantity + 1} : item)
        }

        else{
            // setCartItems(prevItem => [...prevItem, {...product, quantity:1}])
          updateCart =   [...cartItems, {...product, quantity:1}]
            
        }

    setCartItems(updateCart)
    localStorage.setItem("CartData",JSON.stringify(cartItems))

    }
 
    // use in dummyCart.jsx file

    // const removefromCart = (product) => {
    //     setCartItems(prevItem => prevItem.filter(item => item.id !== product.id));
    // }
    

    return(
        // cartitems take data as obj
        // <CartData.Provider value = {{cartItems, addToCart, removefromCart}}>
        <CartData.Provider value = {{cartItems, addToCart, removefromCart}}>
                   {children}
        </CartData.Provider>
    )
}


// create custom hooks
export const useCart = () => {
    const context = useContext(CartData)

    if(!context){
        throw new Error('useCart must be used within a CartProvider')
    }

    return context;
}



