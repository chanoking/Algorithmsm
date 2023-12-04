// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fib(n - 1) + fib(n + 1);
//   }
// }

// function fib(n) {
//   let fibonacci = new Array(n + 1);
//   console.log(fibonacci);

//   fibonacci[0] = 0;
//   console.log(fibonacci);
//   fibonacci[1] = 1;
//   console.log(fibonacci);

//   for (let i = 2; i <= n; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//   }
//   return fibonacci[n];
// }

// function fib(n) {
//   const result = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     // result[i] = result[n-1] + result[n-2]
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }
//   return result[n];
// }
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    console.log(result);
    return result;
    
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
fib = memoize(fib);

module.exports = fib;
