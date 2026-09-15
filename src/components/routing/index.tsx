import React from "react";
import { Route, Routes } from "react-router";
import About from "../../modules/about";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<div>home</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<div>contact</div>} />
      <Route path="/products" element={<div>Product</div>} />
      <Route path="/cart" element={<div>cart</div>} />
    </Routes>
  );
}

export default Routing;
