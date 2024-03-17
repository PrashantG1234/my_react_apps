import { useState } from "react";

export default function Greetings() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  function handleFname(e) {
    setFname(e.target.value);
  }
  function handleLname(e) {
    setLname(e.target.value);
  }
  return (
    <div>
      FirstName: <input type="text" value={fname} onChange={handleFname} />
      <br />
      LastName: <input type="text" value={lname} onChange={handleLname} />{" "}
      <br />
      <br />
      {(fname.length > 0 || lname.length > 0) && (
        <span>
          Hello {fname} {lname}
        </span>
      )}
    </div>
  );
}
