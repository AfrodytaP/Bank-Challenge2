import Account from "./Account.js";

export default class OverdraftAccountAccount extends Account {
  #availableOverdraft;

  //constructor
  constructor(
    userID = 0,
    userName,
    accountTransaction = [],
    accountBalance = 0,
    overdraft = "not available",
    availableOverdraft = 0
  ) {
    super(userID, userName, accountTransaction, accountBalance, overdraft);
    this.#availableOverdraft = availableOverdraft;
  }

  //getOverdraftAccount method
  getOverdraftAccount = () => this.#availableOverdraft;
}
