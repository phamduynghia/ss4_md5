import React, { useReducer } from "react";
const initValue = 10;
const INCREMENT = "increment";
const DECREMENT = "decrement";
export default function DemoUseReducer() {
  const reducer = (state, action) => {
    switch (action) {
      case INCREMENT: {
        return state + 1;
      }
      case DECREMENT: {
        return state - 1;
      }
    }
  };

  const [state, dispath] = useReducer(reducer, initValue);

  const increment = () => {
    dispath(INCREMENT);
  };

  const decrement = () => {
    dispath(DECREMENT);
  };
  return (
    <div>
      <h3>{state}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
