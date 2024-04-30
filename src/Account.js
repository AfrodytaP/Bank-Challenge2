export default class Account {
  #userId;

  //constructor
  constructor(userID = 0) {
    this.#userId = userID;
  }
  //getter method
  getUserId() {
    return this.#userId;
  }
}
