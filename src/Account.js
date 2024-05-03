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
  getUserId = () => this.#userID;

  getUserName = () => this.#userName;

  getAccountTransactions = () => this.#accountTransactions;

  getAccountBalance = () => this.#accountBalance;

  deposit = (accountTransaction) => {
    const credit = accountTransaction.getCredit();
    this.#accountBalance += credit;
    if (isNaN(credit)) {
      throw Error("Invalid credit input: Please enter a number");
    }
    if (credit < 0) {
      throw Error("Invalid credit input: Please enter a positive number");
    }
    return this.#accountTransactions.push(accountTransaction);
  };

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
    return this.#accountTransactions.push(accountTransaction);
  };
}
