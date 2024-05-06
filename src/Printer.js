import chalk from "chalk";
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
    return credit !== null ? chalk.green(credit.toFixed(2)) : "";
  };

  //formatDebit method
  static formatDebit = (accountTransaction) => {
    const debit = accountTransaction.getDebit();
    return debit !== null ? chalk.red(debit.toFixed(2)) : "";
  };

  //formatBalance method
  static formatBalance = (accountTransaction) => {
    const balance = accountTransaction.currentBalance;
    // balanceFormated initilieze to let as it will be reassigned
    let balanceFormated = balance.toFixed(2);
    //if balance is negative, format it in red, else format it in green
    return (balanceFormated =
      balance > 0 ? chalk.green(balanceFormated) : chalk.red(balanceFormated));
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
  static printStatement = (accountTransactions) => {
    if (accountTransactions.length === 0) {
      throw new Error("No transactions to print");
    }
    console.log(`date       || credit  || debit  || balance`);
    accountTransactions.reverse().forEach((accountTransaction) => {
      const transactionFormatted = this.formatTransaction(accountTransaction);
      console.log(transactionFormatted);
    });
  };
}
