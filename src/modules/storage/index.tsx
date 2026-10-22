import React, { useState } from "react";

function Storage() {
  const [name, setName] = useState("");

  const handleStoreValue = () => {
    localStorage.setItem("name", name);
    sessionStorage.setItem("name", name);
  };

  const handleGetValue = () => {
    const value = localStorage.getItem("name");
    setName(value);
  };

  const handleClearStorage = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleStoreValue}>Save</button>
      <button onClick={handleGetValue}>Get value</button>
      <button onClick={handleClearStorage}>Clear</button>
    </div>
  );
}

export default Storage;
