//Built-in Function Version:
function findMax(arr) {
  return Math.max(...arr);
}

console.log("Built-in Function Version:");
console.log(findMax([1, 5, 8, 3]));
console.log(findMax([36,92,10,43]));

//Manual Version:
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log("Manual Version:");
console.log(findMax([1, 5, 8, 3]));
console.log(findMax([36,92,10,43]));
