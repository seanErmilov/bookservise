'use strict'

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
    const todos = getTodos()

    const strHtmls = todos.map(todo => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class=${todo.isDone ? "done" : ""}>${todo.txt}</span>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)

    elTodoList.innerHTML = strHtmls.join('')
}

function onAddTodo(ev) {
    ev.preventDefault()
    
    const elInput = document.querySelector('input')
    const txt = elInput.value
    
    // Model
    addTodo(txt)
    
    // DOM
    renderTodos()
    elInput.value = ''
}

function onRemoveTodo(ev, todoId) {

    ev.stopPropagation()

    // Model
    removeTodo(todoId)

    // DOM
    renderTodos()
}

function onToggleTodo(todoId) {
    
    // Model
    toggleTodo(todoId)

    // DOM
    renderTodos()
}