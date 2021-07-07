"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.hashTableSize = size;
        this.table = [];
    }
    /**
     * ハッシュ関数
     * @param {string} key
     * @return {*}
     * @memberof HashTable
     */
    HashTable.prototype.hash = function (key) {
        var codeAtNumber = 3000;
        var id = 0;
        for (var i = 0; i < key.length; i++) {
            /**
             * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
             **/
            id += key.charCodeAt(i) * codeAtNumber;
        }
        return id % this.hashTableSize;
    };
    /**
     * ハッシュキーの保存
     * @param {string} key
     * @param {unknown} value
     * @memberof HashTable
     */
    HashTable.prototype.set = function (key, value) {
        var id = this.hash(key);
        this.table[id] = value;
    };
    /**
     * ハッシュキー取得
     * @param {string} key
     * @return {*}
     * @memberof HashTable
     */
    HashTable.prototype.get = function (key) {
        var id = this.hash(key);
        var value = this.table[id];
        return value;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
var hashTable = new HashTable(3000);
hashTable.set('kkkkkkkk', 'Ryo Katsuse');
console.log(hashTable);
console.log(hashTable.hash('Ryo Katsuse'));
