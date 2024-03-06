Tarea5.js

class Person {
    constructor(name, arrivedTime){
        this.name = name;
        this.arrivedTime = arrivedTime;
    }
}

class Queue {
	constructor(){
		this.queue = [];
		}
		enqueue(element){
		this.queue.push(element);
		return this.queue;
		}
		
	dequeue(){
		return this.queue.shift();
		}
		
	peek() {
		return this.queue[0];
	}
	
	size() {
	return this.queue.length;
	}
	
	isEmpty(){
		return this.queue.length === 0;
		}
		
	print() {
		return this.queue;
	}
}
let entrar = prompt("Desea entrar al programa? (1 para si, 2 para no)");
const queue = new Queue;
while(entrar=="1"){
let decision = prompt("Digite 1 para agregar una persona o 2 para mostrar las personas en cola");
if (decision == 1) {
    let name = prompt("Digite el nombre de la persona");
    let arrivedTime = new Date();
    let objPerson = new Person (name, arrivedTime); 
    queue.enqueue(objPerson);
    console.log("Persona agregada");
} else if (decision == 2) {
    console.log(queue.print());
    
} else {
    console.log("Digite una opcion valida");
}
entrar = prompt("Desea seguir en el programa? (1 para si, 2 para no)");
}