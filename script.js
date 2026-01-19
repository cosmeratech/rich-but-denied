class BankAccount {
  #balance;
  #limits;

  constructor(balance) {
    this.#balance = balance;

    this.#limits = new Map([
      ["food", 2000],
      ["shopping", 1000],
      ["travel", 5000]
    ]);
  }

  canPay(type, amount) {
    const limit = this.#limits.get(type);
    if (!limit) return false;
    return amount <= limit && amount <= this.#balance;
  }

  pay(type, amount) {
    if (!this.canPay(type, amount)) {
      console.log("Payment blocked!");
      return;
    }

    this.#balance -= amount;
    this.processPayment(type, amount);
  }

  getBalance() {
    return this.#balance;
  }

  processPayment(type, amount) {
    console.log(`Paid ₹${amount} for ${type}`);
  }
}

class TeenAccount extends BankAccount {
  processPayment(type, amount) {
    console.log(`Teen account paid ₹${amount} for ${type}`);
  }
}

class AdultAccount extends BankAccount {
  processPayment(type, amount) {
    console.log(`Adult account payment: ₹${amount} for ${type}`);
  }
}

class CorporateAccount extends BankAccount {
  processPayment(type, amount) {
    console.log(`Corporate expense logged: ₹${amount} for ${type}`);
  }
}

const teen = new TeenAccount(3000);
const adult = new AdultAccount(10000);
const corp = new CorporateAccount(100000);

teen.pay("shopping", 500);
teen.pay("travel", 6000);

adult.pay("food", 1500);

corp.pay("travel", 20000);
