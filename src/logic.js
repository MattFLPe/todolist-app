export { createNewTodo, updateTodoList, addTodoProject }

const projectContainers = [];

function addTodoProject() {

     //const projectName = document.querySelector('.projectContainer')
     let projectTitle = document.querySelector(".projectTitle").value;
     document.querySelector(".projectTitle").value = "";

     let container = document.querySelector('.container')

     let projectContainer = document.createElement('div');
     projectContainer.classList.add('projectContainer');
    

     projectContainer.innerHTML = `<h3>${projectTitle}</h3>`;

     container.appendChild(projectContainer);
    
     projectContainers.push(projectContainer);

 
};




const todoList = [];

function createNewTodo() {

    let newTodoTitle = document.querySelector(".newTodoTitle").value;
    let newTodoDescription = document.querySelector(".newTodoDescription").value;
    let newTodoDueDate = document.querySelector(".newTodoDueDate").value;
    //let newTodoPriority = document.querySelector(".newTodoPriority").value;


    if (newTodoTitle.trim() !== "") {
        // Create a new todo object
        let newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            description: newTodoDescription,
            dueDate: newTodoDueDate,
           // priority: newTodoPriority,
            completed: false
        };

        todoList.push(newTodo)

        document.querySelector(".newTodoTitle").value = "";
        document.querySelector(".newTodoDescription").value = "";
        document.querySelector(".newTodoDueDate").value = "";
        //document.querySelector(".newTodoPriority").value = "low"
        
    } else {
            alert("Please enter a todo before adding.");
        }

}


function updateTodoList() {
    let todoListElement = document.getElementById("todoList");
    let todoProjContainer = document.querySelector('.projectContainer')

    // Clear the existing list
    //todoListElement.innerHTML = "";

    // Loop through the todoList array and create list items
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        let todoProjList = document.createElement("li");

        // Customize the display based on your todo object structure
        todoProjList.textContent = "[" + (todo.completed ? "x" : " ") + "] " + todo.title + " - " + 
        todo.description + " (Due Date: " + todo.dueDate + ")"
        // You can add more functionality or styling here
        todoProjList.setAttribute("data-todo-id", todo.id);

        
        todoProjContainer.appendChild(todoProjList);
    };
};


function todoComplete() {

}