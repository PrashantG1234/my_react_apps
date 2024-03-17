import { useState } from "react";

export default function MyButton2() {
  const [msg, setMsg] = useState("Click me");
  return (
    <div>
      <button
        onClick={() => {
          let today = new Date();
          setMsg(today.toLocaleString());
        }}
      >
        {msg}
      </button>
    </div>
  );
}
