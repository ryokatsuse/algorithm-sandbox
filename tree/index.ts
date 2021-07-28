import { Queue } from '../queue/index';

export class Node<T> {
  value: T
  parentNode: Node<T> | null
  childrenNode: Node<T>[]

  constructor(value: T) {
    this.value = value
    this.parentNode = null
    this.childrenNode = []
  }
}

// 深さ優先探索、幅優先探索
type AddNodeType<T> =
  | Tree<T>['addDepth']
  | Tree<T>['addBreadth'];

export class Tree<T> {
  root: Node<T>

  constructor(value: T) {
    this.root = new Node(value)
  }

  find(call: (node: Node<T>) => void, addNodeType: AddNodeType<T>): void {
    addNodeType.call(this, call)
  }

  add(value: T, parentValue: T, addNodeType: AddNodeType<T>): Node<T> {
    let parent = null
    const newNode = new Node(value)
    this.find((node) => {
      if (node.value === parentValue) {
        parent = node;
        parent.childrenNode.push(newNode);
        newNode.parentNode = parent;
      }
    }, addNodeType);

    if(!parent) {
      throw new Error('nodeがありません。')
    }
    return newNode
  }
}

const tree = new Tree('G');
console.log(tree)