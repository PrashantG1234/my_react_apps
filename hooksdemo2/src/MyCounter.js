import { useState, useEffect } from "react";

export default function MyCounter() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }
  useEffect(() => {
    document.title = count;
  });
  return (
    <div>
      Count is:{count} <br />
      <button onClick={handleCount}>Increment Counter</button>
    </div>
  );
}
