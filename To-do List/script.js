document.addEventListener('DOMContentLoaded', loadTodos);

document.getElementById('add-todo').addEventListener('click', function () {
  const todoText = document.getElementById('todo-input').value;
  if (todoText !== '') {
    saveToLocalStorage(todoText);
    document.getElementById('todo-input').value = '';  // Clear input
  }
});

function addTodo(todoText, isCompleted = false) {
  const li = document.createElement('li');
  
  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isCompleted;
  checkbox.addEventListener('change', () => toggleComplete(li, todoText));

  // Create span for todo text
  const span = document.createElement('span');
  span.textContent = todoText;
  if (isCompleted) {
    span.classList.add('completed');  // Apply strikethrough if completed
  }

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = () => {
    removeFromLocalStorage(todoText);
    li.remove();
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  document.getElementById('todo-list').appendChild(li);
}

function toggleComplete(li, todoText) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach(todo => {
    if (todo.text === todoText) {
      todo.isCompleted = !todo.isCompleted;
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  li.querySelector('span').classList.toggle('completed');
}

function saveToLocalStorage(todoText) {
  // Reload the current state of todos from localStorage
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Check if the todo already exists to avoid duplicates
  const isDuplicate = todos.some(todo => todo.text === todoText);

  if (!isDuplicate) {
    todos.push({ text: todoText, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(todos));
    // Add the new todo to the UI
    addTodo(todoText);
  } else {
    console.log('Duplicate todo, not adding.');
  }
}

function removeFromLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo.text !== todoText);
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const todos = localStorage.getItem('todos');
  
  if (todos) {
    const parsedTodos = JSON.parse(todos); 
    parsedTodos.forEach(todo => addTodo(todo.text, todo.isCompleted));
  }
}
