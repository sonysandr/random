import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestroMenu from "./components/RestroMenu";


const Groceries = lazy(()=> import("./components/Groceries"))

const AppLayout = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />
      <Outlet/>
    </div>
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
        path:"/restaurants/:resId",
        element: <RestroMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
