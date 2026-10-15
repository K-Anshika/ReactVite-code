import React from "react"; 
        // importing React library from package/module
import "./style.css"
// static asset import or (macro preprocessor directives in C lang.)
import myImage from './images.jpg';


// props destructuring -- {email,city}
export function Home({email,city}){        
     const name = "Developer"
    return(
        <>       
         <section>
            <br />
            {/* boxHome is className */}
  <div className="boxHome animate-spin border-5 border-bottom  border-dotted border-amber-300 w-10 h-10 rounded-full text-green-500 text-3xl-center"></div>
        <div>
        <h1 className="text-8xl">I am component from Home</h1><br /><br /> 
        <h2>Home.jsx file is displayed</h2>
        <h1>Hello {name}</h1>
        {/* <h1>Email: {props.email}</h1>
        <h1>City: {props.city}</h1> */}
        <h1>Email: {email}</h1>
        <h1>City: {city}</h1>
        </div>

        <div>
            <h2>box2</h2>
        </div><br /><br />
         <img src= {myImage} alt="parade"  height="200" width="200" />

<div>

{/* • <dl>: The container element that wraps the entire list.
• <dt>: The description term (the name or phrase being defined).
• <dd>: The description definition (the explanation, value, or details for the term). 

dl type : None (indented text block)
*/}



<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language: The standard language for creating web pages.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets: A language used to style and layout web pages.</dd>
</dl>


</div>
<br /><br />

<div>


{/* Type	
Tailwind Class	Output Example
Decimal	list-decimal	1, 2, 3...
Upper Roman	list-[upper-roman]	I, II, III...
Lower Roman	list-[lower-roman]	i, ii, iii...
Upper Alpha	list-[upper-alpha]	A, B, C...
Lower Alpha	list-[lower-alpha]	a, b, c...  */}

<ol className="list-decimal m-5">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
</div>


<h1>
<i className="fa-brands fa-github hover:cursor-pointer"></i></h1>

<i className="fa-brands fa-square-instagram hover:text-green-400 hover:scale-125 transition duration-300 cursor-pointer"></i>

        </section> 

        </>

    );
}
























