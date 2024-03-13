
class Node {

    constructor(value) {
        this.value = value;
        this.children = [];
    }

    isLeaf() {

        return this.children.length === 0 ? true : false;
        
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(value, node = this.root) {

        if(!this.root.value) {
            return null;
        }

        if(this.root.value === value) {
            return this.root;
        } else {
            const children = node.children;

            const inChildren = children.find(item => item.value === value);

            if(inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item  => {
                    
                    if(hasChild) {
                        return ;
                    }

                    hasChild = this.search(value, item);

                });

                return hasChild;
            }
            

        }

    }

    insert(value, parent) {

        const newNode = new Node(value);

        if(!parent) {
            if(!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent);
            parentNode.children.push(newNode);
        }
    }

    preOrder(node = this.root) {

        if(!node) {
            return;
        }

        console.log(node.value, node.children);
        node.children.forEach(element=> {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root) {

        if(!node) {
            return;
        }

        node.children.forEach(element=> {
            this.preOrder(element);
        });

        
        console.log(node.value, node.children);
    }

    inOrder(node = this.root) {

        if(!node) {
            return;
        }

        if(node.children.length === 0) {
            console.log(node.value);
        } else {

            this.inOrder(node.children[0]);
            console.log(node.value);

            for(let i = 1; i < node.children.length; i ++) {
                this.inOrder(node.children[i])
            }
        }
    }
}


class Person {

    constructor(name, birthDate) {
        this.name = name; 
        this.birthDate = birthDate;
    }


}

const abuelaEnelia = new Person("Enelia", "13/03/1927");
const patricia = new Person("patricia", "13/03/1960");
const miryam = new Person("Miryam", "13/03/1955");
const jaime = new Person("Jaime", "17/12/1954");
const pacho = new Person("Pacho", "11/10/1956");
const andres = new Person("Andres", "30/08/1994");
const juan = new Person("Juan Diego", "31/03/2008");

const tree = new NaryTree();

tree.insert(abuelaEnelia, null);
tree.insert(patricia, abuelaEnelia);
tree.insert(miryam, abuelaEnelia);
tree.insert(jaime, abuelaEnelia);
tree.insert(andres, jaime);
tree.insert(juan, jaime);

console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());
