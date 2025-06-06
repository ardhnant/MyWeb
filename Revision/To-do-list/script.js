const inputText = document.querySelector('#todo-content');
const inputDate = document.querySelector('#todo-date');
const addBtn = document.querySelector('#add-btn');
const chores = document.querySelector('#chores');

let html = `<div id="chore"><p id="chore-content">${inputText.value}</p><p id="chore-content">${inputDate.value}</p> <button id="delete-btn">Delete</button>`


addBtn.addEventListener('click', () => {
  if(inputText.value === '' || inputDate.value === '' ){
    console.log('please input some thing.');
  } else {
    document.querySelector('#chores').innerHTML += html;
    inputText.value = '';
  }
})