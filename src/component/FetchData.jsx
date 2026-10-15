import React, { useEffect, useState } from "react";
import "./stylef.css"

//assign - fetch api data on component with ui design

export function FetchData(){
    // useEffect(()=> {
    //     fetch("https://dummyjson.com/products")
    //     .then(res => res.json())
    //     .then(data=> console.log(data))
    // }, [])


// --------------destroy error -----------------//

//     useEffect must not return anything besides a function, which is used for clean-up.

// It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

// useEffect(() => {
//   async function fetchData() {
//     // You can await here
//     const response = await MyAPI.getData(someId);
//     // ...
//   }
//   fetchData();
// }, [someId]); // Or [] if effect doesn't need props or state

//-----------------------------------------------------


    const [productsData, setProductsData] = useState({products:[]})

    useEffect(()=>{
        async function fetchdata() {
            try{
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            console.log(data)
            setProductsData(data)    
        }
        catch(err){
            console.log(err.message)
        }     
        }
        fetchdata()
    },[])


    return(
                    <>
                  <main>
                    <div class="product-grid">

    {/* implicit return */}

            { productsData.products.map((product)=>(
                 
                    <div key={product.id} class="product-container">
                    <div class="product-image-box">
                    <img src={product.thumbnail} class="product-image" height="300" width="300"/> 
                    </div>
                    <div>
                    <h3 class="product-id">Id: {product.id}</h3>
                    <h1 class="product-title">Title: {product.title}</h1>
                    <h3 class="product-price">Price: {product.price}</h3>
                    <h3 class="product-category">Category: {product.category}</h3>
                    {/* <p>Description: ${product.description}</p> */}
                    <br />
                    </div>

                    <div class="buttons">
                        <button class="btn-cart">Add to Cart</button>
                        <button class="btn-buy">Buy Now</button>

                    </div>

                    
                    </div>
                    
            ))}
            </div>
          </main>
              </> 
        )

}




// In JavaScript arrow functions, using () instead of {} determines whether the function uses an implicit return or an explicit return.

// Here is the breakdown of why this happens and how it applies to your React code.

// 1. Parentheses () mean Implicit Return

// When you use parentheses, JavaScript assumes you want to immediately evaluate the expression inside and return it, without needing to type the word return.
// javascript
// // Automatically returns the JSX element
// const printMessage = () => (
//   <div>Hello World</div>
// );


// 2. Curly Braces {} mean Explicit Return

// When you use curly braces, you are opening a traditional code block. JavaScript will execute the code inside line-by-line, but it will not return anything unless you explicitly type the return keyword.
// javascript
// // You must explicitly type "return" here
// const printMessage = () => {
//   return <div>Hello World</div>;
// };


// If you forget the word return inside curly braces, the function returns undefined, and nothing will render on your screen.