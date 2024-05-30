'use strict'

var gFilterBy = ''

function onInit() {
    renderTodos()
}

function renderTodos() {
    const elTodoList = document.querySelector('.todo-list')
    const todos = getTodos(gFilterBy)

    const strHtmls = todos.map(todo => `
        <li onclick="onToggleTodo('${todo.id}')">
            <span class=${todo.isDone ? "done" : ""}>${todo.txt}</span>
            <button onclick="onShowDetails('${todo.id}')">Details</button>
            <button onclick="onRemoveTodo(event, '${todo.id}')">x</button>
        </li>`)

    elTodoList.innerHTML = strHtmls.join('')
    renderStats()
}

function renderStats() {
    const elFooter = document.querySelector('footer')

    const elTotalCount = elFooter.querySelector('.total')
    const elActiveCount = elFooter.querySelector('.active')
    const elCompletedCount = elFooter.querySelector('.completed')

    elTotalCount.innerText = getTotalTodoCount()
    elActiveCount.innerText = getActiveTodoCount()
    elCompletedCount.innerText = getCompletedTodoCount()
}

function onFilterBy(elSelect) {
    gFilterBy = elSelect.value
    renderTodos()
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

function onShowDetails(todoId) {
    const elModal = document.querySelector('.modal')
    const elData = elModal.querySelector('pre')

    // Model
    const todo = getTodoById(todoId)

    // DOM
    elData.innerText = JSON.stringify(todo, null, 2)
    elModal.showModal()
}

// function onHideModal() {
//     const elModal = document.querySelector('.modal')
//     elModal.close()
// }