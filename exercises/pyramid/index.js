// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     for(let row = 0; row < n; row++){
//         let level = '';
//         let idx = n + (n-1)
//         for(let column = 0; column < idx ; column){
//             if(n=1){
//                 level += '#'
//             } else {
//                 if(Math.floor(idx/2) === n -1)
//             }
//         }
//     }
// }

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let level = "";
//     let totalColumns = 2 * n - 1;
//     for (let column = 0; column < totalColumns; column++) {
//       if (column >= n - row - 1 && column <= n + row - 1) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

// function pyramid(n) {
//   for (let row = 0; row < n; row++) {
//     let midPoint = Math.floor((n * 2 - 1) / 2);
//     let level = "";
//     for (let column = 0; column < n * 2 - 1; column++) {
//       if (column >= midPoint - row && column <= midPoint + row) {
//         level += "#";
//       } else {
//         level += " ";
//       }
//     }
//     console.log(level);
//   }
// }

function pyramid(n, row = 0, level = "") {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  const midPoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, level + add);
}
module.exports = pyramid;
