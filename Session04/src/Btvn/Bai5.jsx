import React, { useState } from "react";

export default function Bai5() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((pre) => pre + 1);
  };
  return (
    <div>
      <h1>Bài tập 5</h1>
      <h3>Bạn đã click {count} lần </h3>
      <button onClick={handleClick}>Increment</button>
      <br />
      <hr />
    </div>
  );
}
