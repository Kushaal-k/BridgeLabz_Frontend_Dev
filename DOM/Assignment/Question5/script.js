const images = document.querySelectorAll(".img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

// Open modal
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

// Close when clicking outside
modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Prevent close when clicking inside modal
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
