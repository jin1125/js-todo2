const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

const saveData = () => {
  const lists = document.querySelectorAll("li");
  let todos = [];
  lists.forEach((list) => {
    todos.push(list.textContent);
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const add = (todo) => {
  let todoText = input.value;

  if(todo){
    todoText = todo;
  }

  if (todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
    li.classList.add("list-group-item");
    ul.appendChild(li);
    input.value = "";
    saveData();
  }
};

if(todos){
  todos.forEach((todo)=>{
    add(todo)
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  add();
});




