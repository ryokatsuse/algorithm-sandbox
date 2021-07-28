"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.parentNode = null;
        this.childrenNode = [];
    }
    return Node;
}());
exports.Node = Node;
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.root = new Node(value);
    }
    Tree.prototype.find = function (call, addNodeType) {
        addNodeType.call(this, call);
    };
    Tree.prototype.add = function (value, parentValue, addNodeType) {
        var parent = null;
        var newNode = new Node(value);
        this.find(function (node) {
            if (node.value === parentValue) {
                parent = node;
                parent.childrenNode.push(newNode);
                newNode.parentNode = parent;
            }
        }, addNodeType);
        if (!parent) {
            throw new Error('nodeがありません。');
        }
        return newNode;
    };
    return Tree;
}());
exports.Tree = Tree;
var tree = new Tree('G');
console.log(tree);
