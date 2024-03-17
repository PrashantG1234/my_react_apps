import React from "react";
import { empContext } from "./Parent1";

export default function SubChild1() {
  let emp = React.useContext(empContext);
  function handleIncrement() {
    let newsal = emp.data.sal * 0.1 + emp.data.sal;
    emp.setData({ ...emp.data, sal: newsal });
  }
  return (
    <div>
      <h2>This is Sub Child Component</h2>
      <hr />
      <p>Emp id:{emp.data.id}</p>
      <p>Emp Name:{emp.data.name}</p>
      <p>Emp Sal:{emp.data.sal}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
