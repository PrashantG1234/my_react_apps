import React, { useReducer } from "react";
function increment(state, action) {
  if (action === "increment") {
    return state + 1;
  }
  if (action === "decrement") {
    return state - 1;
  }
  if (action === "reset") {
    return 0;
  }
}

export default function Counter1() {
  const [state, dispatch] = useReducer(increment, 0);
  function handleClick(e) {
    dispatch(e.target.value);
  }
  return (
    <div>
      Count is:{state} <br />
      <button value="increment" onClick={handleClick}>
        Increment
      </button>
      <button value="reset" onClick={handleClick}>
        Reset
      </button>
      <button value="decrement" onClick={handleClick}>
        Decrement
      </button>
    </div>
  );
}
