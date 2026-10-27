import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

function Header() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // update with global state management
    const users = JSON.parse(localStorage.getItem("user"));
    const loggedInUserEmail = localStorage.getItem("loggedInUser");
    setCurrentUser(users.find((el) => el.email === loggedInUserEmail));
  }, []);

  return (
    <div>
      <Link to="/">home</Link> <Link to="/about">about</Link>{" "}
      <Link to="/products">product</Link> <Link to="/cart">cart</Link>{" "}
      <Link to="/contact">contact</Link> <Link to="/blogs">blogs</Link>{" "}
      <span>
        {currentUser.firstName || ""} {currentUser.lastName || ""}
      </span>
    </div>
  );
}

export default Header;
