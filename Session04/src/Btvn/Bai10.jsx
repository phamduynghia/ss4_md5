import React, { useState } from "react";

export default function Bai10() {
  const hobies = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];
  const [listCheck, setListCheck] = useState([]);

  const handleCheck = (value) => {
    if (listCheck.includes(value)) {
      const newList = listCheck.filter((hobie) => hobie !== value);
      setListCheck(newList);
    } else {
      const newList = [...listCheck, value];
      setListCheck(newList);
    }
  };
  return (
    <div>
      <h1>Đây là bài tập số 10</h1>
      <h3>Sở thích : {JSON.stringify(listCheck)} </h3>
      {hobies.map((hobie, index) => (
        <div key={index} style={{ display: "flex" }}>
          <input
            type="checkbox"
            checked={listCheck.includes(hobie) == true ? true : false}
            onChange={() => handleCheck(hobie)}
          />
          <h3>{hobie}</h3>
        </div>
      ))}
    </div>
  );
}
