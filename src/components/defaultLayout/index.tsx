import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
