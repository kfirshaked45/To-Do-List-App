import React, { useEffect, useState } from "react";
import "./Data.css";

function Data() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/get")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [items]);
  const onChange = (updatedTodo) => {
    const data = {
      checked: !updatedTodo.checked,
    };

    fetch(`http://localhost:5000/api/put/${updatedTodo._id}`, {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
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
  const onClick = (todo) => {
    console.log(todo);
    fetch(`http://localhost:5000/api/delete/${todo._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((response) => console.log(response));
  };
  return (
    <div>
      {items.map((todo) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => onChange(todo)}
            />
            {todo.item} <button onClick={() => onClick(todo)}> Delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default Data;
