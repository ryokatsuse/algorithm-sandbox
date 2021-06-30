export class LinkedListNode<T> {
  value: T;
  nextNode: LinkedListNode<T> | null;

  constructor(value: T, next = null) {
    this.value = value;
    this.nextNode = next;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 要素を追加
   *
   * @param {T} value
   * @return {*} 
   * @memberof LinkedList
   */
  push(value: T) {
    const newNode = new LinkedListNode(value);

    // If there is no head yet let's make new node a head.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail = newNode;
    this.tail = newNode;

    return this;
  }
}

const list = new LinkedList()
list.push(1)
list.push(4)
console.log(list)