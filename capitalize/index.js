// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let strArr = str.split('')
  strArr[0] = strArr[0].toUpperCase()
  for (let i = 0; i < strArr.length - 1; i++) {
    let currentChar = strArr[i]
    if (currentChar == ' ') {
      strArr[i + 1] = strArr[i + 1].toUpperCase()
    }
  }
  return strArr.join('')
}

/* function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
} */

console.log(capitalize('look, it is working!      a'));

module.exports = capitalize;
