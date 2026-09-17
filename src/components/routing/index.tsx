import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import About from "../../modules/about";
import Home from "../../modules/home";
import Contact from "../../modules/contact";
import Products from "../../modules/products";
import Cart from "../../modules/cart";
import DefaultLayout from "../defaultLayout";

function Routing() {
  let router = createBrowserRouter([
    {
      path: "/",
      Component: DefaultLayout,
      children: [
        { path: "/", Component: Home },
        { path: "/about", Component: About },
        { path: "/contact", Component: Contact },
        { path: "/products", Component: Products },
        { path: "/cart", Component: Cart },
      ],
    },
    { path: "/blog/blogdetails", Component: Cart },
  ]);

  return (
    // <Routes>
    //   <Route path="/" element={<DefaultLayout />}>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/cart" element={<Cart />} />
    //   </Route>
    // </Routes>
    <RouterProvider router={router} />
  );
}

export default Routing;
