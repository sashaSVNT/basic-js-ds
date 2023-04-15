const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/index.js');

function removeKFromList(list, k) {
  let currentNode = list;
  while (currentNode && currentNode.value === k) {
    currentNode = currentNode.next;
  }
  const newHead = currentNode;

  let prev = null;
  while (currentNode) {
    if (currentNode.value === k) {
      if (prev) {
        prev.next = currentNode.next;
      }
    }
    else {
      prev = currentNode;
    }
    currentNode = currentNode.next;
  }
  return newHead;
}
module.exports = {
  removeKFromList
};
