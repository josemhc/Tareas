Tarea3.js

class Node {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }

}

class TODOs{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(node){
    const newNode = new Node(node)

        if(!this.head){
            this.head = newNode;
        }else{
            this.tail.next = NewNode;
        }
        }


    print(){
        let node = this.head;
        while (node != null) {
            console.log( `Titulo ${node.value.title} Descripcion ${node.value.description} | Next: ${node.next?.value || null} ` )
            node = node.next;
        }
    }


}
    
 
    let todoList = new TODOs(); 

    let decision = prompt("Digite 1 para agregar una tarea o 2 para mostrar las tareas");
    
    if (decision == 1) {
        let title = prompt("Digite el titulo de la tarea");
        let description = prompt("Digite la descripcion de la tarea");
        let objTask = { title, description }; // Creamos un nuevo nodo con el objeto de la tarea
        todoList.append(objTask); // Llamamos al método append de la instancia de la clase TODOs
        console.log("Tarea agregada");
        todoList.print();
    } else if (decision == 2) {
        todoList.print(); // Llamamos al método print de la instancia de la clase TODOs
        
    } else {
        console.log("Digite una opcion valida");
    }



