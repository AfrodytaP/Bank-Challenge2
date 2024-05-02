export default class Printer {
  //constructor
  constructor() {}

  //formatDate method
  formatDate = (accountTransaction) => {
    console.log(accountTransaction);
    return accountTransaction.replace(/-/g, "/");
  };
}
