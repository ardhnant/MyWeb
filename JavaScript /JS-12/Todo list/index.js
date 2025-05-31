const todoList = [];


function renderOnPage(){
  let toDoListHtml = '';
  for ( i = 0; i < todoList.length; i++){
    let toDo = todoList[i];
    let html = `
    <p>
      ${toDo}
      <button onclick="
        todoList.splice(${i}, 1);
        renderOnPage();
      ">
       Delete
      </button>
    </p>`; 
    toDoListHtml += html
  }
  console.log(toDoListHtml);
  document.querySelector('.todo-list').innerHTML = toDoListHtml;
}

function addTodoList(){
  let inputElement = document.querySelector('#todo-content');
  const input = inputElement.value;

  todoList.push(input);
  console.log(todoList);

  inputElement.value = '';
  renderOnPage()
}