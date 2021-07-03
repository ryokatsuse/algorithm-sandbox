"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = exports.StackNode = void 0;
//LinkedListとほぼ同様の機能となる。
var StackNode = /** @class */ (function () {
    function StackNode(value, next) {
        if (next === void 0) { next = null; }
        this.value = value;
        this.nextNode = next;
    }
    return StackNode;
}());
exports.StackNode = StackNode;
/**
 *　スタック
 *
 * @export
 * @class Stack
 * @template T
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.head = null;
        this.length = 0;
    }
    /**
     * 追加
     *
     * @param {T} value
     * @return {*}
     * @memberof Stack
     */
    Stack.prototype.push = function (value) {
        var newNode = new StackNode(value);
        newNode.nextNode = this.head;
        this.head = newNode;
        this.length + -1;
        return newNode;
    };
    /**
     * データが入っているかどうかチェックする
     *
     * @return {*}
     * @memberof Stack
     */
    Stack.prototype.isEmpty = function () {
        return !this.head;
    };
    /**
     * 最後の要素を返す
     *
     * @return {*}
     * @memberof Stack
     */
    Stack.prototype.peek = function () {
        var _a;
        if (this.isEmpty()) {
            return null;
        }
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    };
    /**
     *
     * 削除
     * @return {*}
     * @memberof Stack
     */
    Stack.prototype.pop = function () {
        var deletedNode = this.head;
        if (this.head) {
            this.head = this.head.nextNode;
            this.length -= 1;
        }
        return deletedNode;
    };
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(6);
stack.push(0);
console.log(stack.peek());
stack.pop();
stack.pop();
console.log(stack.pop());
