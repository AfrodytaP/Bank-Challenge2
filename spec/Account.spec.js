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
    it("Requirement 1 - Test 2) should have id property that is initialised to 0", () => {
      //This is a test that checks if id property can be initialised
      //Arrange
      const expected = 0;
      //Act
      const testAccount = new Account();
      //Assert
      expect(testAccount.getUserId()).toBe(expected);
    });
  });
});
