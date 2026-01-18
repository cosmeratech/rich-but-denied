const teen = new TeenAccount(3000);
const adult = new AdultAccount(10000);
const corp = new CorporateAccount(100000);

teen.pay("shopping", 500);
teen.pay("travel", 6000);

adult.pay("food", 1500);

corp.pay("travel", 20000);

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
      console.log("❌ Payment blocked");
      return;
    }

    this.#balance -= amount;
    this.processPayment(type, amount);
  }

  // polymorphic method
  processPayment(type, amount) {
    console.log(`Paid ₹${amount} for ${type}`);
  }
}