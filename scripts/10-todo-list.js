let todoList = [];

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    todoList.push(inputElement.value);
    console.log(todoList);

    inputElement.value = '';
}