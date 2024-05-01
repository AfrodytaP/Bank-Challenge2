export default class Account {
  #userID;
  #userName;
  #accountTransactions = [];

  //constructor
  constructor(userID = 0, userName, accountTransaction = []) {
    this.#userID = userID;
    this.#userName = userName;
    this.#accountTransactions = accountTransaction;
  }

  //getter method
  getUserId() {
    return this.#userID;
  }

  getUserName() {
    return this.#userName;
  }

  getAccountTransactions() {
    return this.#accountTransactions;
  }

  deposit(accountTransaction) {
    return this.#accountTransactions.push(accountTransaction);
  }

  withdraw(accountTransaction) {
    return this.#accountTransactions.push(accountTransaction);
  }
}
