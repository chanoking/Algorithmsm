// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// function fromLast(list, n) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   // Move the fast pointer n nodes ahead
//   for (let i = 0; i < n; i++) {
//     fast = fast.next;
//   }

//   // Move both pointers until the fast pointer reaches the end
//   while (fast.next) {
//     fast = fast.next;
//     slow = slow.next;
//   }

//   // slow now points to the node n spaces from the last
//   return slow;
// }

function fromLast(list, n) {
  let fast = list.getFirst();
  let slow = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;
