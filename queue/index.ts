import { LinkedList } from '../linkd-list/index';


/**
 * キューのクラス
 *
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {
  linkedList: LinkedList<T>
  constructor() {
    this.linkedList = new LinkedList();
  }

  /**
   * 要素が格納されているかどうかをチェック
   *
   * @return {*} 
   * @memberof Queue
   */
  isEmpty() {
    return !this.linkedList.head;
  }

  /**
   * 最初の要素を返す
   *
   * @return {*} 
   * @memberof Queue
   */
  peek() {
    if (!this.linkedList.head) {
      return null
    }
    return this.linkedList.head.value
  }


  /**
   * 要素の追加
   *
   * @param {T} value
   * @memberof Queue
   */
  enqueue(value: T) {
    this.linkedList.push(value);
  }


  /**
   * 最初の要素の削除
   *
   * @return {*} 
   * @memberof Queue
   */
  dequeue() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
}

const queue = new Queue()
queue.enqueue(0)
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue()
console.log(queue)
