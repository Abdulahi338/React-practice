import React from "react";
import { useState, useEffect } from "react";

function Exercise6() {
  const [name, setName] = useState([]);
  const [greating, setGreating] = useState("");
  useEffect(() => {
    document.title = `${greating} ${name}`;
  }, [greating , name]);
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
        onChange={(e) => setGreating(e.target.value)}
      />
    </div>
  );
}

export default Exercise6;
