// Theme toggle with memory
const toggleBtn = document.getElementById("themeToggle");
const htmlElement = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlElement.setAttribute("data-bs-theme", savedTheme);
  toggleBtn.innerHTML = savedTheme === "dark" ? '<i class="bi bi-brightness-high"></i>' : '<i class="bi bi-moon-stars"></i>';
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  htmlElement.setAttribute("data-bs-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.innerHTML = newTheme === "dark"}
