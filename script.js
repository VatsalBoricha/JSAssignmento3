
function createTodoItem(todoText) {
    const li = document.createElement("li");
    li.innerHTML = `
      <input type="checkbox">
      <span>${todoText}</span>
      <button>Delete</button>
    `;
  
    const deleteBtn = li.querySelector("button");
    deleteBtn.addEventListener("click", () => {
      const todoList = document.getElementById("toDoList");
      todoList.removeChild(li);
      playDingSound();
    });
  
    const checkbox = li.querySelector("input[type=checkbox]");
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed");
      if (checkbox.checked) {
        toDoList.removeChild(li);
        toDoList.appendChild(li);
      }
      playDingSound(); 
    });
  
    return li;
  }
  
  function addTodo() {
    const newTodoInput = document.getElementById("newItem");
    const todoText = newTodoInput.value.trim();
  
    if (todoText !== "") {
      const todoList = document.getElementById("toDoList");
      const newTodoItem = createTodoItem(todoText);
      todoList.appendChild(newTodoItem);
      newTodoInput.value = "";
      playDingSound(); 
    }
  }
  
  
  function playDingSound() {
    const audio = new Audio('dingSound.mp3');
    audio.play();
  }


  const addTodoBtn = document.getElementById("toDoButton");
  addTodoBtn.addEventListener("click", addTodo);
  
  const newTodoInput = document.getElementById("newItem");
  newTodoInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  });
  
   
  const todoList = document.getElementById("toDoList");
  todoList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const listItem = event.target.parentElement;
      listItem.remove();
      playDingSound();
    }
  });
  