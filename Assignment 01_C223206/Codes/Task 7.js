function titleCase(str) {
  const words = str.split(" ");
  const result = [];

  for (let word of words) {
    const first = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();
    result.push(first + rest);
  }

  return result.join(" ");
}

console.log(titleCase("i love coding"));
console.log(titleCase("PRACTICE TIME"));