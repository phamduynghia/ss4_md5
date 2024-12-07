import React from "react";

export default function Bai8() {
  const citis = ["Hà Nội", "Hà Nam", "Ninh Bình", "Thanh Hóa", "Nghệ An"];
  return (
    <div>
      <h1>Đây là bài tập 8</h1>
      <select>
        <option value="">Chọn thành phố</option>
        {citis.map((city, index) => (
          <option value="" key={index}>
            {city}
          </option>
        ))}
      </select>
      <br />
      <hr />
    </div>
  );
}
