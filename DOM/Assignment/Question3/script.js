let step = 1;

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const summary = document.getElementById("summary");

const steps = {
  1: document.getElementById("step1"),
  2: document.getElementById("step2"),
  3: document.getElementById("step3")
};

function showStep(num) {
  for (let i = 1; i <= 3; i++) {
    steps[i].classList.add("hidden");
  }
  steps[num].classList.remove("hidden");

  backBtn.disabled = num === 1;
}

showStep(step);

// Validation
function isValid() {
  if (step === 1) {
    return document.getElementById("name").value.trim() !== "";
  }
  if (step === 2) {
    const email = document.getElementById("email").value;
    return email.includes("@");
  }
  if (step === 3) {
    return document.getElementById("password").value.length >= 6;
  }
}

nextBtn.addEventListener("click", () => {
  if (!isValid()) {
    alert("Invalid input!");
    return;
  }

  if (step < 3) {
    step++;
    showStep(step);
  } else {
    showSummary();
  }
});

backBtn.addEventListener("click", () => {
  step--;
  showStep(step);
});

function showSummary() {
  summary.classList.remove("hidden");
  steps[3].classList.add("hidden");
  backBtn.classList.add("hidden");
  nextBtn.classList.add("hidden");

  summary.innerHTML = `
    <h3>Summary</h3>
    <p>Name: ${document.getElementById("name").value}</p>
    <p>Email: ${document.getElementById("email").value}</p>
    <p>Password: ******</p>
  `;
}
