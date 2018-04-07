// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/* function reverseInt(n) {
  let reversedAbsNumberString = Math.abs(n).toString().split('').reverse().join('')
  if (n < 0) {
    reversedAbsNumberString = `-${reversedAbsNumberString}`
  }
  return Number(reversedAbsNumberString)
} */

// Absolute value to string then reversing the string, converting back to number and multiplying by 1 or -1 depending on the input number
function reverseInt(n) {
  let reversedAbsString = Math.abs(n).toString().split('').reverse().join('')
  return Number(reversedAbsString) * Math.sign(n)
}
console.log(reverseInt(500));
module.exports = reverseInt;
