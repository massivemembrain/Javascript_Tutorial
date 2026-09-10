const todoList = [{
  name: 'make dinner', 
  dueDate: '2022-09-02'
 }, {
  name: 'wash dishes',
  dueDate: '2026-09-02'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button
      js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  //querySelectorAll -> select all instances of class name,
  //rather than just the first
  //reminder: foreach loop give sus parameters for each
  //element and index in the array
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    });
}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    name, 
    //dueDate: dueDate
    dueDate
  });

  inputElement.value = '';
  renderTodoList();
}