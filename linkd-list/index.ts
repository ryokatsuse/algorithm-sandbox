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

  /**
   * toArrayの中でx番目の要素を検索する
   *
   * @param {number} index
   * @return {*} 
   * @memberof LinkedList
   */
  find(index: number) {
    let currentIndex = 0;
    let currentNode = this.head;

    if (index > this.length) {
      throw new Error(`お探しの(${index})は見つかりませんでした。`);
    }

    while (currentIndex < index) {
      if (currentNode?.nextNode) {
        currentIndex += 1;
        currentNode = currentNode?.nextNode;
      }
    }

    return currentNode;
  }

  /**
   * リストの削除
   *
   * @memberof LinkedList
   */
  removeHead() {
    if (this.head === null)
      return
    else {
      this.head = this.head.nextNode;
      this.length--;
    }
  }


  /**
   * headを削除する
   *
   * @return {*} 
   * @memberof LinkedList
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.nextNode) {
      this.head = this.head.nextNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  /**
   *  値を削除する
   *
   * @param {T} value
   * @return {*} 
   * @memberof LinkedList
   */
  deleteValue(value: T) {
    if (this.head?.value === value)
      return this.removeHead();

    let currentNode = this.head?.nextNode;
    let previousNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) break;

      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }

    if (currentNode) {
      if (!previousNode) return
      previousNode.nextNode = currentNode?.nextNode;
      this.length--;
    }
  }


  /**
   * リストを反転させる
   *
   * @return {*} 
   * @memberof LinkedList
   */
  reverse() {
    let currentNode = this.head;
    let previousNode = null;
    // 命名被ってるから後で考える
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.nextNode;
      currentNode.nextNode = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // Reset head and tail.
    this.tail = this.head;
    this.head = previousNode;

    return this;
  }

}

const list = new LinkedList();
list.push(2)
list.push(3)
list.push(5)
list.push(0)
list.deleteValue(0)
console.log(list);
// console.log(list.toArray());
console.log(list.reverse());
console.log(list.find(0)?.value);