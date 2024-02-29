
const util = require('util')


class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);

		if (this.isEmpty()) {
			this.head = node;
      this.tail = this.head;
		} else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
	}

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = this.head
    }
    this.tail.next = node;
    this.tail = node;

    
    this.size++
  }

  removeFirstNode() {
    if (this.isEmpty()) {
      return -1
    }
    this.head = this.head.next;
    this.size--
  }

  removeLastNode() {
    if (this.isEmpty()) {
      return -1
    }
    let prev = this.head;
    while (prev.next !== this.tail) {
      prev = prev.next
    }
    prev.next = null;
    this.tail = prev;
    this.size--
  }

	print() {
    if (this.isEmpty()) {return console.log("Empty linkedList")}
    
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value} -> `
      curr = curr.next 
    }
    console.log(str + "null")
  }
}

let linkedList = new LinkedList();




// linkedList.prepend(10)
// linkedList.print();

// linkedList.prepend(20)
// linkedList.print();


// linkedList.append(30)
// linkedList.append(40)
// linkedList.print();


// linkedList.removeFirstNode()
// linkedList.print();


// linkedList.removeLastNode()
// linkedList.print();


module.exports = LinkedList;
