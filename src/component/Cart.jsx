import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CreateCartData";


// --------------------------------------------------
// Reducer
// --------------------------------------------------

function cartReducer(state, action) {

    let nextState;

    switch (action.type) {

        // Increase quantity
        case "INCREASE":

            nextState = state.map((item) =>
                item.id === action.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item  
            );
            localStorage.setItem("cartItems", JSON.stringify(nextState)); // Save instantly
            return nextState;


        // Decrease quantity
        case "DECREASE":

            nextState = state.map((item) =>
                item.id === action.id
                    ? {
                        ...item,
                        quantity:
                            item.quantity > 1
                                ? item.quantity - 1
                                : 1
                    }
                    : item
            );
            localStorage.setItem("cartItems", JSON.stringify(nextState)); // Save instantly
            return nextState;


        // Remove product
        case "REMOVE":

            nextState = state.filter(
                (item) => item.id !== action.id
            );
            localStorage.setItem("cartItems", JSON.stringify(nextState)); // Save instantly
            return nextState;


        // Update cart from useCart
        case "SET_CART":

            return action.products;


        default:
            return state;
    }
}


// --------------------------------------------------
// Cart Component
// --------------------------------------------------

export function Cart() {

    const { cartItems = [] } = useCart();

    const navigate = useNavigate();


    // useReducer  ----  (function, initial state, localStorage (optional))
    const [products, dispatch] = useReducer(
        cartReducer,
        // cartItems
         [], // Default empty start
        () => {
            const s = localStorage.getItem("cartItems");
            return s ? JSON.parse(s) : cartItems;
        }
    );


    // --------------------------------------------------
    // Keep reducer state synchronized with useCart
    // --------------------------------------------------

    useEffect(() => {
        const s = localStorage.getItem("cartItems");
        if (!s || JSON.parse(s).length === 0) {
            dispatch({
                type: "SET_CART",
                products: cartItems
            });
        }
    }, [cartItems]
);

    // --------------------------------------------------
    // Empty Cart
    // --------------------------------------------------

    if (products.length === 0) {

        return (
            <div className="min-h-[70vh] bg-gray-50 flex items-center justify-center px-4">

                <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">

                    <div className="text-6xl mb-5">
                        🛒
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        Your cart is empty
                    </h2>

                    <p className="text-gray-500 mb-6">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>
        );
    }


    // --------------------------------------------------
    // Total Items
    // --------------------------------------------------

    const totalItems = products.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );


    // --------------------------------------------------
    // Grand Total
    // --------------------------------------------------

    const totalPrice = products.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    // --------------------------------------------------
    // Buy Individual Product
    // --------------------------------------------------

    const handleBuyNow = (item) => {

        navigate("/buy", {

            state: {

                // Only selected product
                products: [item],

                // Used to identify individual purchase
                type: "single"
            }

        });

    };


    // --------------------------------------------------
    // Proceed To Checkout - All Products
    // --------------------------------------------------

    const handleCheckout = () => {

        navigate("/buy", {

            state: {

                // Send all cart products
                products: products,

                // Used to identify cart checkout
                type: "cart"
            }

        });

    };


    // --------------------------------------------------
    // Remove Product
    // --------------------------------------------------

   
const handleRemove = (id) => {

    // Remove from reducer state
    dispatch({
        type: "REMOVE",
        id: id
    });

    // Get cart from localStorage
    const existingCart =
        JSON.parse(localStorage.getItem("cartItems")) || [];

    // Remove selected product
    const updatedCart = existingCart.filter(
        (item) => item.id !== id
    );

    // Save updated cart back to localStorage
    localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCart)
    );
};



    // --------------------------------------------------
    // JSX
    // --------------------------------------------------

    return (

        <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">


                {/* =========================================
                    Heading
                ========================================= */}

                <div className="mb-8">

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                        <div>

                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                🛒 Your Cart
                            </h1>

                            <p className="text-gray-500 mt-2">
                                {totalItems}{" "}
                                {totalItems === 1
                                    ? "item"
                                    : "items"}{" "}
                                in your cart
                            </p>

                        </div>


                        {/* Total badge */}

                        <div className="w-fit rounded-full bg-blue-100 px-5 py-2">

                            <span className="font-semibold text-blue-700">
                                {totalItems} Items
                            </span>

                        </div>

                    </div>

                </div>


                {/* =========================================
                    Main Grid
                ========================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                    {/* =====================================
                        Cart Items
                    ===================================== */}

                    <div className="lg:col-span-2 space-y-5">

                        {products.map((item) => {


                            // Product total
                            const productTotal =
                                item.price * item.quantity;


                            return (

                                <div
                                    key={item.id}
                                    className="
                                        bg-white
                                        rounded-2xl
                                        shadow-sm
                                        border
                                        border-gray-200
                                        p-5
                                        hover:shadow-md
                                        transition
                                    "
                                >

                                    <div className="flex flex-col sm:flex-row gap-5">


                                        {/* =================================
                                            Product Image
                                        ================================= */}

                                        <div
                                            className="
                                                w-full
                                                sm:w-32
                                                h-32
                                                bg-gray-100
                                                rounded-xl
                                                flex
                                                items-center
                                                justify-center
                                                overflow-hidden
                                                shrink-0
                                            "
                                        >

                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-contain
                                                    hover:scale-105
                                                    transition
                                                    duration-300
                                                "
                                            />

                                        </div>


                                        {/* =================================
                                            Product Details
                                        ================================= */}

                                        <div className="flex-1">


                                            {/* Product title + total */}

                                            <div className="flex justify-between gap-4">

                                                <div>

                                                    <h2 className="text-lg font-bold text-gray-900">

                                                        {item.title}

                                                    </h2>

                                                    <p className="text-sm text-gray-500 mt-1">

                                                        Product ID: {item.id}

                                                    </p>

                                                </div>


                                                {/* Product Total */}

                                                <div className="text-right">

                                                    <p className="text-xl font-bold text-blue-600">

                                                        ₹{productTotal.toFixed(2)}

                                                    </p>

                                                    {item.quantity > 1 && (

                                                        <p className="text-xs text-gray-400">

                                                            ₹
                                                            {item.price}
                                                            {" × "}
                                                            {item.quantity}

                                                        </p>

                                                    )}

                                                </div>

                                            </div>


                                            {/* =================================
                                                Quantity Controls
                                            ================================= */}

                                            <div className="flex items-center mt-5">

                                                <span className="text-sm font-medium text-gray-600 mr-3">

                                                    Quantity:

                                                </span>


                                                <div
                                                    className="
                                                        flex
                                                        items-center
                                                        border
                                                        border-gray-300
                                                        rounded-lg
                                                        overflow-hidden
                                                    "
                                                >

                                                    {/* Minus */}

                                                    <button
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "DECREASE",
                                                                id: item.id
                                                            })
                                                        }
                                                        className="
                                                            px-4
                                                            py-2
                                                            bg-gray-100
                                                            hover:bg-gray-200
                                                            text-gray-700
                                                            font-bold
                                                            text-lg
                                                            transition
                                                        "
                                                    >
                                                        −
                                                    </button>


                                                    {/* Quantity */}

                                                    <span
                                                        className="
                                                            px-5
                                                            py-2
                                                            font-semibold
                                                            text-gray-800
                                                            min-w-[55px]
                                                            text-center
                                                        "
                                                    >
                                                        {item.quantity}
                                                    </span>


                                                    {/* Plus */}

                                                    <button
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "INCREASE",
                                                                id: item.id
                                                            })
                                                        }
                                                        className="
                                                            px-4
                                                            py-2
                                                            bg-gray-100
                                                            hover:bg-gray-200
                                                            text-gray-700
                                                            font-bold
                                                            text-lg
                                                            transition
                                                        "
                                                    >
                                                        +
                                                    </button>

                                                </div>

                                            </div>


                                            {/* =================================
                                                Product Information
                                            ================================= */}

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">

                                                <div className="flex items-center gap-2 text-sm text-gray-600">

                                                    <span>
                                                        🚚
                                                    </span>

                                                    <span>
                                                        {item.shippingInformation}
                                                    </span>

                                                </div>


                                                <div className="flex items-center gap-2 text-sm text-gray-600">

                                                    <span>
                                                        ↩️
                                                    </span>

                                                    <span>
                                                        {item.returnPolicy}
                                                    </span>

                                                </div>

                                            </div>


                                            {/* =================================
                                                Buttons
                                            ================================= */}

                                            <div className="flex flex-wrap gap-3 mt-5">


                                                {/* Buy Now */}

                                                <button
                                                    onClick={() =>
                                                        handleBuyNow(item)
                                                    }
                                                    className="
                                                        bg-blue-600
                                                        hover:bg-blue-700
                                                        text-white
                                                        px-5
                                                        py-2.5
                                                        rounded-lg
                                                        font-semibold
                                                        text-sm
                                                        transition
                                                        shadow-sm
                                                        active:scale-95
                                                    "
                                                >
                                                    🛍️ Buy Now
                                                </button>


                                                {/* Remove */}

                                                <button
                                                    onClick={() =>
                                                        handleRemove(item.id)
                                                    }
                                                    className="
                                                        border
                                                        border-red-300
                                                        text-red-600
                                                        hover:bg-red-50
                                                        px-5
                                                        py-2.5
                                                        rounded-lg
                                                        font-semibold
                                                        text-sm
                                                        transition
                                                    "
                                                >
                                                    🗑 Remove Item
                                                </button>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>


                    {/* =====================================
                        Order Summary
                    ===================================== */}

                    <div className="lg:col-span-1">

                        <div
                            className="
                                bg-white
                                rounded-2xl
                                shadow-sm
                                border
                                border-gray-200
                                p-6
                                sticky
                                top-6
                            "
                        >


                            <h2 className="text-xl font-bold text-gray-900 mb-6">

                                Order Summary

                            </h2>


                            {/* Items */}

                            <div className="flex justify-between text-gray-600 mb-4">

                                <span>
                                    Items ({totalItems})
                                </span>

                                <span>
                                    ₹{totalPrice.toFixed(2)}
                                </span>

                            </div>


                            {/* Shipping */}

                            <div className="flex justify-between text-gray-600 mb-4">

                                <span>
                                    Shipping
                                </span>

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
                                    ₹{totalPrice.toFixed(2)}
                                </span>

                            </div>


                            {/* =================================
                                Proceed To Checkout
                            ================================= */}

                            <button
                                onClick={handleCheckout}
                                className="
                                    w-full
                                    bg-blue-600
                                    hover:bg-blue-700
                                    text-white
                                    py-3.5
                                    rounded-xl
                                    font-bold
                                    transition
                                    shadow-md
                                    hover:shadow-lg
                                    active:scale-[0.98]
                                "
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