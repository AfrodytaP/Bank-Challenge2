export default class Transaction {
  #date;
  #credit;
  #debit;

  //constructor
  constructor(date = new Date().toLocaleDateString(), credit = 0, debit = 0) {
    this.#date = date;
    this.#credit = credit;
    this.#debit = debit;
  }
  //getter method
  //getDate method
  getDate = () => this.#date;
  //getCredit method
  getCredit = () => this.#credit;
  //getDebit method
  getDebit = () => this.#debit;
}
