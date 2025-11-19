
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(operation) {
  try {
    let result;

    switch (operation) {
      case "add":
        result = num1 + num2;
        break;

      case "subtract":
        result = num1 - num2;
        break;

      case "divide":
        if (num2 === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = num1 / num2;
        break;

      case "power":
        result = num1 ** num2;
        break;

      case "root":
        if (num1 < 0) {
          throw new Error("Cannot take root of negative number");
        }
        result = Math.sqrt(num1);
        break;

      default:
        throw new Error("InvalidOperationError");
    }

    console.log(`Operation: ${operation}  → Result: ${result}`);

  } catch (err) {
    console.log(`Operation: ${operation}  → Error: ${err.message}`);
  }
}

for (let op of operations) {
  calculate(op);
}
