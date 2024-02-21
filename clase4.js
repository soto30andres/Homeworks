/**
 * Linked List
 * 
 * We can do something to the list:
 * 
 * a) append: adds nodes to the list
 * b) peek returns true or false if some node entered to the list
 * c) size: return the number of elements of the list
 * d) remove: removes a node from the list and joins previous and next node from this
 * e) print: prints the content
 */

class Node {

    constructor(value, next = null){

        this.value = value;
        this.next = next;
    }
}
    
class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node);

        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    print() {

        let node = this.head;

        while(node != null) {
            console.log(`${node.value.toString()} \n`);
            node = node.next;
        }

    }

}

class Task {
    constructor(title, description, points) {
        this.title = title;
        this.description = description;
        this.points = points;
    }

    toString() {

        return `title=${this.title}\ndescription=${this.description}\npoints=${this.points}`;
    }
}

const task1 = new Task("Test 1", "Description", 5);
const task2 = new Task("Test 2", "Description", 5);
const task3 = new Task("Test 3", "Description", 5);
const task4 = new Task("Test 4", "Description", 5);
const task5 = new Task("Test 5", "Description", 5);

const list = new LinkedList();

list.append(task1);
list.append(task2);
list.append(task3);
list.append(task4);
list.append(task5);

list.print();