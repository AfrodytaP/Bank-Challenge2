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
  //getter method
  //getDate method
  getDate = () => this.#date;
  //getCredit method
  getCredit = () => this.#credit;
  //getDebit method
  getDebit = () => this.#debit;
  //getBalance method
  getBalance = () => this.#balance;
}
