// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* function vowels(str) {
  let checker = ['a', 'e', 'i', 'o', 'u']
  let counter = 0
  for (let letter of str.toLowerCase()) {
    if (checker.includes(letter)) {
      counter += 1;
    }
  }
  return counter
} */

function vowels(str) {
  let matches = str.match(new RegExp('[aeiou]', 'gi'))
  return matches ? matches.length : 0
}

console.log(vowels('Hi There!'))
console.log(vowels('Why do you ask?'))
console.log(vowels('Why?'))
module.exports = vowels;
