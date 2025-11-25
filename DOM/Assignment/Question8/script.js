const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");
const options = document.querySelectorAll(".option");

// Toggle dropdown
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("hidden");
});

// Handle option click
options.forEach(option => {
  option.addEventListener("click", (e) => {
    btn.textContent = option.textContent;
    menu.classList.add("hidden");
    e.stopPropagation();
  });
});

// Close dropdown when clicking outside (CAPTURING PHASE)
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    menu.classList.add("hidden");
  }
}, true);  // true = capturing phase
