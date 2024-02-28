/**
 * Stacks
 * 
 * It based in FIFO priniciple:
 * First
 * In
 * First
 * Out
 * 
 */

class Queue {

    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length
    }

    print() {
        console.log(this.queue);
    }

    isEmpty() {

        return this.queue.length === 0;
    }
}

class Person {
    constructor(name) {
        this.name = name;
        var currentdate = new Date()
        this.arrivedTime = `${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}`;
        
    }

    toString() {
        return `name=${this.name}\narrivedTime=${this.arrivedTime}`;
    }
}

const queue = new Queue();

const person1 = new Person("Andres");
const person2 = new Person("Felipe");
const person3 = new Person("Juan");
const person4 = new Person("Diego");
const person5 = new Person("David");


queue.enqueue(person1);
queue.enqueue(person2);
queue.enqueue(person3);
queue.enqueue(person4);
queue.enqueue(person5);

console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.size());
console.log(queue.print());
 
