// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;
    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // removeLast() {
  //   let previous = this.head;
  //   let current = previous.next;
  //   while (current) {
  //     if (current) {
  //       current = null;
  //       current = current.next;
  //     }
  //   }
  // }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     // console.log(this.head);
//   }
//   insertFirst(data) {
//     const newNode = new Node(data);
//     // console.log(newNode);
//     newNode.next = this.head;
//     this.head = newNode;
//     // console.log(this.head);
//   }
//   size() {
//     let count = 0;
//     let current = this.head;
//     while (current) {
//       count++;
//       current = current.next;
//     }
//     return count;
//   }
//   getFirst() {
//     return this.head;
//   }

//   getLast() {
//     if (!this.head) {
//       return null;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     return current;
//   }

//   clear() {
//     this.head = null;
//   }

//   removeFirst() {
//     if (!this.head) {
//       return;
//     }
//     this.head = this.head.next;
//   }

//   removeLast() {
//     if (!this.head) {
//       return;
//     }
//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }

//     let current = this.head;
//     let previous = null;
//     while (current.next) {
//       previous = current;
//       current = current.next;
//     }

//     previous.next = null;
//   }

//   insertLast(data) {
//     const newNode = new Node(data);

//     if (!this.head) {
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = newNode;
//   }

//   getAt(index) {
//     if (index < 0) {
//       return null;
//     }
//     let current = this.head;
//     let count = 0;

//     while (current !== null && count !== index) {
//       current = current.next;
//       count++;
//     }

//     return current !== null ? current : null;
//   }

//   removeAt(index) {
//     if (index < 0) {
//       return;
//     }
//     if (index === 0) {
//       if (this.head === null) {
//         return;
//       }
//       this.head = this.head.next;
//       return;
//     }

//     let current = this.head;
//     let previous = null;
//     let count = 0;

//     while (current !== null && count !== index) {
//       previous = current;
//       current = current.next;
//       count++;
//     }

//     if (current === null) {
//       return;
//     }

//     previous.next = current.next;
//   }

//   insertAt(data, index) {
//     if (index < 0) {
//       return;
//     }

//     const newNode = new Node(data);

//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }

//     let current = this.head;
//     let previous = null;
//     let count = 0;

//     while (current !== null && count !== index) {
//       previous = current;
//       current = current.next;
//       count++;
//     }

//     newNode.next = current;
//     previous.next = newNode;
//   }

//   forEach(callback) {
//     let current = this.head;

//     while (current !== null) {
//       callback(current);
//       current = current.next;
//     }
//   }

//   [Symbol.iterator]() {
//     let current = this.head;

//     return {
//       next: () => {
//         if (current) {
//           const value = current;
//           current = current.next;
//           return { value, done: false };
//         } else {
//           return { done: true };
//         }
//       },
//     };
//   }
// }

module.exports = { Node, LinkedList };
