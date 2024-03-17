import { useState } from "react";

export default function Greetings2() {
  const [fullName, setFullName] = useState({ fname: "", lname: "" });
  function handleFname(e) {
    setFullName({ ...fullName, fname: e.target.value });
  }
  function handleLname(e) {
    setFullName({ ...fullName, lname: e.target.value });
  }
  return (
    <div>
      FirstName: <input type="text" onChange={handleFname} />
      <br />
      LastName: <input type="text" onChange={handleLname} /> <br />
      <br />
      {(fullName.fname.length > 0 || fullName.lname.length > 0) && (
        <span>
          Hello {fullName.fname} {fullName.lname}
        </span>
      )}
    </div>
  );
}
