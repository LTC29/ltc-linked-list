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
}
