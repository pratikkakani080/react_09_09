import React from "react";

function Button(props) {
  const { bgColor, buttonName, onButtonClick } = props;
  console.log("🚀 ~ Button ~ props:", props);
  return (
    <button
      style={{
        backgroundColor: bgColor || "red",
        border: "1px solid white",
      }}
      onClick={onButtonClick}
    >
      {buttonName || "Click me"}
    </button>
  );
}

export default Button;
