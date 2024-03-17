import { useState } from "react";

export default function ShoppingApp() {
  const [itemName, setItem] = useState("");
  const [itemList, addItems] = useState([]);
  function handleChange(e) {
    setItem(e.target.value);
  }
  function addItem() {
    addItems([...itemList, itemName]);
    setItem("");
  }
  return (
    <div>
      <h1>Shopping App</h1>
      Type Item Name: <br />
      <input type="text" onChange={handleChange} value={itemName} /> <br />
      <button onClick={addItem}>Add Item</button> <br />
      Your Shopping Cart:{" "}
      {itemList.length === 0 ? (
        <strong>Empty</strong>
      ) : (
        <ul>
          {itemList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
