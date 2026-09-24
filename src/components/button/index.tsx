import React from "react";

function Button(props) {
  const { bgColor, buttonName, onButtonClick } = props;
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
