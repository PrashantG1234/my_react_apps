function choice(foodItems) {
  let randomIndex = Math.floor(foodItems.length * Math.random());
  return foodItems[randomIndex];
}
function remove(foodItems, foodName) {
  let foodIndex = foodItems.indexOf(foodName);
  let newArr = [
    ...foodItems.slice(0, foodIndex),
    ...foodItems.slice(foodIndex + 1),
  ];
  return newArr;
}
export { choice, remove };
