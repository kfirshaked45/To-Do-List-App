import React, { useEffect, useState } from "react";

function Finished() {
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/get/checked")
      .then((response) => response.json())
      .then((data) => {
        setChecked(data);
      });
  }, [checked]);
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
      {checked.map((item) => {
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

export default Finished;
