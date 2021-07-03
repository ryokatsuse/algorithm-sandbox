"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var index_1 = require("../linkd-list/index");
/**
 * キューのクラス
 *
 * @export
 * @class Queue
 * @template T
 */
var Queue = /** @class */ (function () {
    function Queue() {
        this.linkedList = new index_1.LinkedList();
    }
    /**
     * 要素が格納されているかどうかをチェック
     *
     * @return {*}
     * @memberof Queue
     */
    Queue.prototype.isEmpty = function () {
        return !this.linkedList.head;
    };
    /**
     * 最初の要素を返す
     *
     * @return {*}
     * @memberof Queue
     */
    Queue.prototype.peek = function () {
        if (!this.linkedList.head) {
            return null;
        }
        return this.linkedList.head.value;
    };
    /**
     * 要素の追加
     *
     * @param {T} value
     * @memberof Queue
     */
    Queue.prototype.enqueue = function (value) {
        this.linkedList.push(value);
    };
    /**
     * 最初の要素の削除
     *
     * @return {*}
     * @memberof Queue
     */
    Queue.prototype.dequeue = function () {
        var removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    };
    return Queue;
}());
exports.Queue = Queue;
var queue = new Queue();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.dequeue();
console.log(queue);
