import './style.css'
import { createNewTodo, updateTodoList } from './logic.js'


function buttonAdd() {
    const buttonAddTodo = document.querySelector(".buttonAddTodo")
    buttonAddTodo.addEventListener('click', () => {
        createNewTodo();
        updateTodoList();
    })
}
buttonAdd();


