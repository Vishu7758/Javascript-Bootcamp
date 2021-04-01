//code to select all p tags and remove tag containing 'the' word inside it
// const ps = document.querySelectorAll('p')
// ps.forEach(function (paragraph) {
//     if (paragraph.textContent.includes('the') === true) {
//         paragraph.remove()
//     }
// })


let todos = []

let count = 0
todos.forEach(function (todo) {
    if (!todo.completed) {
        count++
    }
});

//Check for stored data
const todoJSON = localStorage.getItem('todoList')
if (todoJSON != null) {
    todos = JSON.parse(todoJSON)
}

//To clear localStorage use following
// localStorage.clear()

//Another way for above
// const incompleteTodos = todos.filter(function (todo) {
//     return !todo.completed
// })

// const summary = document.createElement('h1')
// summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
// document.querySelector('body').appendChild(summary)


// todos.forEach(function (todo) {
//     const newParagraph = document.createElement('p')
//     newParagraph.textContent = todo.text
//     document.querySelector('body').appendChild(newParagraph)
// });
document.querySelector('#add-todo').addEventListener('click', function (element) {
    const todoText = document.querySelector('input#new-todo-add').value
    document.querySelector('input#new-todo-add').value = ''
    const todoCompleted = false
    todos.push({
        text: todoText,
        completed : todoCompleted
    })
    localStorage.setItem('todoList', JSON.stringify(todos))
    renderChecked(todos, filters)
})

// //listen for todo text change
// document.querySelector('input#new-todo').addEventListener('input', function (element) {
//     console.log(element.target.value)
// })

const filters = {
    searchText:'',
    hideCompleted:false
}

const renderTodos = function (todos, filters) {

    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = ''

    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todo-list').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

document.querySelector('input#filter-todo').addEventListener('input', function (element) {
    filters.searchText = element.target.value;
    renderTodos(todos, filters)
})

// document.querySelector('#todo-form').addEventListener('submit', function (e) {
//     e.preventDefault()
//     todos.push({
//         text: e.target.elements.todoText.value,
//         completed:false  
//     })
//     e.target.elements.todoText.value = ''
//     renderTodos(todos, filters)
// })
const renderChecked = function (todos, filters) {

//     let filteredTodos = todos.filter(function (todo) {
//         return todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
//     })
//     if (filters.hideCompleted) {
//         filteredTodos = filteredTodos.filter(function (todo) {
//             return !todo.completed;
//         })
//     }
    
    //Another solution for aboce if is
    // filteredTodos = filteredTodos.filter(function (todo) {
    //     return !filters.hideCompleted || !todo.completed;
    // })

    //Best Solution
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLocaleLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todo-list').innerHTML = ''

    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompleteTodos.length} todo(s) left`
    document.querySelector('#todo-list').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text.length > 0 ? todo.text : 'Unnamed Todo'
        document.querySelector('#todo-list').appendChild(todoEl)
    })
    
}

renderTodos(todos, filters)

document.querySelector('input#filter-todo').addEventListener('input', function (element) {
    filters.searchText = element.target.value;
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderChecked(todos, filters)
})



