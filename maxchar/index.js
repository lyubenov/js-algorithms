// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* function maxChar(str) {
  let map = new Map()
  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }
  let maxValue = 0
  let maxKey = ''
  map.forEach((v, k) => {
    if (maxValue < v) {
      maxValue = v
      maxKey = k
    }
  })
  return maxKey
} */

// Interesting solution by replacing characters
function maxChar(str) {
  let maxFrequentCharCount = 0
  let mostFrequentChar = ''
  for (let char of str) {
    let charCount = str.match(new RegExp(char, "g")).length
    if (charCount > maxFrequentCharCount) {
      mostFrequentChar = char
      maxFrequentCharCount = charCount
    }
  }
  return mostFrequentChar
}
maxChar("abcccccccd")
module.exports = maxChar;
