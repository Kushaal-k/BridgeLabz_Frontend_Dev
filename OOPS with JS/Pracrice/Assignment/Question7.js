class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient balance");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount(1000);

try {
  acc.deposit(500);
  console.log("Balance:", acc.getBalance());

  acc.withdraw(2000);
} catch (err) {
  console.log("Error:", err.message);
}
