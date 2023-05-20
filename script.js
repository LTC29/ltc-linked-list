class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor(head = null, size = 0) {
    this.head = head;
    this.size = size;
  }

  appendHead(value) {
    this.head = new Node(value, this.nextNode);
    this.size++;
  }
}
