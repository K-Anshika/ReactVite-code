// import React from 'react';
// import {QRCodeCanvas} from "qrcode.react";
// import { useNavigate, useLocation } from 'react-router-dom';


// export function BuyNow(){
//     const location = useLocation()
//     const navigate = useNavigate()
//     // ? for query parameter  --- exact query that comes when click on particular product buynow
//     const product = location.state?.product

//     // console.log(location)
//     // console.log(navigate)
//     console.log(product)
//     const price = product.price
//     console.log(price)

//     if(!product){
//         return(
//             <div>
//                 <h2>Invalid Purchase</h2>
//                 <p>No products selected for purchase</p>
//             </div>
//         )
//     }
    
//     const upiID = "8787085752@ybl";
//     const upiAmount = product.price;
//     const upiPayeeName = 'Kumari Anshika';
//     // pa = payment authority, pn = payeename, am= amount, cu= currency
//     const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(upiPayeeName)}&am=${upiAmount}&cu=INR`

//     const handlePayment = () => {
//         alert(`✅ Payment of ₹${product.price} for "${product.title}" successful via UPI!`)

//          navigate('/home1'); // Redirect to homepage or orders page after "payment"

//     }


//     return(
//         <>
        
// <div className="min-h-screen bg-gray-100 px-4 py-8">
//     <div className="mx-auto max-w-2xl">
        
//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-gray-800">
//             🔐 Secure UPI Payment
//         </h2>

//         {/* Payment Card */}
//         <div className="mt-8 max-w-md rounded-lg border border-gray-300 bg-gray-100 p-6 shadow-sm">
            
//             {/* Product Name */}
//             <h3 className="text-xl font-semibold text-gray-800">
//                 {product.title}
//             </h3>

//             {/* Price */}
//             <p className="mt-3 text-lg text-gray-700">
//                 <strong>Price:</strong>{" "}
//                 <span className="font-semibold text-green-600">
//                     ₹{product.price}
//                 </span>
//             </p>

//             {/* QR Code */}
//             <div className="my-6 flex flex-col items-center">
//                 <div className="rounded-lg bg-white p-4 shadow">
//                     <QRCodeCanvas
//                         value={upiURL}
//                         size={200}
//                     />
//                 </div>

//                 <p className="mt-3 text-sm text-gray-600">
//                     📷 Scan this QR with your UPI app
//                 </p>
//             </div>

//             {/* Payment Button */}
//             <button
//                 onClick={handlePayment}
//                 className="mt-4 w-full rounded-lg bg-green-500 px-5 py-3 font-semibold text-white transition duration-200 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
//             >
//                 Pay with UPI
//             </button>
//         </div>
//     </div>
// </div>

//         </>
//     )

// }






import React, { useMemo } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate, useLocation } from "react-router-dom";

export function BuyNow() {

    const location = useLocation();
    const navigate = useNavigate();

    // --------------------------------------------------
    // Get products and purchase type from Cart.jsx
    // --------------------------------------------------

    const {
        products = [],
        type = "single"
    } = location.state || {};


    // --------------------------------------------------
    // Check if products exist
    // --------------------------------------------------

    if (!products || products.length === 0) {

        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

                <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md w-full">

                    <div className="text-5xl mb-4">
                        🛒
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">
                        Invalid Purchase
                    </h2>

                    <p className="text-gray-500 mt-2">
                        No products selected for purchase.
                    </p>

                    <button
                        onClick={() => navigate("/")}
                        className="
                            mt-6
                            bg-blue-600
                            hover:bg-blue-700
                            text-white
                            px-6
                            py-3
                            rounded-lg
                            font-semibold
                            transition
                        "
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

    const totalItems = useMemo(() => {

        return products.reduce(
            (total, item) =>
                total + Number(item.quantity || 1),
            0
        );

    }, [products]);


    // --------------------------------------------------
    // Total Price  ----doubt here --- x (wrong)- works when click on proceed to checkout


    // • What it does: It multiplies each item's price by its quantity and adds them all together.
    // • When it runs: It recalculates only when products changes.

    // --------------------------------------------------

    const totalPrice = useMemo(() => {

        return products.reduce(
            (total, item) =>
                total +
                Number(item.price || 0) *
                Number(item.quantity || 1),
            0
        );

    }, [products]);


    // --------------------------------------------------
    // UPI Details
    // --------------------------------------------------

    const upiID = "8787085752@ybl";

    const upiPayeeName = "Kumari Anshika";


    // --------------------------------------------------
    // UPI Payment URL
    // --------------------------------------------------

    const upiURL =
        `upi://pay?pa=${encodeURIComponent(upiID)}` +
        `&pn=${encodeURIComponent(upiPayeeName)}` +
        `&am=${totalPrice.toFixed(2)}` +                      // toFixed - to fixed values after decimal like .2f --- 2.50 Rs
        `&cu=INR`;


    // --------------------------------------------------
    // Payment
    // --------------------------------------------------

    const handlePayment = () => {

        alert(
            `✅ Payment of ₹${totalPrice.toFixed(2)} successful via UPI!`
        );

        // After payment
        navigate("/");
    };


    // --------------------------------------------------
    // JSX
    // --------------------------------------------------

    return (

        <div className="min-h-screen bg-gray-100 px-4 py-8">

            <div className="mx-auto max-w-4xl">

                {/* =========================================
                    Heading
                ========================================= */}

                <div className="mb-8">

                    <h2 className="text-3xl font-bold text-gray-800">
                        🔐 Secure UPI Payment
                    </h2>

                    <p className="mt-2 text-gray-500">

                        {type === "single"
                            ? "Complete your purchase"
                            : "Complete your cart checkout"
                        }

                    </p>

                </div>


                {/* =========================================
                    Main Grid
                ========================================= */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


                    {/* =====================================
                        Products
                    ===================================== */}

                    <div className="lg:col-span-2 space-y-4">

                        {products.map((item) => {

                            const quantity =
                                Number(item.quantity || 1);

                            const productTotal =
                                Number(item.price || 0) *
                                quantity;

                            return (

                                <div
                                    key={item.id}
                                    className="
                                        bg-white
                                        rounded-xl
                                        border
                                        border-gray-200
                                        p-5
                                        shadow-sm
                                    "
                                >

                                    <div className="flex flex-col sm:flex-row gap-4">

                                        {/* Product Image */}

                                        <div className="
                                            w-full
                                            sm:w-28
                                            h-28
                                            bg-gray-100
                                            rounded-lg
                                            flex
                                            items-center
                                            justify-center
                                            overflow-hidden
                                            shrink-0
                                        ">

                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="
                                                    w-full
                                                    h-full
                                                    object-contain
                                                "
                                            />

                                        </div>


                                        {/* Product Information */}

                                        <div className="flex-1">

                                            <div className="
                                                flex
                                                flex-col
                                                sm:flex-row
                                                sm:justify-between
                                                gap-3
                                            ">

                                                <div>

                                                    <h3 className="
                                                        text-lg
                                                        font-bold
                                                        text-gray-800
                                                    ">
                                                        {item.title}
                                                    </h3>

                                                    <p className="
                                                        text-sm
                                                        text-gray-500
                                                        mt-1
                                                    ">
                                                        Product ID: {item.id}
                                                    </p>

                                                </div>


                                                <div className="
                                                    text-left
                                                    sm:text-right
                                                ">

                                                    <p className="
                                                        text-xl
                                                        font-bold
                                                        text-green-600
                                                    ">
                                                        ₹{productTotal.toFixed(2)}
                                                    </p>

                                                    <p className="
                                                        text-sm
                                                        text-gray-500
                                                    ">
                                                        ₹{Number(item.price).toFixed(2)}
                                                        {" × "}
                                                        {quantity}
                                                    </p>

                                                </div>

                                            </div>


                                            {/* Quantity */}

                                            <div className="
                                                mt-4
                                                text-sm
                                                text-gray-600
                                            ">

                                                Quantity:

                                                <span className="
                                                    ml-2
                                                    font-bold
                                                    text-gray-800
                                                ">
                                                    {quantity}
                                                </span>

                                            </div>


                                            {/* Shipping */}

                                            {item.shippingInformation && (

                                                <p className="
                                                    mt-3
                                                    text-sm
                                                    text-gray-500
                                                ">
                                                    🚚 {item.shippingInformation}
                                                </p>

                                            )}

                                            {/* Return Policy */}

                                            {item.returnPolicy && (

                                                <p className="
                                                    mt-1
                                                    text-sm
                                                    text-gray-500
                                                ">
                                                    ↩️ {item.returnPolicy}
                                                </p>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>


                    {/* =====================================
                        Payment Card
                    ===================================== */}

                    <div className="lg:col-span-1">

                        <div className="
                            bg-white
                            rounded-xl
                            border
                            border-gray-300
                            p-6
                            shadow-sm
                            sticky
                            top-6
                        ">

                            {/* Payment Heading */}

                            <h3 className="
                                text-xl
                                font-semibold
                                text-gray-800
                            ">
                                Payment Summary
                            </h3>


                            {/* Order Type */}

                            <div className="
                                mt-5
                                flex
                                justify-between
                                text-gray-600
                            ">

                                <span>
                                    Order Type
                                </span>

                                <span className="
                                    font-semibold
                                    text-gray-800
                                ">
                                    {type === "single"
                                        ? "Buy Now"
                                        : "Cart"
                                    }
                                </span>

                            </div>


                            {/* Items */}

                            <div className="
                                mt-3
                                flex
                                justify-between
                                text-gray-600
                            ">

                                <span>
                                    Items
                                </span>

                                <span>
                                    {totalItems}
                                </span>

                            </div>


                            {/* Total */}

                            <div className="
                                mt-5
                                border-t
                                border-gray-200
                                pt-5
                            ">

                                <div className="
                                    flex
                                    justify-between
                                    items-center
                                ">

                                    <span className="
                                        text-lg
                                        font-bold
                                        text-gray-800
                                    ">
                                        Total
                                    </span>

                                    <span className="
                                        text-2xl
                                        font-bold
                                        text-green-600
                                    ">
                                        ₹{totalPrice.toFixed(2)}
                                    </span>

                                </div>

                            </div>


                            {/* =================================
                                QR Code
                            ================================= */}

                            <div className="
                                my-6
                                flex
                                flex-col
                                items-center
                            ">

                                <div className="
                                    rounded-lg
                                    bg-white
                                    p-4
                                    shadow
                                    border
                                    border-gray-200
                                ">

                                    <QRCodeCanvas
                                        value={upiURL}
                                        size={200}
                                    />

                                </div>


                                <p className="
                                    mt-3
                                    text-sm
                                    text-gray-600
                                    text-center
                                ">
                                    📷 Scan this QR with your UPI app
                                </p>

                            </div>


                            {/* =================================
                                Payment Button
                            ================================= */}

                            <button
                                onClick={handlePayment}
                                className="
                                    mt-2
                                    w-full
                                    rounded-lg
                                    bg-green-500
                                    px-5
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    duration-200
                                    hover:bg-green-600
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-green-400
                                    focus:ring-offset-2
                                "
                            >
                                💳 Pay ₹{totalPrice.toFixed(2)} with UPI
                            </button>


                            {/* Security */}

                            <p className="
                                mt-4
                                text-center
                                text-xs
                                text-gray-500
                            ">
                                🔒 Secure UPI Payment
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}