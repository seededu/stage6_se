// DOM Elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Fetch tasks from the server and render them
async function fetchTasks() {
  try {
    const response = await fetch("/api/tasks");
    if (!response.ok) {
      throw new Error("Failed to fetch tasks");
    }
    const tasks = await response.json();
    renderTasks(tasks);
  } catch (error) {
    console.error(error);
  }
}

// Render tasks onto the page
function renderTasks(tasks) {
  todoList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = task.text;
    li.appendChild(span);

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "X";
    delBtn.addEventListener("click", () => {
      deleteTask(task.id);
    });

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// Create a new task (send to server)
async function createTask() {
  const newTaskText = taskInput.value.trim();
  if (!newTaskText) return;

  try {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newTaskText }),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    const createdTask = await response.json();
    // Re-fetch tasks to update the list
    await fetchTasks();
    // Clear input
    taskInput.value = "";
  } catch (error) {
    console.error(error);
  }
}

// Delete a task by ID
async function deleteTask(taskId) {
  try {
    const response = await fetch(`/api/tasks/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete task");
    }
    await fetchTasks(); // Re-fetch tasks to update the list
  } catch (error) {
    console.error(error);
  }
}

// Event Listeners
addTaskBtn.addEventListener("click", createTask);
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    createTask();
  }
});

// Initial fetch to populate the task list
fetchTasks();

