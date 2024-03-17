import React, { useState } from "react";
import Child1 from "./Child1";
export let empContext = React.createContext();
export default function Parent1() {
  const [emp, setEmp] = useState({ id: 101, name: "Amit", sal: 40000 });
  return (
    <div>
      <h2>This is Parent Component</h2>
      <hr />
      <empContext.Provider value={{data:emp,setData:setEmp}}>
        <Child1 />
      </empContext.Provider>
    </div>
  );
}
