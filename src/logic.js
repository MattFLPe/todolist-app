export { createNewTodo, updateTodoList }

const todoList = [];

function createNewTodo() {
    let newTodoTitle = document.querySelector(".newTodo").value;

    if (newTodoText.trim() !== "") {
        // Create a new todo object
        let newTodo = {
            id: Date.now(),
            title: newTodoTitle,
            description: newTodoDescription,
            dueDate: newTodoDueDate,
            completed: false
        };

        todoList.push(newTodo);

        updateTodoList();

        document.querySelector(".newTodo").value = "";
        document.querySelector(".newTodoTitle").value = "";
        document.querySelector(".newTodoDescription").value = "";
        document.querySelector(".newTodoDueDate").value = "";
        
    } else {
            alert("Please enter a todo before adding.");
        }

}

function updateTodoList() {
    var todoListElement = document.getElementById("todoList");

    // Clear the existing list
    todoListElement.innerHTML = "";

    // Loop through the todoList array and create list items
    for (var i = 0; i < todoList.length; i++) {
        var todo = todoList[i];
        var li = document.createElement("li");

        // Customize the display based on your todo object structure
        li.textContent = "[" + (todo.completed ? "x" : " ") + "] " + todo.text +
        " - " + todo.description +
        " (Due Date: " + todo.dueDate + ")";
        // You can add more functionality or styling here
        li.setAttribute("data-todo-id", todo.id);

        todoListElement.appendChild(li);
    }
}