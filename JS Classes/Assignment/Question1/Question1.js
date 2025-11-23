class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }
  
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  displayDetails() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}


let product = new Product(1, "Laptop", 45000, "Electronics")

product.applyDiscount(10)
product.displayDetails()