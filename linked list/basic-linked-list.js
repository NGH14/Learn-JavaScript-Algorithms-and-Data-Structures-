/* -------------------------------------------------------------------------- */
"use strict"

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	isEmpty() {
		return this.size === 0;
	}

  removeFromValue(value) {
    if (this.isEmpty()) return console.log("Empty Linked List")

    let prev = this.head;

    while (prev) {
      if (!prev.next) return null;
      if (value == prev.next.data) (prev.next = prev.next.next, this.size--);
      prev = prev.next;
    }
  }

  removeFromIndex(index) {
    if (this.isEmpty()) return console.log("Empty Linked List");
    if (index < 0 || index > this.size) return null

    let prev = this.head;
    for (let i = 0 ; i < index-1; i++) {
      prev=prev.next
    }
    prev.next = prev.next.next
    this.size--
  }
  
  getSize() {
      return this.size;
  }
  
  prepend(data) {
    const newNode = new Node(data)
    if (!this.head) this.head = newNode 
    else { newNode.next = this.head, this.head = newNode}
    
    this.size++
  } 

  print() {
    if (this.isEmpty()) return console.log("Empty Linked List")
    
    let curr = this.head;
    let listNode = ''
    while (curr) {
      listNode += `${curr.data} -> `
      curr = curr.next
    }
    console.log(`[${this.getSize()}] ` + listNode + null)
  }

  append(data){
    const newNode = new Node(data)
    if (this.isEmpty()) this.head = newNode

    let prev = this.head;

    while (prev.next) {
      prev = prev.next;
    }

    prev.next = newNode;

    this.size++
  }

  search(value) {
    if (this.isEmpty()) return console.log("Empty Linked List");

    let curr = this.head;

    for (let i = 0; i < this.size; i++) {
      if (curr.data === value) return console.log(i);
      curr = curr.next
    }
    return -1;
  }

  insert(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(data)
    if (index === this.size) return this.append(data)

    const newNode = new Node(data);
    let prev = this.head;
    
    for (let i = 0; i < index-1; i++) {
      prev = prev.next;
    }   
    newNode.next = prev.next;
    prev.next = newNode;

    this.size++
  }

  reverse() {
    if (this.isEmpty()) return console.log("Empty Linked List");
     
    
    /* 
        [1] -> [2] -> [3] -> null
        curr = 1
        curr.next = 2
        next = 2
        next.next= 3
        pre = null

        null <- [1]  [2] -> [3] -> null
        curr.next = null
        pre = 1;
        next = 3
        curr = 2

        null <- [1] <- [2]  [3] -> null
        
        curr.next = 1;
        pre = 2;
        curr = 3
        next = null
        
        null <- [1] <- [2]  <- [3] null
        
        curr.next = 2;
        pre = 3;
        curr = null
        next = null

        head = 3;
    */  
    let curr = this.head;
    let prev = null;
    let next = curr.next;
    
    while (curr) {
      curr.next = prev;
      prev = curr;
      curr = next; 
      if (next) next = next.next;
    }
    this.head = prev;
  }
  
}

const linkedList = new LinkedList();


linkedList.print()

linkedList.prepend(10)
linkedList.prepend(4)

linkedList.print()

linkedList.prepend(2)
linkedList.prepend(1)
linkedList.print()

linkedList.append(20)
linkedList.append(40)

linkedList.print()


linkedList.insert(60, 6)
linkedList.insert(15,4)
linkedList.insert(17, 99)
linkedList.insert(0, 0)

linkedList.print()


linkedList.removeFromValue(15)
linkedList.removeFromValue(60)
linkedList.removeFromValue(80)


linkedList.print()

linkedList.removeFromIndex(3)
linkedList.removeFromIndex(-1)
linkedList.removeFromIndex(100)

linkedList.print()

linkedList.search(10)


linkedList.reverse()
linkedList.print()


module.exports = LinkedList;
/* -------------------------------------------------------------------------- */
