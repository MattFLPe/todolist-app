import './style.css'
import { createNewTodo, addTodoProject } from './logic.js'


/*
function buttonAdd() {
    const buttonAddTodo = document.querySelector(".buttonAddTodo")
    buttonAddTodo.addEventListener('click', () => {
        createNewTodo();
    })
}
buttonAdd();
*/

function buttonAddProject() {

const buttonAddProject = document.querySelector(".buttonAddProject")
    buttonAddProject.addEventListener('click', () => {
        addTodoProject();
    });
}
buttonAddProject()


