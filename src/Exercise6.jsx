import React from "react";
import { useState, useEffect } from "react";

function Exercise6() {
  const [name, setName] = useState([]);
  const [greating, setGreating] = useState("Welcome");

  useEffect(() => {
    if (name !== "") {
      document.title = `${greating} ${name}`;
    }else {
      // setGreating("welcome");
    }
  }, [name]);
  return (
    <div>
      <h1>Changing the title of the document</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={greating}
        placeholder="Hi"
        onChange={(e) => setGreating(e.target.value)}
      />
    </div>
  );
}

export default Exercise6;
