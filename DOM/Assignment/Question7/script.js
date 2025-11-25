const box = document.getElementById("box");
const xValue = document.getElementById("xValue");
const yValue = document.getElementById("yValue");

// Track mouse move inside box
box.addEventListener("mousemove", (e) => {
  xValue.textContent = e.clientX;
  yValue.textContent = e.clientY;
});

// Double-click to drop red dot
box.addEventListener("dblclick", (e) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // position relative to the box using offsetX/Y
  dot.style.left = e.offsetX + "px";
  dot.style.top = e.offsetY + "px";

  box.appendChild(dot);
});
