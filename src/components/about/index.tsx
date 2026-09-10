import React from "react";
import Button from "../button";

function About() {
  const handleSubmit = () => {
    console.log("form submitted");
  };
  return (
    <div>
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
