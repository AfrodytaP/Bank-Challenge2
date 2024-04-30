import Account from "../src/Account.js";

describe("Account Class Tests", () => {
  //This is a suite of tests for the Account class
  describe("Account Initialisation Tests", () => {
    //This is a suite of tests for the Account initialisation
    it("Requirement 1 - Test 1) should create a new instance of Account Class", () => {
      //This is a test that checks if an instance of Account Class can be made
      //Arrange
      //Act
      const testAccount = new Account();
      //Assert
      expect(testAccount).toBeInstanceOf(Account);
    });
  });
});
