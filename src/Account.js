export default class Account {
  #userID;
  #userName;

  //constructor
  constructor(userID = 0, userName) {
    this.#userID = userID;
    this.#userName = userName;
  }

  //getter method
  getUserId() {
    return this.#userID;
  }

  getUserName() {
    return this.#userName;
  }
}
