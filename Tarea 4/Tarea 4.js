Tarea4.js

class Book {

    constructor(nombre, isbn, author, editorial){
        this.nombre = nombre;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack {
	constructor(){
		this.stack = [];
	}
	
push(element){
	this.stack.push(element);
	return this.stack;
	}
	
pop(){
	return this.stack.pop();
}

peek(){
	return this.stack[this.stack.length - 1];
}

size(){
	return this.stack.length;
	}
print(){
	console.log(this.stack);
	}
}

    let decision = prompt("Digite 1 para agregar un libro o 2 para mostrar los libros");
    const stack = new Stack;
    if (decision == 1) {
        let name = prompt("Digite el titulo del libro");
        let isbn = prompt("Digite el ISBN");
        let author = prompt("Digite el autor del libro");
        let editorial = prompt("Digite la editorial del libro");
        let objBook = new Book (name, isbn, author, editorial); 
        stack.push(objBook);
        console.log("Libro agregado");
    } else if (decision == 2) {
        stack.print(); // Llamamos al método print de la instancia de la clase TODOs
        
    } else {
        console.log("Digite una opcion valida");
    }