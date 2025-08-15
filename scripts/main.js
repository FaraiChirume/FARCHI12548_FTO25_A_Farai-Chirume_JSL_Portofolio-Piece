/**
 * Initializes the task board and UI handlers.
 */
async function initTaskBoard() {
  tasks = await fetchTasks();
  renderTasks(tasks);
  setupModalHandlers();
  setupNewTaskModal();
  setupSidebarToggle();
  setupMobileSidebar();
  setupThemeToggle();
}

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", initTaskBoard);