//Return todo list from locatstorage else empty list if not found
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todoList')
    console.log(todoJSON);
    if (todoJSON != null) {
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

const filters = {
    searchText:'',
    hideCompleted:false
}

const removeTodo = function (todoId) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === todoId
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Save todo list on localstorage
const saveTodos = function (todos) {
    localStorage.setItem('todoList', JSON.stringify(todos))
}

//Toggle todo completed property
const toggleTodo = function (todoId) {
    // todo.completed = !todo.completed <-- my solution
    const todo = todos.find(function (todo) {
        return todo.id === todoId
    })

    if (todo != undefined) {
        todo.completed = !todo.completed
    }
}

//Create DOM elemt for single todo
const generateTodoDOM = function (todo) {
    let todoEl = document.createElement('div')
    let textEl = document.createElement('span')
    
    //setup todo checkbox
    let checkboxEl = document.createElement('input')
    checkboxEl.setAttribute('type', 'checkbox')
    checkboxEl.checked = todo.completed
    todoEl.appendChild(checkboxEl)
    checkboxEl.addEventListener('change', function () {
        toggleTodo(todo)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    
    //Setup text element
    textEl.textContent = todo.text.length > 0 ? todo.text : 'Unnamed Todo'
    todoEl.appendChild(textEl)

    //Setup removebutton
    let removebutton = document.createElement('button')
    removebutton.textContent = 'x'
    todoEl.appendChild(removebutton)
    removebutton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return todoEl
}

//Rendering Todos
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = ''

    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = generateTodoDOM(todo)
        document.querySelector('#todo-list').appendChild(todoEl)
        // else document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
    })
    
}

//generate summary DOM
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    return summary
}