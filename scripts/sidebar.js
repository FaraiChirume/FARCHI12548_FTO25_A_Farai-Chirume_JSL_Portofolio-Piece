/**
 * Sets up sidebar toggle behavior.
 */
function setupSidebarToggle() {
  const hideSidebar = document.getElementsByClassName("side-bar")[0];
  const hideSidebarBtn = document.getElementById("hide-sidebar");
  const showSidebar = document.getElementById("show-side-bar");

  hideSidebar.classList.toggle("hidden", userPreferences.sidebarHidden);
  showSidebar.classList.toggle("hidden", !userPreferences.sidebarHidden);

  hideSidebarBtn.addEventListener("click", () => {
    hideSidebar.classList.add("hidden");
    showSidebar.classList.remove("hidden");
    userPreferences.sidebarHidden = true;
    savePreferences();
  });

  showSidebar.addEventListener("click", () => {
    hideSidebar.classList.remove("hidden");
    showSidebar.classList.add("hidden");
    userPreferences.sidebarHidden = false;
    savePreferences();
  });
}

/**
 * Sets up mobile sidebar modal behavior.
 */
function setupMobileSidebar() {
  const lightSidebar = document.getElementById("logo-mobile");
  const darkSidebar = document.getElementById("logo-dark-mobile");
  const showLightSidebar = document.getElementById("mobile-modal-light");
  const closeMobileModalBtn = document.getElementById("close-mobile-modal-btn");

  lightSidebar.addEventListener("click", () => {
    showLightSidebar.showModal();
  });

  darkSidebar.addEventListener("click", () => {
    showLightSidebar.showModal();
  });

  closeMobileModalBtn.addEventListener("click", () => {
    showLightSidebar.close();
  });
}