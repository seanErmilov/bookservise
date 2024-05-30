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
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)

    elTodoList.innerHTML = strHtmls.join('')
}

function onAddTodo() {
    console.log('Adding...')
}

function onRemoveTodo(ev, todoId) {

    ev.stopPropagation()

    // Model
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)

    // DOM
    renderTodos()
}

function onToggleTodo(todoId) {
    
    // Model
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone

    // DOM
    renderTodos()
}