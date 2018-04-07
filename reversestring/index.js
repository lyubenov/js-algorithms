// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// Classic
/* function reverse(str) {
  let outputStr = ''
  for (let index = str.length-1; index >= 0; index--) {
    outputStr+= str[index]
  }
  return outputStr
} */

// Better Classic
/* function reverse(str) {
  let reversed = ''
  for (let letter of str) {
    reversed = letter + reversed
  }
  return reversed
} */

// One-liner
/* function reverse(str) {
  return str.split('').reverse().join('')
} */

// Reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
