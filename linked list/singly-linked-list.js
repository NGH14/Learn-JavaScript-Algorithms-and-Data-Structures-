/* -------------------------------------------------------------------------- */
"use strict"

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(head = null) {
		this.head = head;
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

const singlyLinkedList = new SinglyLinkedList();


singlyLinkedList.print()

singlyLinkedList.prepend(10)
singlyLinkedList.prepend(4)

singlyLinkedList.print()

singlyLinkedList.prepend(2)
singlyLinkedList.prepend(1)
singlyLinkedList.print()

singlyLinkedList.append(20)
singlyLinkedList.append(40)

singlyLinkedList.print()


singlyLinkedList.insert(60, 6)
singlyLinkedList.insert(15,4)
singlyLinkedList.insert(17, 99)
singlyLinkedList.insert(0, 0)

singlyLinkedList.print()


singlyLinkedList.removeFromValue(15)
singlyLinkedList.removeFromValue(60)
singlyLinkedList.removeFromValue(80)


singlyLinkedList.print()

singlyLinkedList.removeFromIndex(3)
singlyLinkedList.removeFromIndex(-1)
singlyLinkedList.removeFromIndex(100)

singlyLinkedList.print()

singlyLinkedList.search(10)


singlyLinkedList.reverse()
singlyLinkedList.print()

/* -------------------------------------------------------------------------- */
