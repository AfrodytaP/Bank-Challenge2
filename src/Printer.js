export default class Printer {
  //constructor
  constructor() {}

  //formatDate method
  static formatDate = (accountTransaction) => {
    return accountTransaction.getDate().replace(/-/g, "/");
  };

  //formatCredit method
  static formatCredit = (accountTransaction) => {
    const credit = accountTransaction.getCredit();
    return credit !== null ? credit.toFixed(2) : "";
  };

  //formatDebit method
  static formatDebit = (accountTransaction) => {
    const debit = accountTransaction.getDebit();
    return debit !== null ? debit.toFixed(2) : "";
  };

  //formatBalance method
  static formatBalance = (accountTransaction) => {
    const balance = accountTransaction.getBalance();
    return balance !== null ? balance.toFixed(2) : "";
  };

  //formatTransaction method
  static formatTransaction = (accountTransaction) => {
    const date = this.formatDate(accountTransaction);
    const credit = this.formatCredit(accountTransaction);
    const debit = this.formatDebit(accountTransaction);
    const balance = this.formatBalance(accountTransaction);
    return `${date} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${balance}`;
  };

  //printStatement method
  static printStatement = (accountTransaction) => {
    return;
  };
}
