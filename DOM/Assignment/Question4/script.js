const body = document.body;

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function setTheme(theme) {
  // Add class using setAttribute
  body.setAttribute("class", theme);

  // Save current theme
  body.setAttribute("data-theme", theme);
}

lightBtn.addEventListener("click", () => setTheme("light"));
darkBtn.addEventListener("click", () => setTheme("dark"));
blueBtn.addEventListener("click", () => setTheme("blue"));
