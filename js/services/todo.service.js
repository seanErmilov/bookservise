'use strict'

var gTodos
_createTodos()

function getTodos(filterBy) {           // List
    if(!filterBy) return gTodos

    const isDone = (filterBy === 'done')
    return gTodos.filter(todo => todo.isDone === isDone)
}

function getTotalTodoCount() {
    return gTodos.length
}

function getActiveTodoCount() {
    return gTodos.filter(todo => !todo.isDone).length
}

function getCompletedTodoCount() {
    return getTotalTodoCount() - getActiveTodoCount()
}

function getTodoById(todoId) {  // Read
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function addTodo(txt) {         // Create
    const todo = _createTodo(txt)
    gTodos.unshift(todo)

    _saveTodos()
}

function removeTodo(todoId) {   // Delete
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)

    _saveTodos()
}

function toggleTodo(todoId) {   // Update
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone

    _saveTodos()
}

function _createTodos() {
    gTodos = loadFromStorage('todos')
    if(gTodos && gTodos.length !== 0) return

    // Never load app without ant data
    // Create demo data if there is no data in storage
    
    gTodos = [
        _createTodo('Do This'),
        _createTodo('Do That'),
        _createTodo('Try This'),
    ]
    _saveTodos()
}

function _createTodo(txt) {
    return {
        id: makeId(),
        txt,
        isDone: false,
    }
}

function _saveTodos() {
    saveToStorage('todos', gTodos)
}