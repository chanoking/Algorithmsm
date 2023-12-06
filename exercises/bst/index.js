// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    if (data < this.data) {
      // Insert data to the left subtree
      if (!this.left) {
        this.left = new Node(data);
      } else {
        this.left.insert(data);
      }
    } else if (data > this.data) {
      // Insert data to the right subtree
      if (!this.right) {
        this.right = new Node(data);
      } else {
        this.right.insert(data);
      }
    }
    // Ignore if data is equal to this.data (no duplicates in this example)
  }

  contains(data) {
    if (data === this.data) {
      return this; // Return the node itself
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null; // Return null if the vlaue is not found
  }
}

module.exports = Node;
