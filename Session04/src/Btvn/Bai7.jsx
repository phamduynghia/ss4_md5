import React, { useState } from "react";

export default function Bai7() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Đây là bài tập 7</h1>
      <input
        onChange={(event) => setCount(event.target.value.length)}
        type="text"
      />
      <h3>Số ký tự : {count}</h3>
      <br />
      <hr />
    </div>
  );
}
