class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price, qty) {
    this.items.push({name, price, qty});
  }

  getTotal() {
    let total = this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    return total - (total * this.discount / 100);
  }
}

let cart = new Cart();

function addItem() {
  let name = document.getElementById("iname").value;
  let price = Number(document.getElementById("iprice").value);
  let qty = Number(document.getElementById("iqty").value);

  cart.addItem(name, price, qty);
  showTotal();
}

function applyCoupon() {
  let code = document.getElementById("coupon").value;
  let reg = /^(SAVE|DISC)\d+$/;

  if(reg.test(code)){
    cart.discount = parseInt(code.match(/\d+/)[0]);
  } else {
    alert("Invalid Coupon");
  }

  showTotal();
}

function showTotal() {
  document.getElementById("cartOutput").innerText = "Final Total: ₹" + cart.getTotal();
}