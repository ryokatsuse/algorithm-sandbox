//LinkedListとほぼ同様の機能となる。
export class StackNode<T> {
  value: T
  nextNode: StackNode<T> | null

  constructor(value: T, next = null) {
    this.value = value
    this.nextNode = next
  }
}

/**
 *　スタック
 *
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {
  head: StackNode<T> | null = null
  length = 0

  /**
   * 追加
   *
   * @param {T} value
   * @return {*} 
   * @memberof Stack
   */
  push(value: T) {
    const newNode = new StackNode(value)
    newNode.nextNode = this.head
    this.head = newNode
    this.length + - 1

    return newNode
  }

  /**
   * データが入っているかどうかチェックする
   *
   * @return {*} 
   * @memberof Stack
   */
  isEmpty() {
    return !this.head
  }

  /**
   * 最後の要素を返す
   *
   * @return {*} 
   * @memberof Stack
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.head?.value
  }


  /**
   *
   * 削除
   * @return {*} 
   * @memberof Stack
   */
  pop() {
    const deletedNode = this.head
    if (this.head) {
      this.head = this.head.nextNode
      this.length -= 1
    }
    return deletedNode
  }
}

const stack = new Stack()
stack.push(1)
stack.push(3)
stack.push(6)
stack.push(0)
console.log(stack.peek())
stack.pop()
stack.pop()
console.log(stack.pop())
