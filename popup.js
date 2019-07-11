const todoList = {
    todos: [],
    addTodo: function(todoText){
    //new code i added
    
      this.todos.push({
        todoText: todoText,
        completed: false
      }); 
    },
    // changeTodo: function(position, todoText) {
    //   this.todos[position].todoText = todoText;
      
    // },
    // deleteTodo: function(position) {
    //   this.todos.splice(position, 1);
      
    // },
    // toggleCompleted: function(position) {
    //   var todo = this.todos[position];
    //   todo.completed = !todo.completed;
    // },  
  };
  

  function addTodo() {
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  }

  const handlers = { 
    addTodo: function() {
      let addTodoTextInput = document.getElementById('addTodoTextInput');
      todoList.addTodo(addTodoTextInput.value);
      addTodoTextInput.value = '';
      view.displayTodos();
    },
    // changeTodo: function() {
    //   let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    //   let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    //   todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    //   changeTodoPositionInput.value = '';
    //   changeTodoTextInput.value = '';
    //   view.displayTodos();
    // },
    // deleteTodo: function() {
    //   let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    //   todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    //   deleteTodoPositionInput.value = '';
    //   view.displayTodos();
    // },
    // toggleCompleted: function() {
    //   let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    //   todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    //   toggleCompletedPositionInput.value = '';
    //   view.displayTodos();
    // },
  };
//   let addTodoTextInput = document.getElementById('addTodoTextInput');
  const ul = document.querySelector('ul');
  let addButton = document.getElementById('add-button');
  const button = document.querySelector('#delete-button');
  const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
  localStorage.setItem('items', JSON.stringify(itemsArray));
  const data = JSON.parse(localStorage.getItem('items'));

const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li);

}

  addTodoTextInput.addEventListener('keypress', function(key){
      if(key.keyCode === 13){
        // addTodo();
      
      key.preventDefault();
      itemsArray.push(addTodoTextInput.value);
      localStorage.setItem('items', JSON.stringify(itemsArray));
      liMaker(addTodoTextInput.value);
      addTodoTextInput.value = ''
      }
  });



  
//   const view = {
//     displayTodos: function() {
//       var todosUl = document.querySelector('ul');
//       todosUl.innerHTML = '';
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement('li');
//       var todo = todoList.todos[i];
//       var todoTextWithCompletion = '';
      
//         if (todo.completed === true) { 
//           todoTextWithCompletion = '(x)' + todo.todoText;
//         } else {
//           todoTextWithCompletion = '( )' + todo.todoText;
//         }
        
//         todoLi.textContent = todoTextWithCompletion;
//         todosUl.appendChild(todoLi);
//       }
//     }
//   };

 data.forEach(item => {
     liMaker(item)
 })

 button.addEventListener('click', function() {
     localStorage.clear()
     while(ul.firstChild) {
         ul.removeChild(ul.firstChild)
     }
 })
 


