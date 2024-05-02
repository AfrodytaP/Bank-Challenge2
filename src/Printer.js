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
    return credit.toFixed(2);
  };

  //formatDebit method
  static formatDebit = (accountTransaction) => {
    const debit = accountTransaction.getDebit();
    return debit.toFixed(2);
  };
}
