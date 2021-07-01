export class LinkedListNode<T> {
  value: T;
  nextNode: LinkedListNode<T> | null;

  constructor(value: T, next = null) {
    this.value = value;
    this.nextNode = next;
  }
}

export class LinkedList<T> {
  head: LinkedListNode<T> | null = null;
  tail: LinkedListNode<T> | null = null;
  length = 0;

  /**
   * 要素を追加
   *
   * @param {T} value
   * @return {*}
   * @memberof LinkedList
   */
  push(value: T) {
    const newNode = new LinkedListNode<T>(value);

    // LinkedListがemptyの場合
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length += 1;

    return newNode;
  }

  /**
   * 配列 -> リストに変換
   *
   * @param {T[]} values
   * @memberof LinkedList
   */
  fromArray(values: T[]) {
    values.forEach((value) => this.push(value));
  }

  /**
   * リスト -> 配列に変換
   *
   * @return {*}  {T[]}
   * @memberof LinkedList
   */
  toArray(): T[] {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.nextNode;
    }

    return array;
  }

}

const list = new LinkedList();
console.log(list.push(1));
console.log(list.toArray());