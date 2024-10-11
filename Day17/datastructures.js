// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

const e1 = new Node(10)
const e2 = new Node(20) 
const e3 = new Node(30) 
const e4 = new Node(40) 

//linking the nodes
e1.next = e2
e2.next = e3
e3.next = e4

console.log("Linked List with properties");

let i = e1
let res =''
while(i!==null){
    res += i.value + '->'
    i = i.next
}
console.log(res+'null');


// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList{
    constructor(){
        this.head = null //the list is empty in the beginning, declared a pointer
    }

    //private method to return a node 
    #createNode(value){
        return {
           value: value,
           next: null
        }
    }

    //add node method 
    addNode(value){
        const newNode = this.#createNode(value);
        //if list is empty
        if(this.head === null){
            this.head = newNode; 
            return 
        }

        //if list is not empty
        let currElement = this.head
        while(currElement.next !== null){
            currElement = currElement.next
        }
        currElement.next = newNode 
    }

    popNode(){
        //empty list
        if(this.head === null){
            console.log("The list is empty.");
            return
        }

        //one element list
        if(this.head.next === null){
            this.head = null
            return
        }

        //more than one element
        let currElement = this.head
        while(currElement.next.next !== null){
            currElement = currElement.next 
        }
        currElement.next = null
    }

    display(){
        if(this.head === null){
            console.log("The list is empty.");
            return
        }

        let currElement = this.head
        let res = ''
        while(currElement !== null){
            res += currElement.value + "->"
            currElement = currElement.next
        }
        console.log(res+'null');
        
    }
}

//example
const list = new LinkedList()
console.log("Linked List with methods:");

list.addNode(10);
list.addNode(20);
list.addNode(30);
list.display(); // 10 -> 20 -> 30 -> null

list.popNode()
list.display() //10 -> 20 -> null

list.popNode()
list.display() //10 -> null

list.popNode()
list.display() //the list is empty



// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack{
    constructor(){
        this.items = []
    }

    //add element to the top
    push(value){
        this.items.push(value)
    }

    //remove element from top
    pop(){
        if(this.items.length === 0){
            console.log("Stack is empty.");
            return null;
        }
        return this.items.pop()
    }

    //view top element
    peek(){
        if(this.items.length === 0){
            console.log("Stack is empty.");
            return null;
        }
        return this.items[this.items.length -1]
    }

    display(){
        console.log(this.items);
    }
}

const stack = new Stack()
console.log("Stack implementation:");

stack.push(20)
stack.push(30)
stack.push(50)

stack.display()

console.log("Peek:", stack.peek());
console.log("Popped Element", stack.pop());
stack.display();

console.log("Peek:", stack.peek());
console.log("Popped Element", stack.pop());
stack.display();

console.log("Peek:", stack.peek());
console.log("Popped Element", stack.pop());
stack.display()


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.

const revStack = new Stack();
let str = "Hello World";

//pushing items in the stack
for(let char of str){
    stack.push(str[char])
}

//now popping them to reverse the string
let reversedString =''

while(stack.items.length !== 0 ){
    reversedString += stack.pop()
    
}

console.log("The reversed String is:", reversedString);

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element). 

class Queue{
    constructor(){
        this.items = []
    }

    enqueue(value){
        this.items.push(value)
    }

    dequeue(){
        if(this.items.length === 0){
            console.log("Queue is empty.");
            return null
        }
        return this.items.shift() // remove first element (fifo)
    }

    front(){
        if(this.items.length === 0){
            console.log("Queue is empty.");
            return null
        }
        return this.items[0] //return first element
    }

    display(){
        console.log(this.items);
    }

    isEmpty(){
        return this.items.length === 0
    }
}


const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.display()

console.log("Front element:", queue.front());

console.log("Dequeued: ", queue.dequeue());
console.log("Front element:", queue.front());

console.log("Dequeued: ", queue.dequeue());
console.log("Front element:", queue.front());

console.log("Dequeued: ", queue.dequeue());
console.log("Front element:", queue.front());

//Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

class PrinterQueue{
    constructor(){
        this.queue = new Queue()
    }

    //add new print job
    addPrintJob(job){
        console.log(`Adding print job: ${job}`);
        this.queue.enqueue(job)
        this.queue.display()
    }

    //process the next job 
    processNextJob(){
        if(this.queue.isEmpty()){
            console.log("No print jobs to process");
        } else{
            const job = this.queue.dequeue()
            console.log(`Processing print job:${job}`);
        }
        this.queue.display()
    }
    
    //view the next job
    viewNextJob(){
        const nextJob = this.queue.front()
        if(nextJob !== null){
            console.log(`Next print job to be processed:${nextJob}`);
        }
    }
}

const printQueue = new PrinterQueue()

printQueue.addPrintJob("Print Document 1")
printQueue.addPrintJob("Print Document 2")
printQueue.addPrintJob("Print Document 3")

printQueue.viewNextJob()

printQueue.processNextJob()
printQueue.processNextJob()

printQueue.viewNextJob()

printQueue.processNextJob()

printQueue.processNextJob()

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new TreeNode(value)
        if(this.root === null){
            this.root = newNode
        }else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(currNode, newNode){
        if(newNode.value < currNode.value){
            //go to the left subtree
            if(currNode.left === null)
                currNode.left = newNode
            else{
                this.insertNode(currNode.left, newNode) //recursively going to the left subtree
            }
        }
        else{
            //go to the right subtree
            if(currNode.right === null)
                currNode.right = newNode
            else{
                this.insertNode(currNode.right, newNode) //recursively going to the right subtree
            }
        }
    }

    inOrderTraversal(node=this.root){
        if(node!== null){
            this.inOrderTraversal(node.left)
            console.log(node.value);
            this.inOrderTraversal(node.right)
        } 
    }
}

const bst = new BinaryTree()

bst.insert(20)
bst.insert(15)
bst.insert(25)
bst.insert(7)
bst.insert(23)
bst.insert(1)
bst.insert(50)
bst.insert(17)
bst.insert(90)

console.log("InOrder Traversal:");
bst.inOrderTraversal()

// Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to add vertices, add edges, and perform a breadth-first search (BFS).

class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] =[]
        }
    }

    addEdge(vertex1, vertex2){
        //check if vertex1 exists
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        //check if vertex2 exists
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }

        //connecting the vertices
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)
    }

    bfs(start,target){
        //using some data structures to implement bfs
        const queue = [start]
        const visited = {[start]: true}

        const parent = {}
        parent[start] = null 
        
        //mark the start vertex as visited
        // visited[start] = true

        //using while loop to iterate over all queue items
        while(queue.length > 0){
            let vertex = queue.shift() //using the temporary vertex variable and removing that item from the queue
            if(vertex === target){
                let path= []
                while(vertex !== null){
                    path.push(vertex)
                    vertex = parent[vertex]
                }
                return path.reverse()
            }

            //visiting every neighbour of the vertex in the queue
            // this.adjacencyList[vertex].forEach(neighbour => {
            //     if(!visited[neighbour]){
            //         visited[neighbour] = true 
            //         parent[neighbour] = vertex
            //         queue.push(neighbour)
            //     }
            // });

            for (const neighbour of this.adjacencyList[vertex]) {
                if(!visited[neighbour]){
                    visited[neighbour] = true 
                    parent[neighbour] = vertex
                    queue.push(neighbour)
                }
            }
        }
        return []
    }
}

// Task 10: Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

let shortestPath = graph.bfs('A', 'G');
console.log("Shortest Path from A to G:", shortestPath);


// Feature Request:
// 1. Linked List Script: Write a script that implements a linked list with methods to add, remove, and display nodes.
// 2. Stack Script: Create a script that implements a stack and uses it to reverse a string.
// 3. Queue Script: Write a script that implements a queue and simulates a printer queue.
// 4. Binary Tree Script: Create a script that implements a binary tree with insertion and in-order traversal methods.
// 5. Graph Script: Write a script that implements a graph and performs breadth-first search (optional).