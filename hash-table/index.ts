export class HashTable {
  hashTableSize: number
  table: unknown[]

  constructor(size: number) {
    this.hashTableSize = size
    this.table = []
  }
  /**
   * ハッシュ関数
   * @param {string} key
   * @return {*} 
   * @memberof HashTable
   */
  hash(key: string) {
    const codeAtNumber = 3000
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
    this.table[id] = value
  }


  /**
   * ハッシュキー取得
   * @param {string} key
   * @return {*} 
   * @memberof HashTable
   */
  get(key: string) {
    const id = this.hash(key)
    const value = this.table[id]

    return value
  }
}

const hashTable = new HashTable(3000);
hashTable.set('kkkkkkkk', 'Ryo Katsuse');
console.log(hashTable)

console.log(hashTable.hash('Ryo Katsuse'));


