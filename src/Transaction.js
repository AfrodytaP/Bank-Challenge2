export default class Transaction {
  #date;
  #credit;
  #debit;
  #balance;

  //constructor
  constructor(
    date = new Date().toLocaleDateString(),
    credit = 0,
    debit = 0,
    balance = 0
  ) {
    this.#date = date;
    this.#credit = credit;
    this.#debit = debit;
    this.#balance = balance;
  }

  getDate() {
    return this.#date;
  }

  getCredit() {
    return this.#credit;
  }
  getDebit() {
    return this.#debit;
  }

  getBalance() {
    return this.#balance;
  }
}
