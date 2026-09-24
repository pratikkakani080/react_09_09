import React, { useState } from "react";
import Button from "../../components/button";
import { NavLink } from "react-router";


function About() {
  const [fName, setFName] = useState("test");
  const [lName, setLName] = useState("user");
  const [userInfo, setUserInfo] = useState({ fName: '', lName: '' })
  const data = "data from about";

  console.log("init", userInfo);
  const handleSubmit = () => {
    console.log("form submitted", fName, lName);
  };

  return (
    <div>
      <NavLink
        to={`/contact?data1=${data}&data2=${"data pro"}&data3=${"data pro max"}`}
      >
        to contact
      </NavLink>
      <label htmlFor="fName">First name:</label>
      <input
        type="text"
        name="fName"
        id="fName"
        onChange={(event) => setUserInfo({ ...userInfo, fName: event.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <label htmlFor="lName">Last name:</label>
      <input
        type="text"
        name="lName"
        id="lName"
        onChange={(event) => setUserInfo({ ...userInfo, lName: event.target.value })}
      />
      <Button onButtonClick={handleSubmit} />
    </div>
  );
}

export default About;
