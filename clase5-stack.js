/**
 * Stacks
 * 
 * It based in LIFO priniciple:
 * Last 
 * In
 * First
 * Out
 * 
 */

class Stack {

    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
        return this.stack;
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length-1]
    }

    size() {
        return this.stack.length
    }

    print() {
        console.log(this.stack);
    }
}

class Book {
    constructor(ISBN, name, author, editorial) {
        this.ISBN = ISBN;
        this.name = name;
        this.author = author;
        this.editorial = editorial;
    }

    toString() {
        return `ISBN=${this.ISBN}\nname=${this.name}\nauthor=${this.author}\neditorial=${this.editorial}`;
    }
}

const stack = new Stack();

const book1 = new Book("123450","Cien años de soledad","GGM","Terranova");
const book2= new Book("123451","MOMO","GGM","Terranova");
const book3 = new Book("123452","Por todos los Dioses","GGM","Terranova");
const book4 = new Book("123453","La odisea","GGM","Terranova");
const book5 = new Book("123454","Maria","GGM","Terranova");

stack.push(book1);
stack.push(book2);
stack.push(book3);
stack.push(book4);
stack.push(book5);

console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
console.log(stack.print());
 
