import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CreateCartData";
import "./style.css"
import "./stylef.css"

export function Fetchdata1(){
    //  or useState ({products:[]})   ---provide array: [....]
    const [productsData, setProductData] = useState({products:[]}) 
    const navigate = useNavigate()

    const {cartItems = [], addToCart} = useCart()

    useEffect(()=> {
        const productInfo = async ()=> {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            console.log(data)  
            setProductData(data)
        }
        productInfo();
    },[])

    // return (
    //     <>
    //     <div class="m-35 grid grid-cols-4 gap-3">
    //        { productsData.map((productItem)=> (
    //             <div key={productItem.id} class="border-2 p-10 w-500 h-500 border-black-300">
    //             <img src={productItem.image} height="200" width="200" /><br /><br />
    //             <h1>Id:{productItem.id}</h1>
    //             <h1>Title:{productItem.title}</h1>                
    //             <p class="text-nowrap">Description:{productItem.description}</p>                
    //             <h1>Price:{productItem.price}</h1>
    //             </div>
    //         ))
    //         }
    //     </div>
    //     </>
    // )

    function handleBuyNow(product){
        navigate('/buy', 
            {
                state: {
                products: [product],
                type: "single"
        }
    })

    }

    const handleAddtoCart = (product)=>{

        addToCart(product);
        navigate('/cart');
    };


      return (
        <>
         <div className="min-h-screen bg-gray-100 px-4 py-10">

            {/* Heading */}
            <div className="mx-auto mb-10 max-w-7xl text-center">

                {/* mt - margin top */}
                <h1 className="text-3xl font-bold text-gray-800 md:text-4xl mt-10 ">     
                    Our Products
                </h1>

                <p className="mt-2 text-gray-500">
                    Explore our latest collection
                </p>
            </div>

            {/* Products Grid -----responsive using sm-small, md-medium,  lg-large*/}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {productsData.products.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                        {/* Image */}
                        <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5">

                            {/* Category */}
                            <p className="mb-2 text-sm font-medium capitalize text-blue-600">
                                {product.category}
                            </p>

                            {/* Title */}
                            <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-800">
                                {product.title}
                            </h2>

                            {/* Rating */}
                            <div className="mb-4 flex items-center gap-2">
                                <span className="rounded bg-yellow-100 px-2 py-1 text-sm font-semibold text-yellow-700">
                                    {/* ⭐ {product.rating.rate} */}
                                    ⭐ {product.rating}
                                </span>

                                {/* <span className="text-sm text-gray-500">
                                    ({product.rating.count} reviews)
                                </span> */}
                            </div>

                            {/* Price + Button */}
                            <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-gray-900">
                                    ₹{product.price}
                                </span>

                                <button
                                    className="rounded-lg bg-blue-600 px-4 py-2 font-small text-white transition hover:bg-blue-700"
                                    onClick={() => {handleAddtoCart(product)} }
                                >
                                    Add to Cart
                                </button>

                                    

                            </div>

                            <div className="flex items-center justify-between">
                            

                                <button
                                    className="rounded-lg bg-red-600 w-100 px-4 py-2 font-medium text-white mt-4 transition hover:bg-blue-700"
                                    onClick={()=>handleBuyNow(product)}
                                >
                                    Buy Now
                                </button>

                                    

                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </div>

        </>
    )
}