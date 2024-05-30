'use strict'

const gTodos = [
    { id: 't101', txt: 'Do This', isDone: false },
    { id: 't102', txt: 'Do That', isDone: true },
    { id: 't103', txt: 'Try This', isDone: false },
]

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')

    const strHtmls = gTodos.map(todo => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class=${todo.isDone ? "done" : ""}>${todo.txt}</span>
            <button onclick="onRemoveTodo('${todo.id}')">x</button>
        </li>`)


    elTodoList.innerHTML = strHtmls.join('')
}

function onAddTodo() {
    console.log('Adding...')
}

function onRemoveTodo(todoId) {
    console.log(todoId)
}

function onToggleTodo(todoId) {
    console.log(todoId)
}