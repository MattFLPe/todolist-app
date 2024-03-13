import './style.css'
import { createNewTodo, updateTodoList, createNewProject, updateProjectList } from './logic.js'
/*
const todoContainer = document.querySelector('.todoContainer')
function defaultProject() {
    const todoList = document.querySelector('.todoList')
    //todoList.style.display = "block";
}
defaultProject();
*/

function buttonAdd() {
    const buttonAddTodo = document.querySelector(".buttonAddTodo")
    buttonAddTodo.addEventListener('click', () => {
        createNewTodo();
        updateTodoList();
    })
}
buttonAdd();

function buttonAddProject() {

const buttonAddProject = document.querySelector(".buttonAddProject")
    buttonAddProject.addEventListener('click', () => {
        createNewProject();
        updateProjectList();
    });
}
buttonAddProject()
