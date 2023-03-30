// Selectors
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Event Listeners
addBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

// Functions
function addTask(event) {
  event.preventDefault();
  const task = taskInput.value;
  if (task === "") {
    alert("Please enter a task.");
  } else {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    span.innerText = task;
    button.innerText = "Delete";
    li.appendChild(span);
    li.appendChild(button);
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(event) {
  const item = event.target;
  if (item.tagName === "BUTTON") {
    const li = item.parentNode;
    taskList.removeChild(li);
  }
}
