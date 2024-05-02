export default class Printer {
  //constructor
  constructor() {}

  //formatDate method
  formatDate = (accountTransaction) => {
    return accountTransaction.getDate().toLocaleDateString();
  };
}
