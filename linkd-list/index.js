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
        // If there is no head yet let's make new node a head.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        // Attach new node to the end of linked list.
        this.tail = newNode;
        this.tail = newNode;
        return this;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var list = new LinkedList();
list.push(1);
list.push(4);
console.log(list);
