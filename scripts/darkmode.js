/**
 * Sets up theme toggle behavior.
 */
function setupThemeToggle() {
  const themeToggle = document.getElementById("mode-toggle-btn");
  const themeMobileToggle = document.getElementById("mobile-toggle-btn");

  document.body.classList.toggle("dark", userPreferences.theme === "dark");
  themeToggle.checked = userPreferences.theme === "dark";
  themeMobileToggle.checked = userPreferences.theme === "dark";

  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeToggle.checked);
    userPreferences.theme = themeToggle.checked ? "dark" : "light";
    savePreferences();
  });

  themeMobileToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark", themeMobileToggle.checked);
    userPreferences.theme = themeMobileToggle.checked ? "dark" : "light";
    savePreferences();
  });
}