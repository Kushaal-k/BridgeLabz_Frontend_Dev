const search = document.getElementById("search");
const rows = document.querySelectorAll("#tableBody tr");
const noResult = document.getElementById("noResult");

search.addEventListener("input", () => {
  const searchText = search.value.toLowerCase();
  let found = false;

  rows.forEach(row => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(searchText)) {
      row.style.display = "";
      found = true;
    } else {
      row.style.display = "none";
    }
  });

  noResult.style.display = found ? "none" : "block";
});
