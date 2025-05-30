const todoList = [];


function renderOnPage(){
  let toDoListHtml = '';
  for ( i = 0; i < todoList.length; i++){
    let toDo = todoList[i];
    let html = `<p>${toDo}</p>`; 
    toDoListHtml += html
  }
  console.log(todoList);
  document.querySelector('.todo-list').innerHTML = toDoListHtml;
  localStorage
}

function addTodoList(){
  let inputElement = document.querySelector('#todo-content');
  const input = inputElement.value;

  todoList.push(input);
  console.log(todoList);

  inputElement.value = '';
  renderOnPage()
}