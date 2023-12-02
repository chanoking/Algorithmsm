// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const rows = Math.ceil(array.length / size);
//   let twoDArray = [];
//   for (let i = 0; i < rows; i++) {
//     twoDArray[i] = [];
//     for (let j = 0; j < size; j++) {
//       const index = i * size + j;
//       if (array[index] !== undefined) {
//         twoDArray[i][j] = array[index];
//       }
//     }
//   }
//   return twoDArray;
// }

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// function chunk(array, size) {
//   let twoDArray = [];
//   for (let i = 0; i < array.length; i += size) {
//     let chunked = array.slice(i, i + size);
//     twoDArray.push(chunked);
//   }

//   return twoDArray;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
module.exports = chunk;
