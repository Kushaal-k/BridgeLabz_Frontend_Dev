async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) throw new Error("Network error");

    const products = await response.json();

    // Log each product
    products.forEach((p) => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
      console.log("------------------------");
    });

    // BONUS: Display product cards on the page
    products.forEach((p) => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.padding = "10px";
      card.style.margin = "10px";
      card.style.width = "200px";

      const img = document.createElement("img");
      img.src = p.image;
      img.style.width = "100%";

      const title = document.createElement("h3");
      title.textContent = p.title;

      const price = document.createElement("p");
      price.textContent = "$" + p.price;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);

      document.body.appendChild(card);
    });

  } catch (err) {
    console.log("Failed to load products. Please try again.");
  }
}

loadProducts();
