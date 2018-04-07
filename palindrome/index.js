// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// For loop and comparing every single character from front and back
/* function palindrome(str) {
  let isPalindrome = true
  let inputLength = str.length
  let halfStringLength = Math.floor(inputLength / 2)
  for (let frontToBackIndex = 0, backToFrontIndex = str.length - 1; frontToBackIndex < halfStringLength; frontToBackIndex++ , backToFrontIndex--) {
    if (str[frontToBackIndex] !== str[backToFrontIndex]) {
      isPalindrome = false
      break;
    }
  }
  return isPalindrome
} */


// String reversal using reduce and comparison
/* function palindrome(str) {
  let reversedString = str.split('').reduce((rev, char) => char + rev, '')
  return str === reversedString
} */


// String reversal using Array.reverse() and comparison
function palindrome(str) {
  let reversedString = str.split('').reverse().join('')
  return str === reversedString
}

module.exports = palindrome;
