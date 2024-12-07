import React, { useState } from "react";
export default function Bai9() {
  const genders = [
    { id: 1, gender: "male" },
    { id: 2, gender: "female" },
    { id: 3, gender: "other" },
  ];
  const [checked, setchecked] = useState(1);

  const handleRadio = (id) => {
    setchecked(id);
  };
  return (
    <div>
      <h1>Đây là bài tập 9</h1>
      {genders.map((gender) => (
        <div key={gender.id} style={{ display: "flex" }}>
          <input
            onChange={() => handleRadio(gender.id)}
            type="radio"
            checked={gender.id === checked ? true : ""}
          />
          <h3>{gender.gender}</h3>
        </div>
      ))}
      <br />
      <hr />
    </div>
  );
}
