const form = document.getElementById("myForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

const successMsg = document.getElementById("successMsg");

// Submit validation
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submit
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    valid = false;
  }

  // Email validation
  if (!emailInput.value.includes("@")) {
    emailError.textContent = "Email must contain @";
    valid = false;
  }

  // Password validation
  if (passInput.value.length < 6) {
    passError.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "Form Submitted Successfully ✅";
    form.reset();
  }
});

// Live error removal
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    nameError.textContent = "";
  }
});

emailInput.addEventListener("input", () => {
  if (emailInput.value.includes("@")) {
    emailError.textContent = "";
  }
});

passInput.addEventListener("input", () => {
  if (passInput.value.length >= 6) {
    passError.textContent = "";
  }
});
