import { useState } from "react";

export default function Collection() {
  const [addNum, setAdder] = useState([]);
  function randomNum() {
    let random = Math.floor(Math.random() * 10 + 1);
    setAdder([...addNum, random]);
  }
  return (
    <div>
      <button onClick={randomNum}>Add a random number</button>
      <ul>
        {addNum.map((x, index) => (
          <li key={index}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
