let notes = `
types are trees, binary treesm and binarya search trees
tree are similar to linked lists in that they are nodes
but they are also have to be in a parent child relationship
cant point to siblings, only points to child
graphs can point to their peers
must also only have one root
siblings - same parent
leaf - no children
edge is connection between parent and child
trees are nonlinear, multiples paths

real application of trees
html DOM
networkinh routing
abstract syntax tree
use in AI
folders in an operating sytem
JSON

tree types
binrary trees
    can have at most 2 children
bionary search trees
    sorted in some sort of way
    usually with data that can be compares/evaluated against each other
    all nums that are less than on node is to the left of it, and the greater are to the right

BST strutucture
    helps to look things up
    and it helps insert things quickly
`;

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let insertNode = new Node(value);
        if (this.root === null) {
            this.root = insertNode;
            return this;

        }

        let currentNode = this.root;
        while (true) {
            if (value > currentNode.value) {
                if (currentNode.right === null) {
                    currentNode.right = insertNode;
                    return this;
                }
                currentNode = currentNode.right;
            } else if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = insertNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                return this;
            }
        }
    }
}

let tree = new BinarySearchTree;
tree.insert(2);
tree.insert(23);
tree.insert(1);
tree.insert(24);
tree.insert(1);
console.log(tree);

