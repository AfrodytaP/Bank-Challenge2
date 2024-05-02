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

  getAccountBalance() {
    return this.#accountBalance;
  }

  deposit = (accountTransaction) => {
    this.#accountBalance += accountTransaction;
    if (isNaN(accountTransaction)) {
      throw Error("Invalid credit input: Please enter a number");
    }
    if (accountTransaction < 0) {
      throw Error("Invalid credit input: Please enter a positive number");
    }
    return this.#accountTransactions.push(accountTransaction);
  };

  withdraw(accountTransaction) {
    if (this.#accountBalance >= accountTransaction) {
      return this.#accountTransactions.push(accountTransaction);
    }
  }

  calculateBalance() {
    this.#accountBalance = this.#accountTransactions.reduce(
      (balance, accountTransaction) => {
        return (
          balance +
          accountTransaction.getCredit() -
          accountTransaction.getDebit()
        );
      },
      0
    );
  }
}
