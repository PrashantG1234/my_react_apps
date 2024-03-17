import { useState } from "react";

export default function MyButton() {
  const [msg, setMsg] = useState("Click me");
  function handleClick() {
    let today = new Date();
    setMsg(today.toLocaleString());
  }
  return (
    <div>
      <button onClick={handleClick}>{msg}</button>
    </div>
  );
}
