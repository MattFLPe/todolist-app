export { createNewTodo, updateTodoList, createNewProject }


function createNewTodo() {

    const todoList = [];

    let newTodoTitle = document.querySelector(".newTodoTitle").value;
    let newTodoDescription = document.querySelector(".newTodoDescription").value;
    let newTodoDueDate = document.querySelector(".newTodoDueDate").value;
    let newTodoPriority = document.querySelector(".newTodoPriority").value;


    if (newTodoTitle.trim() !== "") {
        // Create a new todo object
        let newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            description: newTodoDescription,
            dueDate: newTodoDueDate,
            priority: newTodoPriority,
            completed: false
        };

        todoList.push(newTodo);

        updateTodoList();

        document.querySelector(".newTodoTitle").value = "";
        document.querySelector(".newTodoDescription").value = "";
        document.querySelector(".newTodoDueDate").value = "";
        document.querySelector(".newTodoPriority").value = "low"
        
    } else {
            alert("Please enter a todo before adding.");
        }

}

function updateTodoList() {
    let todoListElement = document.getElementById("todoList");

    // Clear the existing list
    todoListElement.innerHTML = "";

    // Loop through the todoList array and create list items
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        let li = document.createElement("li");

        // Customize the display based on your todo object structure
        li.textContent = "[" + (todo.completed ? "x" : " ") + "] " + todo.title + " - " + 
        todo.description + " (Due Date: " + todo.dueDate + ")" +
        " - Priority: " + todo.priority;
        // You can add more functionality or styling here
        li.setAttribute("data-todo-id", todo.id);

        todoListElement.appendChild(li);
    };
};

function createNewProject() {
    const todoContainer = document.querySelector('.todoContainer')
    const projectList = [];

    
}

function todoComplete() {

}