let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dateInputElement.value;
  // Time skip, javascript knows what you are doing when the var name
  // the same as the object property
  // Shorthand property
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name, 
    dueDate
  });

  inputElement.value = '';

  saveToStorage();

  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}