import { useState } from "react";
export default function Counter() {
    //destructing-->individual vaeriables
  const [count, incrementCount] = useState(0);
  const handleCount = () => {
    incrementCount(count+1);
  };
  return (
    <div>
      Count is: {count} <br />
      <button onClick={handleCount}>Increment Counter</button>
    </div>
  );
}
