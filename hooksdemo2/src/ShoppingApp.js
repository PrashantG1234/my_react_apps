import React, { useEffect, useState } from "react";

export default function ShoppingApp() {
  const [itemObj, setItem] = useState({ item: "", price: 0 });
  const [itemList, setItemList] = useState([]);
  useEffect(() => {
    let totalPrice = 0;
    let count = 0;
    for (let item of itemList) {
      totalPrice += Number(item.price);
    }
    let tags = document.getElementsByTagName("strong");
    tags[1].innerHTML = totalPrice;
    tags[0].innerHTML = itemList.length;
    return function cleanup() {
      console.log("count is", count++);
    };
  }, [itemList]);
  return (
    <div>
      <h1>Shopping App</h1>
      Type item name: <br />
      <input
        type="text"
        value={itemObj.item}
        onChange={(e) => {
          setItem({ ...itemObj, item: e.target.value });
        }}
      />{" "}
      <br />
      Type item price: <br />
      <input
        type="text"
        value={itemObj.price}
        onChange={(e) => {
          setItem({ ...itemObj, price: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          setItemList([...itemList, itemObj]);

          setItem({ item: "", price: 0 });
        }}
      >
        Add item
      </button>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemList.map((itemObject, index) => (
            <tr key={index}>
              <td>{itemObject.item}</td>
              <td>{itemObject.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      Total Item: <strong>0 </strong>
      Cart Total:<strong>0 </strong>
    </div>
  );
}
