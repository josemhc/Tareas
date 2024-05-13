Tarea7.js

class Person {
    constructor(){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class City {
    constructor(){
        this.ciudad = ciudad;
    }
}
class graph {
	constructor () {
	this.nodes = [];
	this.adjList = {}
	}
	
addNode( node ) {
	this.nodes.push( node )
	this.adjList[ node ] = []
}

addEdge( node1, node2 ) {
	this,adjList[node1].push( node2 )
	this,adjList[node2].push( node1 )
	}
	
printGraph() {
console.log( this.adjList);
}

SearchNode (value) {
if (!this.nodes.lenght){
return;
}
return this.nodes.find( item => item === value);
}

printAdjacency( value ) {
if (this.searchNode( value ) ) {
	console.log(this.adjList[ value ] )
}else {
return;

}
}
}

let decision = prompt("Digite 1 para agregar una persona, 2 para agregar una ciudad, 3 para referenciar una persona a una ciudad o 4 para mostrar la lista de personas que viven en una ciudad especifica");
    let grafo = new graph;

    switch (decision) {
        case 1:
            let nombre = prompt("Digite el nombre de la persona");
            let edad = prompt("Digite la edad");
            let objPerson = new Person (nombre, edad); 
            grafo.addNode(objPerson);
            console.log("Persona agregada");
            agregar = prompt("desea agregar una ciudad?");
            break;
        case 2:
            let ciudad = prompt("Digite el nombre de la ciudad");
            let objCity = new City(ciudad);
            grafo.addNode(objCity);
            console.log("Persona agregada");
            break;
        case 3:
            let valorPersona = prompt("Digite el nombre de la persona")
            let valorCiudad = prompt("Digite en que ciudad vive la persona")

        case 4:
            let City = prompt("Digite el nombre de la ciudad")
            graph.printAdjacency(City);
            break;
        default:
            console.log("Digite una opcion valida");
    }