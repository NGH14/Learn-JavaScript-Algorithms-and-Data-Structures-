const LinkedList = require("./tail-linked-list");

class StackLinkedList {

  constructor() {
    this.list = new LinkedList()
  }

  push(value) {
    return this.list.prepend(value);
  }

  pop() {
    return this.list.removeFirstNode();
  }

  peek() {
    return this.list.head.value;
  }

  print() {
    return this.list.print()
  }

}


const stackLinkedList = new StackLinkedList();

stackLinkedList.push(10);
stackLinkedList.print();


stackLinkedList.push(5);

stackLinkedList.print();


stackLinkedList.pop();
stackLinkedList.peek();

stackLinkedList.print();
