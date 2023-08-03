// 1 --> 2 --> 3 --> 4 --> 5 --> null;

/*
let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};
*/

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    //tail y head apuntan a la misma dirección de memoria
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new ListNode(value); //creamos nueva referencia
    this.tail.next = newNode; //el next del head y el next del tail es el mismo
    this.tail = newNode; //tail y el next de head tienen la misma referencia
    this.length++;
    return this;
    /*
    Entonces ahora tail y ese nodo que se agregó
    el next del head es el next de ese nodo que se agregó
    Ambos next estan referenciados, COMO AL INICIO
    entonces cuando creemos otro nodo simplemente se repetirá el proceso
    */
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;

    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const firstPointer = this.getTheIndex(index - 1);
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new SinglyLinkedList(3);
console.log(myLinkedList);