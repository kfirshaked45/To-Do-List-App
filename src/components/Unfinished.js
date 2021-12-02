import React, { useEffect, useState } from "react";

function Unfinished() {
  const [unchecked, setUnchecked] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/get/unchecked")
      .then((response) => response.json())
      .then((data) => {
        setUnchecked(data);
      });
    console.log(unchecked);
  }, [unchecked]);

  const onChange = (updatedCheck) => {
    const data = {
      checked: !updatedCheck.checked,
    };
    fetch(`http://localhost:5000/api/put/${updatedCheck._id}`, {
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

  return (
    <div>
      {unchecked.map((item) => {
        return (
          <div>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange(item)}
            />
            {item.item}
          </div>
        );
      })}
    </div>
  );
}

export default Unfinished;
