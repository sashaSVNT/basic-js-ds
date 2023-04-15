
class Stack {
  stackArr = [];
  push(el) {
    this.stackArr.push(el);
  }

  pop() {
    return this.stackArr.pop();
  }

  peek() {
    return this.stackArr[this.stackArr.length - 1];
  }
}

module.exports = {
  Stack
};
