import { lazy, Suspense } from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./component/Home";
import { Welcome } from "./component/Welcome";
import { FetchData } from "./component/FetchData";
import {Header} from "./component/Header"
import { Footer} from "./component/Footer"
// import { Fetchdata1 } from "./component/Fetchdata1"; 
import { Header1 } from "./component/Header1";
import { Footer1 } from "./component/Footer1";

// import { Home1 } from "./component/Home1";
// import { Signup } from "./component/Signup";
// import { Login } from "./component/Login";
// import { BuyNow } from "./component/BuyNow";
// import { Cart } from "./component/Cart";
import { CreateCartData } from "./component/CreateCartData";

import { Counter } from "./component/Counter";
import { UseMemoConcept } from "./component/useMemoConcept";
import { PriceFilter } from "./component/PriceFilter";


// Lazy-loaded page components
const Home1 = lazy(() =>
  import("./component/Home1").then((module) => ({
    default: module.Home1,
  }))
);

const Fetchdata1 = lazy(()=> 
  import ("./component/Fetchdata1").then((module)=>({
    default: module.Fetchdata1,
}))
);

const Cart = lazy (()=>
  import("./component/Cart").then((module)=>({
    default: module.Cart,
  }))
);

const BuyNow = lazy(() =>
  import("./component/BuyNow").then((module) => ({
    default: module.BuyNow,
  }))
);
const Signup = lazy(() =>
  import("./component/Signup").then((module) => ({
    default: module.Signup,
  }))
);
const Login = lazy(() =>
  import("./component/Login").then((module) => ({
    default: module.Login,
  }))
);

// Tailwind CSS loading component
function Loader() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"
        role="status"
        aria-label="Loading"
      />

      <p className="text-sm font-medium text-gray-600">
        Loading page, please wait...
      </p>
    </div>
  );
}

// Reusable layout
function Layout({ children }) {
  return (
    <>
      <Header1 />

      <Suspense fallback={<Loader />}>
        {children}
      </Suspense>

      <Footer1 />
    </>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateCartData>
       <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<><Header/><Home email="xyz@gmail.com" city="Lucknow"/><Footer/></>}/>
      {/* <Route path="/fetchdata1" element={<><Header1/><Fetchdata1/><Footer1/></>}/> */}
      {/* <Route path="/home1" element={<><Header1/><Home1/><Footer1/></>}/> */}
      {/* <Route path="/buy" element={<><Header1/><BuyNow/><Footer1/></>}/> */}
      {/* <Route path="/cart" element={<><Header1/><Cart/><Footer1/></>}/> */}
      {/* <Route path="/signup" element={<><Header1/><Signup/><Footer1/></>}/> */}
      {/* <Route path="/login" element={<><Header1/><Login/><Footer1/></>}/> */}
      <Route path="/reduce" element={<><Header1/><Counter/><Footer1/></>}/>
      <Route path="/usememo" element={<UseMemoConcept/>}/>
      <Route path="/price" element={<PriceFilter/>}/>
      <Route path="/welcome" element={<><Header/><Welcome/><Footer/></>}/>   
      <Route path="/fetchdata" element={<><Header/><FetchData/><Footer/></>}/> 


      <Route
            path="/home1"
            element={
              <Layout>
                <Home1 />
              </Layout>
            }
          />

          <Route
            path="/fetchdata1"
            element={
              <Layout>
                <Fetchdata1 />
              </Layout>
            }
          />

          <Route
            path="/buy"
            element={
              <Layout>
                <BuyNow />
              </Layout>
            }
          />

          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />

          <Route
            path="/signup"
            element={
              <Layout>
                <Signup />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />

    </Routes>
    </BrowserRouter>
    </CreateCartData>
    </>
  )
}

export default App
