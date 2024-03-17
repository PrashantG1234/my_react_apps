import React, { useContext } from "react";
import SubChild1 from "./SubChild1";
import { empContext } from "./Parent1";
export default function Child1() {
  let empObj = useContext(empContext);
  return (
    <div>
      <h2>This is Child Component</h2>
      <p>Emp id:{empObj.data.id}</p>
      <p>Emp Name:{empObj.data.name}</p>
      <p>Emp Sal:{empObj.data.sal}</p>
      <hr />
      <SubChild1 />
    </div>
  );
}
