const menu = {
  burger: 50,
  pizza: 100,
  pasta: 80
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) {
        throw new Error(`Invalid item: ${item}`);
      }
      return menu[item];
    });

    const total = prices.reduce((sum, price) => sum + price, 0);
    console.log("Total Bill:", total);

  } catch (error) {
    console.log("Error:", error.message);
  }
}

calculateBill(["burger", "pizza"]);
calculateBill(["burger", "icecream"]);
