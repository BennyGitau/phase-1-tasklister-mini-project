document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createNewList(document.querySelector('#new-task-description').value)
    form.reset()
  })
});


function createNewList(addOn){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteList)
  btn.textContent = 'Remove ';
  li.innerHTML= `${addOn} `
  li.append(btn);

  document.querySelector('#tasks').appendChild(li)

}
 function deleteList (e){
  e.target.parentNode.remove();
 }