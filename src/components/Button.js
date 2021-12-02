import React, { useState } from "react";
import "./Button.css";

function Button() {
  const [list, setList] = useState("");

  const handleChange = (event) => {
    setList({ item: event.target.value });
  };
  const handleClick = () => {
    const data = {
      item: list.item,
      checked: false,
    };
    fetch("http://localhost:5000/api/posts", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="middle">
      <h3>Add Item</h3>
      <input type="text" name="text" id="item" onChange={handleChange} />
      <br />
      <input type="submit" value="Save" onClick={handleClick} />
    </div>
  );
}

export default Button;
