export { createNewTodo, addTodoProject }


// Function to add a new project container
function addTodoProject() {
    const projectTitleInput = document.querySelector(".projectTitle");
    const projectTitle = projectTitleInput.value.trim();

    if (!projectTitle) {
        alert("Please enter a project title before adding.");
        return;
    }

    projectTitleInput.value = "";

    const container = document.querySelector('.container');
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectContainer.innerHTML = `<h3>${projectTitle}</h3>`;
    container.appendChild(projectContainer);

    let buttonAdd = document.createElement('button')
    buttonAdd.textContent = "Add Todo"
    buttonAdd.addEventListener('click', () => {
        createNewTodo(projectContainer);
    })
    createNewTodo(projectContainer);

    projectContainer.appendChild(buttonAdd)

    // Add event listener to the project container to handle adding todos
    //projectContainer.addEventListener('click', createNewTodo);
}

// Function to create a new todo
function createNewTodo(projectContainer) {
    let newTodoTitle = document.querySelector(".newTodoTitle").value;
    let newTodoDescription = document.querySelector(".newTodoDescription").value;
    let newTodoDueDate = document.querySelector(".newTodoDueDate").value;
    

    const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        description: newTodoDescription,
        dueDate: newTodoDueDate,
        completed: false
    };

    const todoElement = document.createElement("div");
    todoElement.classList.add("todoStyle");
    todoElement.innerHTML = `
        <h3>${newTodo.title}</h3>
        <p>${newTodo.description}</p>
        <p>Due Date: ${newTodo.dueDate}</p>
        <button class="toggle-completion">Toggle Completion</button>`;
    todoElement.setAttribute("data-todo-id", newTodo.id);

   

    const toggleButton = todoElement.querySelector('.toggle-completion');
    toggleButton.addEventListener('click', function() {
        markAsCompleted(newTodo.id);
    });

    // Add event listener to the todo item to handle completion
    //todoListElement.addEventListener('click', toggleTodoCompletion);
    projectContainer.appendChild(todoElement);
}
/*
// Function to remove a todo item
function removeTodo(todoId) {
    // Remove the todo from the todoList array
    const index = todoList.findIndex(todo => todo.id.toString() === todoId);
    if (index !== -1) {
        todoList.splice(index, 1);
    }

    // Remove the todo element from the DOM
    const todoElement = document.querySelector(`[data-todo-id="${todoId}"]`);
    if (todoElement) {
        todoElement.remove();
    }
}
*/

// Function to mark a todo as completed
function markAsCompleted(todoId) {
    const todo = todoList.find(todo => todo.id.toString() === todoId);
    if (!todo) return;

    todo.completed = true;
    const todoElement = document.querySelector(`[data-todo-id="${todoId}"]`);
    if (todoElement) {
        todoElement.classList.add('completed');
    }
}

// Array to store todos
const todoList = [];
/*
// Call addTodoProject when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    addTodoProject();
});
*/