// import React from "react";

// import { useCart } from "./CreateCartData";

// export function Cart(){
//     const {cartItems = [],removefromCart} = useCart()

//     if(cartItems.length === 0){
//           return <h2>🛒 Your cart is empty.</h2>
//     }


//     // const productsum = 0;
//     // const count = 0;

//     // function handleBuyNow(productsum){
//     //     navigate('/buy', 
//     //         {state: {productsum}})

//     // }
//     return(
//         <>
//         <div>
//             <h2 className="text-3xl m-4">🛒 Your Cart</h2>
//             { 
//             cartItems.map((item, index) => (
//                 //  productsum = productsum + item.price, count= count + 1,
//                 <div key={index} className="flex" style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     borderBottom: '1px solid #ddd',
//                     padding: '10px 0'
//                 }}>

//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img
//                     src={item.thumbnail}
//                     alt={item.title}
//                     style={{ width: '80px', marginRight: '1rem' }} />

//                  <div>
//                     <h4>{item.title}</h4>
//                     <p>${item.price}</p>
                    
//                 </div>
//                 </div>
            
//             <div className="absolute right-4">
//                    <span className="bg-black-500 mr-2">❌</span><button className="bg-red-600 text-white p-2 rounded "
//                     onClick={()=> removefromCart(item)}>Remove</button>
//                    </div>

//             </div>
            
               
//             ))}


//             <button
//                                     className="rounded-lg bg-yellow-600 m-4 w-100 px-4 py-2 font-medium text-white mt-4 transition hover:bg-blue-700"
//                                     onClick={()=>handleBuyNow(productsum)}
//                                 >
//                                     Buy Now - Items
//                                 </button>
//         </div>
        
//         </>
//     )

// }



import React from "react";
import { useCart } from "./CreateCartData";

export function DummyCart() {
    const { cartItems = [], removefromCart } = useCart();

    // Empty cart
    if (cartItems.length === 0) {
        return (
            <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
                    <div className="text-6xl mb-5">🛒</div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Your cart is empty
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <button
                        className="bg-blue-600 hover:bg-blue-700 text-white
                        px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    // Calculate total
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

            {/* Main Container */}
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        🛒 Your Cart
                    </h1>

                    <p className="text-gray-500 mt-2">
                        {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-5">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-sm
                                border border-gray-200 p-5
                                hover:shadow-md transition"
                            >

                                <div className="flex flex-col sm:flex-row gap-5">

                                    {/* Product Image */}
                                    <div className="w-full sm:w-32 h-32
                                        bg-gray-100 rounded-xl
                                        flex items-center justify-center
                                        overflow-hidden shrink-0"
                                    >
                                        <img
                                            src={item.thumbnail}
                                            alt={item.title}
                                            className="w-full h-full object-contain
                                            hover:scale-105 transition duration-300"
                                        />
                                    </div>


                                    {/* Product Details */}
                                    <div className="flex-1">

                                        <div className="flex justify-between gap-4">

                                            <div>
                                                <h2 className="text-lg font-bold text-gray-900">
                                                    {item.title}
                                                </h2>

                                                <p className="text-sm text-gray-500 mt-1">
                                                    Product ID: {item.id}
                                                </p>
                                            </div>

                                            {/* Price */}
                                            <div className="text-right">
                                                <p className="text-xl font-bold text-blue-600">
                                                    ${(item.price * item.quantity).toFixed(2)}
                                                </p>

                                                {item.quantity > 1 && (
                                                    <p className="text-xs text-gray-400">
                                                        ${item.price} × {item.quantity}
                                                    </p>
                                                )}
                                            </div>

                                        </div>


                                        {/* Quantity */}
                                        <div className="flex items-center mt-4">

                                            <span className="text-sm font-medium text-gray-600 mr-3">
                                                Quantity:
                                            </span>

                                            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                                                <button
                                                    className="px-3 py-1.5 bg-gray-100
                                                    hover:bg-gray-200 text-gray-700"
                                                >
                                                    −
                                                </button>

                                                <span className="px-4 py-1.5 font-semibold">
                                                    {item.quantity}
                                                </span>

                                                <button
                                                    className="px-3 py-1.5 bg-gray-100
                                                    hover:bg-gray-200 text-gray-700"
                                                >
                                                    +
                                                </button>

                                            </div>

                                        </div>


                                        {/* Product Information */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">

                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>🚚</span>
                                                <span>
                                                    {item.shippingInformation}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span>↩️</span>
                                                <span>
                                                    {item.returnPolicy}
                                                </span>
                                            </div>

                                        </div>


                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-3 mt-5">

                                            <button
                                                className="bg-blue-600 hover:bg-blue-700
                                                text-white px-5 py-2.5 rounded-lg
                                                font-semibold text-sm transition
                                                shadow-sm"
                                            >
                                                Buy Now
                                            </button>

                                            <button onClick={()=>removefromCart(item)}
                                                className="border border-red-300
                                                text-red-600 hover:bg-red-50
                                                px-5 py-2.5 rounded-lg
                                                font-semibold text-sm transition"
                                            >
                                                🗑 Remove Item
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* Order Summary */}
                    <div className="lg:col-span-1">

                        <div className="bg-white rounded-2xl shadow-sm
                            border border-gray-200 p-6
                            sticky top-6"
                        >

                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Order Summary
                            </h2>


                            {/* Items */}
                            <div className="flex justify-between text-gray-600 mb-4">
                                <span>Items ({totalItems})</span>

                                <span>
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>


                            {/* Shipping */}
                            <div className="flex justify-between text-gray-600 mb-4">
                                <span>Shipping</span>

                                <span className="text-green-600 font-medium">
                                    FREE
                                </span>
                            </div>


                            {/* Divider */}
                            <div className="border-t border-gray-200 my-5"></div>


                            {/* Total */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-lg font-bold text-gray-900">
                                    Total
                                </span>

                                <span className="text-2xl font-bold text-blue-600">
                                    ${totalPrice.toFixed(2)}
                                </span>
                            </div>


                            {/* Checkout */}
                            <button
                                className="w-full bg-blue-600
                                hover:bg-blue-700 text-white
                                py-3.5 rounded-xl font-bold
                                transition shadow-md hover:shadow-lg"
                            >
                                Proceed to Checkout →
                            </button>


                            {/* Security */}
                            <div className="mt-5 text-center">
                                <p className="text-xs text-gray-500">
                                    🔒 Secure & encrypted checkout
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}























