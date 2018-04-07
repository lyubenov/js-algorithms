// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative
/* function fib(n) {
  let fibonacci = [0, 1]
  for (let i = 1; i <= n; i++) {
    fibonacci[i + 1] = fibonacci[i] + fibonacci[i - 1]
  }
  return fibonacci[n]
} */

// Recursive 1
/* function fib(n, fibArr = [0, 1]) {
  if (fibArr.length == n + 1) {
    return fibArr[fibArr.length - 1]
  }
  fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2])
  return fib(n, fibArr)
} */

// (slow) Recursive 2
/* function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
} */

// Recursive 3 (memoization)
function memoize(fn) {
  const cache = {}
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result;

    return result
  }
}

function fib(n) {
  if (n < 2) {
    return n
  }
  let result = fib(n - 1) + fib(n - 2)
  return result
}

fib = memoize(fib)

console.log(fib(10))

module.exports = fib;
