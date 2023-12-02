function addTodo() {
    const newTodoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    if (newTodoInput.value.trim() !== '') {
      const li = document.createElement('li');
      li.classList.add('todoItem');

      const inputField = document.createElement('input');
      inputField.type = 'text';
      inputField.value = newTodoInput.value;
      inputField.disabled = true;

      const editButton = document.createElement('button');
      editButton.classList.add('editBtn');
      editButton.textContent = 'Edit';
      editButton.onclick = function () {
        editTodoItem(inputField, editButton);
      };

      const saveButton = document.createElement('button');
      saveButton.classList.add('saveBtn');
      saveButton.textContent = 'Save';
      saveButton.onclick = function () {
        saveTodoItem(inputField, saveButton);
      };

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('deleteBtn');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function () {
        deleteSingleTodoItem(li);
      };

      li.appendChild(inputField);
      li.appendChild(editButton);
      li.appendChild(saveButton);
      li.appendChild(deleteButton);

      todoList.appendChild(li);
      newTodoInput.value = ''; 
    }
  }

  function editTodoItem(inputField, editButton) {
    inputField.disabled = false;
    editButton.style.display = 'none';
  }

  function saveTodoItem(inputField, saveButton) {
    inputField.disabled = true;
    saveButton.style.display = 'none';
  }

  function deleteSingleTodoItem(todoItem) {
    const todoList = document.getElementById('todoList');
    todoList.removeChild(todoItem);
  }

  function deleteAllTodo()  {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; 
  }