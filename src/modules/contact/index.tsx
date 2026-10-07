import React, { useEffect, useState } from "react";
import { data, NavLink, useSearchParams } from "react-router";

function Contact() {
  const [searchParams] = useSearchParams();
  const data1 = searchParams.get("data1");
  const data2 = searchParams.get("data2");
  const data3 = searchParams.get("data3");
  const [state, setState] = useState(false);
  console.log("component mounting ==> outside use effect", state);

  useEffect(() => {
    console.log("component mounting ==> inside use effect", state);
    return () => {
      console.log("component unmounting ==> inside use effect", state);
    };
  }, [state]);
  // blank dep - only runs first time

  return (
    <div>
      Contact <br />
      {data1} <br />
      {data2} <br />
      {data3}
      <NavLink to={'/home'} >to home</NavLink>
      <button onClick={() => setState(!state)}>Click me</button>
    </div>
  );
}

export default Contact;
