// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//     let char = n.toString();
//     let reversed = char.split("").reverse().join("");
//     //   console.log(reversed);
//     let answer = parseInt(reversed);
//     //   console.log(answer);
//     if (n > 0) {
//       return answer;
//     } else if (n === 0) {
//       return 0;
//     } else {
//       return -answer;
//     }
//   }
