//peice of data - val
//reference to node - next
class Node {
    constructor(val) {
        this.val = val;
        //pointer, if null its the tail
        this.next = null;
    }
}

//how to make linked list with just nodes
var first = new Node("Hi");
first.next = new Node("there");
first.next.next = new Node("friend");
//bad way to create, should makes structures with inherent methods to interact with

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //insert at the end
    //create a new node with that value
    //if empty, set head and tail to newly created node
    //set next property in the list to be a nw node and the new tail
    //increment length by one
    //return linked list
    push(val) {
        let newNode = new Node(val);
        //if head is null or nonexistent, make node tail and head
        if (!this.head) {
            this.tail = this.head = newNode;
        } else {
            //make pointer to the new node from the original tail
            this.tail.next = newNode;
            //then make the tail the new mode
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //if empty return undefined
    //loop thru enire list until u reach the tail
    //set variable to hold second to last node
    // //set tail to second to last node
    // decrement length by 1
    // return the value of the node removed
    pop() {
        if (!this.head) return undefined;

        let current = this.head;   
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        newTail.next = null;
        this.tail = newTail;
        //edge case if one item
        if(this.head===this.tail) this.head=this.tail=null;
        this.length--;
        return current;
    }
}

//how we want to call it later on
var list = new SinglyLinkedList();
list.push("HELLO");
// list.push("GOODBYE");
list.pop();
console.log(list);