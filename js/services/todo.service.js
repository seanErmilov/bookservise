'use strict'

const gTodos = [
    { id: 't101', txt: 'Do This', isDone: false },
    { id: 't102', txt: 'Do That', isDone: true },
    { id: 't103', txt: 'Try This', isDone: false },
]

function getTodos(filterBy) {           // List
    if(!filterBy) return gTodos

    const isDone = (filterBy === 'done')
    return gTodos.filter(todo => todo.isDone === isDone)
}

function getTodoById(todoId) {  // Read
    const todo = gTodos.find(todo => todo.id === todoId)
    return todo
}

function addTodo(txt) {         // Create

    const todo = {
        id: `t${Date.now() % 1000}`,
        txt,
        isDone: false,
    }
    gTodos.unshift(todo)
}

function removeTodo(todoId) {   // Delete
    const idx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(idx, 1)
}

function toggleTodo(todoId) {   // Update
    const todo = gTodos.find(todo => todo.id === todoId)
    todo.isDone = !todo.isDone
}
