## LTC's Linked List

This project implements a linked list data structure in JavaScript using two classes, Node and LinkedList.

The "Node" class represents a single node in the linked list. Each node has a "value" property and a "nextNode" property that points to the next node in the list.

The "LinkedList" class represents the full linked list. It has a "head" property that points to the first node a "size" property that keeps track of the number of nodes in the list.

The LinkedList class has the following functions:

- **append(value):** Adds a new node with the given value to the end of the list.

- **prepend(value):** Adds a new node with the given value to the start of the list.

- **checkSize():** Returns the number of nodes in the list.

- **checkHead():** Returns the first node (head) of the list.

- **checkTail():** Returns the last node of the list.

- **at(index):** Returns the node at the specified index in the list.

- **popTail():** Removes the last node from the list.

- **contains(value):** Checks if the specified value is present in the list. It returns true if the value is found, false otherwise.

- **find(value):** Returns the index of the node that contains the specified value in the list. If the value is not found, it returns null.

- **listToString():** Returns a string representation of the linked list.
