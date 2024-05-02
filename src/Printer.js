export default class Printer {
  //constructor
  constructor() {}

  //formatDate method
  static formatDate = (accountTransaction) => {
    return accountTransaction.getDate().replace(/-/g, "/");
  };

  //formatDebit method
  static formatCredit = (accountTransaction) => {
    const credit = accountTransaction.getCredit();
    return credit.toFixed(2);
  };
}
