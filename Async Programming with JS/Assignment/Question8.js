// Promise that fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    const fail = Math.random() < 0.5; // 50% fail chance
    setTimeout(() => {
      fail ? reject("Order Failed") : resolve("Order Success");
    }, 500);
  });
}

async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return; // stop after success
    } catch (err) {
      console.log(`Attempt ${attempt}: Failed`);
    }
  }

  // If all 3 attempts failed:
  throw new Error("Order could not be processed");
}

// Run it
processOrder()
  .catch((err) => console.log(err.message));
