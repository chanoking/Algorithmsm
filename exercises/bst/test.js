const Node = require('./index');

test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});

test('Node can insert correctly', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(17);

  expect(node.left.data).toEqual(5);
  expect(node.right.data).toEqual(15);
  expect(node.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new Node(10);
  console.log(node);
  node.insert(5);
  console.log(node);
  node.insert(15);
  console.log(node);
  node.insert(20);
  console.log(node);
  node.insert(0);
  console.log(node);
  node.insert(-5);
  console.log(node);
  node.insert(3);
  console.log(node);

  const three = node.left.left.right;
  console.log(three);
  expect(node.contains(3)).toEqual(three);
  console.log(node.contains(3));
});

test('Contains returns null if value not found', () => {
  const node = new Node(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
