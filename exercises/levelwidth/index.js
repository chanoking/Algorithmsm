// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// function levelWidth(root) {
//   const result = [];

//   // Ensure the root node exists
//   if (!root) {
//     return result;
//   }

//   // Use a queue to perform breadth-first traversal
//   const queue = [root];

//   while (queue.length > 0) {
//     // Record the number of nodes at the current level
//     const levelWidth = queue.length;
//     result.push(levelWidth);

//     // Process all nodes at the current level and enqueue their children
//     for (let i = 0; i < levelWidth; i++) {
//       const node = queue.shift();

//       // Enqueue children if they exist
//       if (node.children) {
//         queue.push(...node.children);
//       }
//     }
//   }

//   return result;
// }

function levelWidth(root) {
  const arr = [root, "s"];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}
module.exports = levelWidth;
