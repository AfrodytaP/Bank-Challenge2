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
  //getUserId method
  getUserId = () => this.#userID;
  //getUserName method
  getUserName = () => this.#userName;
  //getAccountTransactions method
  getAccountTransactions = () => this.#accountTransactions;
  //getAccountBalance method
  getAccountBalance = () => this.#accountBalance;
  //deposit method
  deposit = (accountTransaction) => {
    const credit = accountTransaction.getCredit();
    if (isNaN(credit)) {
      throw Error("Invalid credit input: Please enter a number");
    }
    if (credit < 0) {
      throw Error("Invalid credit input: Please enter a positive number");
    }
    this.#accountBalance += credit;

    // const balance = this.#accountBalance;
    accountTransaction.currentBalance = this.#accountBalance;

    return this.#accountTransactions.push(accountTransaction);
  };
  //withdraw method
  withdraw = (accountTransaction) => {
    const debit = accountTransaction.getDebit();
    if (isNaN(debit)) {
      throw Error("Invalid debit input: Please enter a number");
    }
    if (debit < 0) {
      throw Error("Invalid debit input: Please enter a positive number");
    }
    if (this.#accountBalance < debit) {
      throw Error("Insufficient funds: Transaction declined");
    }
    this.#accountBalance -= debit;
    // const balance = this.#accountBalance;

    accountTransaction.currentBalance = this.#accountBalance;
    // accountTransaction.newB = balance;
    return this.#accountTransactions.push(accountTransaction);
  };
}
