// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   const str = "#";
//   const blank = " ";
//   for (let i = 1; i <= n; i++) {
//     for (let j = n - 1; j <= n; j--) {
//       if (j > 0) {
//         console.log(str.repeat(i) + blank.repeat(i));
//       }
//       break;
//     }
//   }
// }

// function steps(n) {
//   const str = "#";
//   const blank = " ";
//   for (let i = 1; i <= n; i++) {
//     let step = str.repeat(i) + blank.repeat(n - i);
//     console.log(step);
//   }
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }

function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
module.exports = steps;
