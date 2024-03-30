document.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createNewList(e.target)
  })
});


function createNewList(addOnList){
  let li = document.createElement('li')
  li.innerHTML= addOnList;
  document.querySelector('#tasks').appendChild(li)

}
