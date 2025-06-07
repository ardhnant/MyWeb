const inputText = document.querySelector('#todo-content');
const inputDate = document.querySelector('#todo-date');
const addBtn = document.querySelector('#add-btn');
const chores = document.querySelector('#chores');

addBtn.addEventListener('click', () => {
  if(inputText.value === '' || inputDate.value === '' ){
    console.log('please input some thing.');
  } else {

    let html = `<div class="chore"><p id="chore-content">${inputText.value}</p><p id="chore-content">${inputDate.value}</p> <button class="delete-btn">Delete</button>`;

    document.querySelector('#chores').innerHTML += html;
    inputText.value = '';
    inputDate.value = '';
  }
});

chores.addEventListener('click', (event) => {
  if(event.target.classList.contains('delete-btn')){
    event.target.parentElement.remove();
  }
});

// document.querySelectorAll('#delete-btn').forEach((deleteBtn, i) => {
//   deleteBtn.addEventListener('click', () => {
//     chores.style.display = 'none';
//   });
// });