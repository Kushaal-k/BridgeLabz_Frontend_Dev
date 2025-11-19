"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const validTransactions = [];
const invalidTransactions = [];

for (let t of transactions) {
  try {
    debugger;

    if (t === null) {
      throw new Error("Null transaction");
    }

    if (t.id === undefined || t.amount === undefined) {
      throw new Error("Missing id or amount");
    }

    if (t.amount < 0) {
      throw new Error("Negative amount");
    }

    validTransactions.push(t);

  } catch (err) {
    invalidTransactions.push({ transaction: t, error: err.message });
  }
}

console.log("Valid:", validTransactions);
console.log("Invalid:", invalidTransactions);
console.log("Successful:", validTransactions.length);
console.log("Failed:", invalidTransactions.length);
