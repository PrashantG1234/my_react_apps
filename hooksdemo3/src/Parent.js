import React, { useState } from "react";
import Child from "./Child";
export let empContext = React.createContext();
export default function Parent() {
  const [emp, setEmp] = useState({ id: 101, name: "Amit", sal: 40000 });
  return (
    <div>
      <h2>This is Parent Component</h2>
      <hr />
      <empContext.Provider value={emp}>
        <Child />
      </empContext.Provider>
    </div>
  );
}
