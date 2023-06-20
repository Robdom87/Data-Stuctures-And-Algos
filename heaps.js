let notes = `
another form of tree
we will focus on binary heaps
definition
simialr to bst but
Max tree, parent is greater than the cild
min tree, parent nodes are always smaller,

both of these are also as compact as possible, always takes least ampunt of space possible, left children always hilled out first
no implied ordering between siblings, 

the order does not have to do with left and right


compare and contrast min and max heap
implement max heasp
understand where heaps are used 
priority que using a heap
very commony used data structure

also used very much for graph traversal

stroing heaps
in a list or array
for any indes of an array n, left child is stored at 2n+1, right is 2n+2

to find parent (n-1)/2 - floor it, round to lowest whole num


priority queue-
define - which element has a priority, each elment is serves before elements with lower priorities
use cases
implementation
`

//heap insert intro

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(value){
        this.values.push(value);
        function findIndex(value, array){
            let i = 0
            for (i ; i < array.length; i++){
                if(value === array[i]){
                    break;
                }
            }
            return i;
        }
        let index = findIndex(value, this.values);
        let parentIndex = Math.floor((index - 1)/2);
        let parent = this.values[parentIndex]
        while (value > parent){
            
            this.values[parentIndex] = value;
            this.values[index] = parent;
            index = findIndex(value, this.values);
            parentIndex = Math.floor((index - 1)/2);
            parent = this.values[parentIndex]

        }

        return this.values;
    }
    extractMax(){
        let extracted = this.values[0];
        let index = this.values.length - 1;
        let last = this.values[index];
        this.values[0]=last;
        index = 0;
        this.values.pop();
        //sink down
        //swap with largest child
        while(true){
            let left = {
                idx: (2*index) +1,
                val: null
            }
            //make sure the index is in bounds
            left.val = this.values[left.idx];
            let right = {
                idx: (2*index) +2,
                val: null
            }
            right.val = this.values[right.idx];
            let comparison = Math.max(left.val, right.val);
            let compareObj = {};
            if (comparison === left.val){
                compareObj = left;
            } else {
                compareObj = right;
            }

            if(last<compareObj.val){
                this.values[index] = compareObj.val;
                this.values[compareObj.idx] = last;
                index = compareObj.idx; 
            } else {
                break;
            }

        }
        return extracted;
    }

}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    Enqueue(value){
        this.values.push(value);
        function findIndex(value, array){
            let i = 0
            for (i ; i < array.length; i++){
                if(value.priority === array[i].priority){
                    break;
                }
            }
            return i;
        }
        let index = findIndex(value, this.values);
        let parentIndex = Math.floor((index - 1)/2);
        let parent = this.values[parentIndex]
        while (value > parent){
            
            this.values[parentIndex] = value;
            this.values[index] = parent;
            index = findIndex(value, this.values);
            parentIndex = Math.floor((index - 1)/2);
            parent = this.values[parentIndex]

        }

        return this.values;
    }
    Dequeue(){
        let extracted = this.values[0];
        let index = this.values.length - 1;
        let last = this.values[index];
        this.values[0]=last;
        index = 0;
        this.values.pop();
        //sink down
        //swap with largest child
        while(true){
            let left = {
                idx: (2*index) +1,
                val: null
            }
            //make sure the index is in bounds
            left.val = this.values[left.idx];
            let right = {
                idx: (2*index) +2,
                val: null
            }
            right.val = this.values[right.idx];
            let comparison = Math.max(left.val, right.val);
            let compareObj = {};
            if (comparison === left.val){
                compareObj = left;
            } else {
                compareObj = right;
            }

            if(last<compareObj.val){
                this.values[index] = compareObj.val;
                this.values[compareObj.idx] = last;
                index = compareObj.idx; 
            } else {
                break;
            }

        }
        return extracted;
    }

}


let heap = new MaxBinaryHeap();
heap.insert(1);
heap.insert(7);
heap.insert(15);
heap.insert(8);
heap.insert(22);
heap.insert(55);
heap.insert(3);
heap.insert(34);
heap.extractMax();
console.log(heap.values);

