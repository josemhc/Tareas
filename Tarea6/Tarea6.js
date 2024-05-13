Tarea6.js

class Person {

    constructor(fullName, birthday){
        this.fullName = fullName;
        this.birthday = birthday;
    }

}

class Node {
	constructor(value){
	this.value = value;
	this.left = null;
	this.right = null;
	}
	
	isLeaf(){
	if (this.left == null && this.right == null) {
	return true;
		}else{
			return false;
		}
    }
}

class binaryTree {
	constructor() {
	this.root = null
	}


	Insert(value){
		const newNode = new Node(value, null, null);
		
		if (!this.root) {
			this.root = newNode;
			}else{
				let current = this.root;
				let isFound = false;
				
				while (!isFound) {
					if (current.value === value){
						isFound = true;
						return null
					}
					if (!current.value > value) {
						if(!current.left){
						current.left = newNode
						isFound = true;
						return this;
						} else {
						if(!current.right){
						current.right = newNode
						isFound = true;
						return this;
						}else {
						current = current.right;
						
						}
					}
				}
			}
		}
	}

	preOrder(node = this.root){
		if (!node) {
			return;
		}
		console.log(node.value);
		this.preOrder(node.left);
		this.preOrder(node.right);
	}
	postOrder (node = this.root) {
	if (!node) {
	return;
	}
	
	this.postOrder(node.left);
	this.postOrder(node.right);
	console.log(node.value);
	}
	
	inOrder(node = this.root) {
		if(!node) {
		return;
		}
		
		this.inOrder(node.left);
		console.log(node.value);
		this.inOrder(node.right);
	}


}

	let ArbolB = new binaryTree();
    let entrar = prompt("Desea entrar al programa? (1 para si, 2 para no)");
    while(entrar=="1"){
    let decision = prompt("Digite 1 para agregar una persona o 2 para mostrar las personas en el arbol");
    if (decision == 1) {
        let fullName = prompt("Digite el nombre completo de la persona");
        let birthday = prompt("Digite el cumpleaños de la persona");
        let objPerson = new Person (fullName, birthday); 
        ArbolB.Insert(objPerson);
        console.log("Persona agregada");
    } else if (decision == 2) {
        let orden = prompt("Digite como quiere que se muestre el arbol (1 - PreOrder, 2 - PostOrder, 3 - InOrder")
        switch(orden){
            case 1:
            ArbolB.preOrder();
            break;
            case 2:
            ArbolB.postOrder();
            break;
            case 3:
            ArbolB.inOrder();
            break;
            default:
            console.log("Digite una opcion valida");
            break;
        }
    }else{
		console.log("Digite una opcion valida");
	}
    entrar = prompt("Desea seguir en el programa? (1 para si, 2 para no)");
}
