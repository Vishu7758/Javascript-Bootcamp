const todos = getSavedTodos()

//Filterning Todos
document.querySelector('input#filter-todo').addEventListener('input', function (element) {
    filters.searchText = element.target.value;
    renderTodos(todos, filters)
})

//Adding Todo
document.querySelector('#todo-form').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.todoText.value,
        completed:false  
    })
    e.target.elements.todoText.value = ''
    saveTodos(todos)
    renderTodos(todos, filters)
})


renderTodos(todos, filters)

document.querySelector('input#filter-todo').addEventListener('input', function (element) {
    filters.searchText = element.target.value;
    renderTodos(todos, filters)
})



