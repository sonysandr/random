import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext.js";


const Groceries = lazy(()=> import("./components/Groceries"))

const AppLayout = () => {

  const [userName,setUserName] = useState();
  
  // authentication
  useEffect(()=>{
    // make an api call and send username and password
    // dummy data below
    const data = {
      name : "King",
     
    };
    setUserName(data.name)
  },[]);


  return (
    <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
    <div className="app">
      {/* Header */}
      <Header />
      <Outlet/>
    </div>
    </UserContext.Provider> 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/groceries",
        element: <Suspense fallback = {<h1>Loading..</h1>} > 
        <Groceries/>
        </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        // dynamic path using colon and giving it a resId  ( :resId  is dynamic ) 
        path:"/restaurants/:resId",
        element: <RestroMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
