import React from "react";
import { empContext } from "./Parent";
export default function SubChild() {
  return (
    <div>
      <h2>This is Sub Child Component</h2>
      <hr />
      <empContext.Consumer>
        {(emp) => {
          return (
            <>
              <p>Emp id:{emp.id}</p>
              <p>Emp Name:{emp.name}</p>
              <p>Emp Sal:{emp.sal}</p>
            </>
          );
        }}
      </empContext.Consumer>
    </div>
  );
}
