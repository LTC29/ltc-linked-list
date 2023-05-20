class Node {
  constructor() {
    this.value = null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      //if there is no head, the new node becomes the head
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        //if there is a nextNode, the current node becomes the next node
        current = current.nextNode;
      }
      current.nextNode = newNode;
      //if there isn't a nextNode, the new node becomes the next node
      this.size++;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head; //the section nextNode of the new node becomes the head
    this.head = newNode;
    this.size++;
  }

  checkSize() {
    return this.size;
  }

  checkHead() {
    return this.head;
  }

  checkTail() {
    let current = this.head;
    while (current.nextNode) {
      //while there is a next node, the current node becomes the next node until there isn't a next node and then it will return the last node of the tree
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index > this.size || !this.head) {
      return null;
    }
    let current = this.head;
    let currentIndex = 0;
    while (current && currentIndex !== index) {
      //keeps traversing and adding to the index counter until the desired index is reached
      current = current.nextNode;
      currentIndex++;
    }
    return current;
  }

  popTail() {
    let current = this.head;
    let previous = null;
    while (current.nextNode) {
      current = current.nextNode;
    }
    if (previous) {
      //makes previous nextNode null and makes the current instance null
      previous.nextNode = null;
    } else {
      this.head = null;
    }
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode; //standard traversal
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let currentIndex = 0;
    while (current) {
      if (current.value === value) {
        return currentIndex;
      }
      current = current.nextNode; //standard traversal once again
      currentIndex++;
    }
    return null; //value not found
  }
  listToString() {
    let current = this.head;
    let string = '';
    while (current) {
      string += `(${current.value} + '') ->`;
      current = current.nextNode;
    }
    string += 'null';
    return string;
  }
}

//OBS:
// let current = this.head; sets the head as the current instance
//
// let currentIndex = 0; sets the index as 0 to "start from the beginning"
//
// while (current) means that the loop will continue to execute as long as "current" is true/truthy
