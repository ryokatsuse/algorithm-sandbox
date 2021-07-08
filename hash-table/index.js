"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashTable = void 0;
var index_1 = require("../linkd-list/index");
var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.hashTableSize = size;
        this.table = Array({ length: size }).map(function () { return new index_1.LinkedList(); });
    }
    /**
     * ハッシュ関数
     * @param {string} key
     * @return {*}
     * @memberof HashTable
     */
    HashTable.prototype.hash = function (key) {
        var codeAtNumber = 100;
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
        var list = this.table[id];
        list.push({ key: key, value: value });
    };
    /**
     * ハッシュキーから値を検索して取得する
     * @param {string} key
     * @return {*}
     * @memberof HashTable
     */
    HashTable.prototype.get = function (key) {
        var id = this.hash(key);
        var linkedList = this.table[id];
        return linkedList.findBy(function (current) { return current.value.key === key; });
    };
    return HashTable;
}());
exports.HashTable = HashTable;
var hashTable = new HashTable(100);
hashTable.set('name', 'Ryo Katsuse');
hashTable.set('age', '35歳');
console.log(hashTable.hash('name'));
console.log((_a = hashTable.get('name')) === null || _a === void 0 ? void 0 : _a.value);
