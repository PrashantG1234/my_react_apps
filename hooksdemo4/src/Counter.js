import React, { useReducer } from "react";
function increment(state, action) {
  return state + action;
}

export default function Counter() {
  const [state, dispatch] = useReducer(increment, 0);
  function handleClick() {
    dispatch(1);
  }
  return (
    <div>
      Count is:{state} <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
