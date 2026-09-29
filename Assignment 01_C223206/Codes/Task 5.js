//Set Version:
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("Set Version:");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//filter+indexOf Version:
function removeDuplicates(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
console.log("filter+indexOf Version:");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));