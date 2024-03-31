export { createNewTodo, addTodoProject }

//const removeTodo = removeTodo(todoId)
// Array to store todos
const todoList = [];


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
    projectContainer.innerHTML = `<h2>${projectTitle}</h2>
    <div class="todoStyle">
            <input type="text" class="newTodoTitle" placeholder="Add a new todo">
            <input type="text" class="newTodoDescription" placeholder="Todo Description">
            <input type="date" class="newTodoDueDate">
    </div>`;
    container.appendChild(projectContainer);

    let buttonAdd = document.createElement('button')
    buttonAdd.textContent = "Add Todo"
    buttonAdd.addEventListener('click', () => {
        createNewTodo(projectContainer);
    })
    /*
    let buttonRemove = document.createElement('button')
    buttonRemove.textContent = "Remove Todo"
    buttonRemove.addEventListener('click', () => {
    })
    */
    //createNewTodo(projectContainer);

    projectContainer.appendChild(buttonAdd)
   // projectContainer.appendChild(buttonRemove)
    

    
}

function createNewTodo(projectContainer) {
    let newTodoTitleInput = projectContainer.querySelector(".newTodoTitle");
    let newTodoDescriptionInput = projectContainer.querySelector(".newTodoDescription");
    let newTodoDueDateInput = projectContainer.querySelector(".newTodoDueDate");
   
    let newTodoTitle = newTodoTitleInput.value;
    let newTodoDescription = newTodoDescriptionInput.value;
    let newTodoDueDate = newTodoDueDateInput.value;

    

    const newTodo = {
        id: Date.now(),
        title: newTodoTitle,
        description: newTodoDescription,
        dueDate: newTodoDueDate,
        completed: false
    };

    todoList.push(newTodo);

    const todoElement = document.createElement("div");
    todoElement.classList.add("todoStyle");
    todoElement.innerHTML = `
        <h4>${newTodo.title}</h4>
        <p>${newTodo.description}</p>
        <p>Due Date: ${newTodo.dueDate}</p>
        <input type="checkbox" id="completed" name="completed" value="${newTodo.completed}">`;
    todoElement.setAttribute("data-todo-id", newTodo.id);

    newTodoTitle = document.querySelector(".newTodoTitle").value = "";
    newTodoDescription = document.querySelector(".newTodoDescription").value = "";
    newTodoDueDate = document.querySelector(".newTodoDueDate").value = "";

   
    projectContainer.appendChild(todoElement);
    
    todoElement.addEventListener('click', () => {
        removeTodo(newTodo.id); // Pass newTodo.id as an argument
    })
    
    
}
/*
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

/*
document.addEventListener("DOMContentLoaded", function () {
    addTodoProject();
});
*/