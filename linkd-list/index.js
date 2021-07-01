"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.LinkedListNode = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.nextNode = next;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    /**
     * 要素を追加
     *
     * @param {T} value
     * @return {*}
     * @memberof LinkedList
     */
    LinkedList.prototype.push = function (value) {
        var newNode = new LinkedListNode(value);
        // LinkedListがemptyの場合
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return newNode;
    };
    /**
     * 配列 -> リストに変換
     *
     * @param {T[]} values
     * @memberof LinkedList
     */
    LinkedList.prototype.fromArray = function (values) {
        var _this = this;
        values.forEach(function (value) { return _this.push(value); });
    };
    /**
     * リスト -> 配列に変換
     *
     * @return {*}  {T[]}
     * @memberof LinkedList
     */
    LinkedList.prototype.toArray = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.nextNode;
        }
        return array;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList();
console.log(list.push(1));
console.log(list.toArray());
