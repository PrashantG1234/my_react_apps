/* functional component

   export default function App() {
     return <h1>Hey There!!</h1>;
 }
*/

// class component
import React, { Component } from "react";
// import Hello from "./Hello.js";
// import Sca1 from "./Sca1.js";
// import Sca2 from "./Sca2.js";
import Sca3 from "./Sca3.js";
export default class App extends Component {
  render() {
    return (
      <>
        {/* <Hello /> */}
        {/* <Sca1 /> */}
        {/* <Sca2 /> */}
        <Sca3 />
      </>
    );
  }
}
