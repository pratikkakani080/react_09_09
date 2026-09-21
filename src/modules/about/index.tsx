import React from "react";
import Button from "../../components/button";
import { NavLink } from "react-router";

function About() {
  const data = 'data from about'
  const handleSubmit = () => {
    console.log("form submitted");
  };
  return (
    <div>
      <NavLink to={`/contact?data1=${data}&data2=${'data pro'}&data3=${'data pro max'}`} >to contact</NavLink>
      <label htmlFor="fName">First name:</label>
      <input
        type="text"
        name="fName"
        id="fName"
        onChange={(event) => {
          console.log(event.target.value);
        }}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleSubmit()
            }
        }}
      />
      <label htmlFor="lName">Last name:</label>
      <input
        type="text"
        name="lName"
        id="lName"
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <Button onButtonClick={handleSubmit} />
    </div>
  );
}

export default About;
