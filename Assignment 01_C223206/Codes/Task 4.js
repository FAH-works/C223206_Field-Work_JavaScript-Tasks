function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript"));
console.log(countVowels("Trying out my own example"));