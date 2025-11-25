const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxLength = 100;

// Update counter
textArea.addEventListener("input", () => {
  let remaining = maxLength - textArea.value.length;

  counter.textContent = remaining + " characters remaining";

  if (remaining <= 20 && remaining > 0) {
    counter.style.color = "orange";
  } 
  else if (remaining === 0) {
    counter.style.color = "red";
  } 
  else {
    counter.style.color = "black";
  }
});

// Prevent typing after limit
textArea.addEventListener("keydown", (e) => {
  if (textArea.value.length >= maxLength && e.key !== "Backspace") {
    e.preventDefault();
  }
});

// Reset button
resetBtn.addEventListener("click", () => {
  textArea.value = "";
  counter.textContent = "100 characters remaining";
  counter.style.color = "black";
});
