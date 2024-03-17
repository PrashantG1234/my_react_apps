import { useState } from "react";

export default function Greetings1() {
  const [{ fname, lname }, setName] = useState({ fname: "", lname: "" });
  function handleFname(e) {
    setName({ fname: e.target.value, lname });
  }
  function handleLname(e) {
    setName({ fname, lname: e.target.value });
  }
  return (
    <div>
      FirstName: <input type="text" onChange={handleFname} />
      <br />
      LastName: <input type="text" onChange={handleLname} /> <br />
      <br />
      {(fname.length > 0 || lname.length > 0) && (
        <span>
          Hello {fname} {lname}
        </span>
      )}
    </div>
  );
}
