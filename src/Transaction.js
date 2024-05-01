export default class Transaction {
  #debit;

  //constructor
  constructor(debit = 0) {
    this.#debit = debit;
  }

  getDebit() {
    return this.#debit;
  }
}
