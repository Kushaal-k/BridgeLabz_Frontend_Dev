const input = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("productList");

let editingItem = null;

// Add Product
addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${input.value}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  list.appendChild(li);
  input.value = "";
});

// Event Delegation (Edit/Delete)
list.addEventListener("click", (e) => {
  const parentLi = e.target.closest("li");
  if (!parentLi) return;

  const span = parentLi.querySelector("span");

  // Delete
  if (e.target.classList.contains("delete")) {
    parentLi.remove();
  }

  // Edit
  if (e.target.classList.contains("edit")) {
    makeEditable(span);
  }
});

// Enable Inline Edit
function makeEditable(span) {
  if (editingItem && editingItem !== span) {
    saveEdit(editingItem);
  }

  span.contentEditable = "true";
  span.focus();
  editingItem = span;
}

// Save when clicking outside
document.addEventListener("click", (e) => {
  if (editingItem && !e.target.closest("li")) {
    saveEdit(editingItem);
  }
});

// Save Edit
function saveEdit(span) {
  span.contentEditable = "false";
  editingItem = null;
}
