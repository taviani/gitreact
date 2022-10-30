import React, { useState, useEffect } from "react";

const MyFirstFunctionComponent = () => {
  let [name, setName] = useState("");

  useEffect(() => {
    if (name.length >= 3) {
      document.title = `${name} c'est TA page`;
    }
  });

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <br />
      <span> Salut {name}</span>
    </div>
  );
};

export default MyFirstFunctionComponent;
