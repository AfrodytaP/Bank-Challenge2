export default class Account {
  #userID;
  #userName;
  #accountTransactions = [];
  #accountBalance;

  //constructor
  constructor(
    userID = 0,
    userName,
    accountTransaction = [],
    accountBalance = 0
  ) {
    this.#userID = userID;
    this.#userName = userName;
    this.#accountTransactions = accountTransaction;
    this.#accountBalance = accountBalance;
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
    if (this.#accountBalance >= accountTransaction.getDebit()) {
      return this.#accountTransactions.push(accountTransaction);
    }
  }
}
