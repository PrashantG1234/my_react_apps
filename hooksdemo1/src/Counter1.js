import { useState } from "react";

export default function Counter1() {
  const [count, incrementCount] = useState(0);
  const handleCount = () => {
    incrementCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      Count is: {count} <br />
      <button onClick={handleCount}>Increment Counter</button>
    </div>
  );
}
