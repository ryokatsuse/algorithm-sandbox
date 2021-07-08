"use strict";
var _a;
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
    /**
     * toArrayの中でx番目の要素を検索する
     *
     * @param {number} index
     * @return {*}
     * @memberof LinkedList
     */
    LinkedList.prototype.find = function (index) {
        var currentIndex = 0;
        var currentNode = this.head;
        if (index > this.length) {
            throw new Error("\u304A\u63A2\u3057\u306E(" + index + ")\u306F\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F\u3002");
        }
        while (currentIndex < index) {
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) {
                currentIndex += 1;
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;
            }
        }
        return currentNode;
    };
    /**
     * リストの削除
     *
     * @memberof LinkedList
     */
    LinkedList.prototype.removeHead = function () {
        if (this.head === null)
            return;
        else {
            this.head = this.head.nextNode;
            this.length--;
        }
    };
    /**
     * headを削除する
     *
     * @return {*}
     * @memberof LinkedList
     */
    LinkedList.prototype.deleteHead = function () {
        if (!this.head) {
            return null;
        }
        var deletedHead = this.head;
        if (this.head.nextNode) {
            this.head = this.head.nextNode;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return deletedHead;
    };
    /**
     *  値を削除する
     *
     * @param {T} value
     * @return {*}
     * @memberof LinkedList
     */
    LinkedList.prototype.deleteValue = function (value) {
        var _a, _b;
        if (((_a = this.head) === null || _a === void 0 ? void 0 : _a.value) === value)
            return this.removeHead();
        var currentNode = (_b = this.head) === null || _b === void 0 ? void 0 : _b.nextNode;
        var previousNode = this.head;
        while (currentNode) {
            if (currentNode.value === value)
                break;
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        if (currentNode) {
            if (!previousNode)
                return;
            previousNode.nextNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;
            this.length--;
        }
    };
    /**
     * 要素の検索
     *
     * @param {(currentNode: LinkedListNode<T>) => boolean} callback
     * @return {*}  {(LinkedListNode<T> | null)}
     * @memberof LinkedList
     */
    LinkedList.prototype.findBy = function (callback) {
        var currentNode = this.head;
        while (currentNode !== null) {
            if (callback(currentNode)) {
                return currentNode;
            }
            if (currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode) {
                currentNode = currentNode === null || currentNode === void 0 ? void 0 : currentNode.nextNode;
            }
        }
        return null;
    };
    /**
     * リストを反転させる
     *
     * @return {*}
     * @memberof LinkedList
     */
    LinkedList.prototype.reverse = function () {
        var currentNode = this.head;
        var previousNode = null;
        // 命名被ってるから後で考える
        var nextNode = null;
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
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList();
list.push(2);
list.push(3);
list.push(5);
list.push(0);
list.deleteValue(0);
console.log(list);
// console.log(list.toArray());
console.log(list.reverse());
console.log((_a = list.find(0)) === null || _a === void 0 ? void 0 : _a.value);
