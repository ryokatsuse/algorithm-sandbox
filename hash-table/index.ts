
import { LinkedList, LinkedListNode } from '../linkd-list/index';
export class HashTable {
  hashTableSize: number
  table: LinkedList<{ key: string; value: unknown }>[]

  constructor(size: number) {
    this.hashTableSize = size
    this.table = Array({ length: size }).map(() => new LinkedList())
  }
  /**
   * ハッシュ関数
   * @param {string} key
   * @return {*} 
   * @memberof HashTable
   */
  hash(key: string) {
    const codeAtNumber = 100
    let id = 0
    for (let i = 0; i < key.length; i++) {
      /** 
       * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
       **/
      id += key.charCodeAt(i) * codeAtNumber
    }
    return id % this.hashTableSize
  }


  /**
   * ハッシュキーの保存
   * @param {string} key
   * @param {unknown} value
   * @memberof HashTable
   */
  set(key: string, value: unknown) {
    const id = this.hash(key)
    const list = this.table[id]
    list.push({ key, value })
  }


  /**
   * ハッシュキーから値を検索して取得する
   * @param {string} key
   * @return {*} 
   * @memberof HashTable
   */
  get(key: string): LinkedListNode<{ key: string; value: unknown }> | null {
    const id = this.hash(key);
    const linkedList = this.table[id];

    return linkedList.findBy((current) => current.value.key === key);
  }
}

const hashTable = new HashTable(100);
hashTable.set('name', 'Ryo Katsuse')
hashTable.set('age', '35歳')
console.log(hashTable.hash('name'))
console.log(hashTable.get('name')?.value);

