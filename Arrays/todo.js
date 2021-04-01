// const todo = ['walk the dog', 'study for exams', 'read a book']

// // todo.push('hello') you can add new elements in const array but you can't reassign new array to it
// // e.g ->  todo = [1,2,3] is not allowed for const array


// // for (let index = 0; index < todo.length; index++) {
// //     console.log(`Todo: ${todo[index]}`);
// // }

// //Task2
// //Delete 3rd item
// todo.splice(2, 1)

// //Add new item onto end
// todo.push('last item')

// //remove first item from list
// todo.shift()

// console.log(`You have ${todo.length} todos`)
// todo.forEach(function (item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// console.log('\nUsing for loop');
// for (let index = 0; index < todo.length; index++) {
//     console.log(`${index + 1}. ${todo[index]}`);
// }

todos = [{
    text: 'go for walk',
    completed: true
}, {
    text: 'order cat food',
    completed: false
}, {
    text: 'shop groceries',
    completed: false
}, {
    text: 'go for haircut',
    completed: true
}]

const deleteTodo = function (todos, textValue) {
    idx = todos.findIndex(function (todo) {
         return todo.text.toLowerCase() === textValue.toLowerCase();
    })
    if (idx > -1) {
        todos.splice(idx, 1);
    }
}

// console.log(todos);
// deleteTodo(todos, 'Order CAT food')
// console.log(todos);

const getThingsTodo = function (todos) {
    return todos.filter(function (todo, index) {
        return todo.completed === false; // or use !todo.completed both works
    })
}

// console.log(getThingsTodo(todos));

const sortTodo = function (todos) {
    todos.sort(function (todo1, todo2) {
        if (todo1.completed == false && todo2.completed == true) {
            return -1;
        } else if (todo1.completed == true && todo2.completed == false) {
            return 1;
        } else {
            return 0;
        }
    })
}

sortTodo(todos)
console.log(todos);