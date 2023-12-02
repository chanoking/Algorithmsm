// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const newStringA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   const newStringB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   let arrA = {};
//   let arrB = {};
//   for (let i = 0; i < newStringA.length; i++) {
//     if (!arrA[newStringA[i]]) {
//       arrA[newStringA[i]] = 1;
//     } else {
//       arrA[newStringA[i]]++;
//     }
//   }
//   for (let j = 0; j < newStringB.length; j++) {
//     if (!arrB[newStringB[j]]) {
//       arrB[newStringB[j]] = 1;
//     } else {
//       arrB[newStringB[j]]++;
//     }
//   }

//   let isAnagram = true;

//   for (let char in arrA) {
//     if (arrA[char] !== arrB[char]) {
//       isAnagram = false;
//       break;
//     }
//   }
//   console.log(isAnagram);
// }

// function anagrams(stringA, stringB) {
//   const newStringA = stringA.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   const newStringB = stringB.replace(/[^a-zA-Z]/g, "").toLowerCase();
//   let arrA = {};
//   let arrB = {};

//   for (let i = 0; i < newStringA.length; i++) {
//     if (!arrA[newStringA[i]]) {
//       arrA[newStringA[i]] = 1;
//     } else {
//       arrA[newStringA[i]]++;
//     }
//   }

//   for (let j = 0; j < newStringB.length; j++) {
//     if (!arrB[newStringB[j]]) {
//       arrB[newStringB[j]] = 1;
//     } else {
//       arrB[newStringB[j]]++;
//     }
//   }

//   let isAnagram = true;

//   for (let char in arrB) {
//     if (arrA[char] !== arrB[char]) {
//       isAnagram = false;
//       break;
//     }
//   }
//   return isAnagram;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
