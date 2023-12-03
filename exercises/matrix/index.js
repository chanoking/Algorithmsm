// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrixA.
// --- Examples
//   matrixA(2)
//     [[1, 2],
//     [4, 3]]
//   matrixA(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrixA(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   let matrixA = Array.from({ length: n }, () =>
//     Array.from({ length: n }, () => 0)
//   );
//   console.log(matrixA);

//   let counter = 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   let startCol = 0;
//   let endCol = n - 1;

//   while (startRow <= endRow && startCol <= endCol) {
//     // Traverse right
//     for (let i = startCol; i <= endCol; i++) {
//       matrixA[startRow][i] = counter++;
//       console.log(matrixA);
//     }
//     startRow++;
//     console.log(startRow);

//     // Traverse down
//     for (let i = startRow; i <= endRow; i++) {
//       matrixA[i][endCol] = counter++;
//       console.log(matrixA);
//     }
//     endCol--;
//     console.log(endCol);

//     // Traverse left
//     for (let i = endCol; i >= startCol; i--) {
//       matrixA[endRow][i] = counter++;
//       console.log(matrixA);
//     }
//     endRow--;

//     // /Traverse up
//     for (let i = endRow; i >= startRow; i--) {
//       matrixA[i][startCol] = counter++;
//       console.log(matrixA);
//     }
//     startCol++;
//   }

//   return matrixA;
// }

function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startCol = 0;
  let endCol = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter++;
    }
    startRow++;
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter++;
    }
    endRow--;

    for (let i = endRow; i  >= startRow; i--) {
      results[i][startCol] = counter++;
    }
    startCol++;
  }
  return results;
}
module.exports = matrix;
