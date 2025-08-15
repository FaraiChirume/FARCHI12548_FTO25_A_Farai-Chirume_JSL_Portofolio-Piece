/**
 * Creates a single task DOM element.
 * @param {Object} task - Task data object.
 * @param {string} task.title - Title of the task.
 * @param {number} task.id - Unique task ID.
 * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
 * @returns {HTMLElement} The created task div element.
 */
function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-div";
  taskDiv.textContent = task.title;
  taskDiv.dataset.taskId = task.id;

  taskDiv.addEventListener("click", () => {
    openTaskModal(task);
  });

  return taskDiv;
}

/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
  const column = document.querySelector(`.column-div[data-status="${status}"]`);
  return column ? column.querySelector(".tasks-container") : null;
}

/**
 * Clears all existing task-divs from all task containers.
 */
function clearExistingTasks() {
  document.querySelectorAll(".tasks-container").forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks to the UI.
 * Groups tasks by status and appends them to their respective columns.
 * Updates column headers.
 * @param {Array<Object>} tasks - Array of task objects.
 */
function renderTasks(tasks) {
  clearExistingTasks();
  tasks.forEach((task) => {
    const container = getTaskContainerByStatus(task.status);
    if (container) {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    }
  });
  updateColumnHeaders(tasks);
}

/**
 * Updates the column headers with task counts.
 * @param {Array<Object>} tasks - Array of task objects.
 */
function updateColumnHeaders(tasks) {
  const statusCounts = {
    todo: 0,
    doing: 0,
    done: 0
  };

  tasks.forEach(task => statusCounts[task.status]++);

  document.getElementById("toDoText").textContent = `TODO (${statusCounts.todo})`;
  document.getElementById("doingText").textContent = `DOING (${statusCounts.doing})`;
  document.getElementById("doneText").textContent = `DONE (${statusCounts.done})`;
}

/**
 * Opens the modal dialog with pre-filled task details.
 * @param {Object} task - The task object to display in the modal.
 */
function openTaskModal(task) {
  const modal = document.getElementById("task-modal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  titleInput.value = task.title;
  descInput.value = task.description || "";
  statusSelect.value = task.status;
  modal.dataset.taskId = task.id;

  modal.showModal();
}

/**
 * Sets up modal close behavior and task form submission.
 */
function setupModalHandlers() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");
  const taskForm = document.getElementById("task-form");
  const deleteBtn = document.getElementById("delete-task-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskId = parseInt(modal.dataset.taskId);
    const updatedTask = {
      title: document.getElementById("task-title").value,
      description: document.getElementById("task-desc").value,
      status: document.getElementById("task-status").value
    };

    const result = updateTask(taskId, updatedTask);
    if (result) {
      renderTasks(tasks);
      modal.close();
    }
  });

  deleteBtn.addEventListener("click", () => {
    const taskId = parseInt(modal.dataset.taskId);
    const taskTitle = document.getElementById("task-title").value;
    if (confirm(`Are you sure you want to delete the task "${taskTitle}"?`)) {
      const success = deleteTask(taskId);
      if (success) {
        renderTasks(tasks);
        modal.close();
      }
    }});
}

/**
 * Sets up new task modal behavior.
 */
function setupNewTaskModal() {
  const openNewTaskModal = document.getElementById("add-task-btn");
  const newTaskModal = document.getElementById("new-task-modal");
  const closeNewTaskModal = document.getElementById("new-close-modal-btn");
  const customBackdrop = document.getElementById("custom-backdrop");
  const newTaskForm = document.getElementById("new-task-form");

  openNewTaskModal.addEventListener("click", () => {
    newTaskModal.style.display = "block";
    customBackdrop.style.display = "block";
  });

  closeNewTaskModal.addEventListener("click", () => {
    newTaskModal.style.display = "none";
    customBackdrop.style.display = "none";
  });

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(), // Local ID since API is not used after initial fetch
      title: document.getElementById("new-task-title").value,
      description: document.getElementById("new-task-desc").value,
      status: document.getElementById("new-task-status").value
    };

    const result = createTask(newTask);
    if (result) {
      renderTasks(tasks);
      newTaskForm.reset();
      newTaskModal.style.display = "none";
      customBackdrop.style.display = "none";
    }
  });
}
