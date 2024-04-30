import Account from "../src/Account.js";

describe("Account Class Tests", () => {
  //This is a suite of tests for the Account class
  describe("Account Initialisation Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount;
    let testAccount2;
    afterEach(() => {
      testAccount = undefined;
      testAccount2 = undefined;
    });

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
      //This is a test that checks if id property can be populated
      //Arrange
      const expected = 0;
      //Act
      const testAccount = new Account();
      //Assert
      expect(testAccount.getUserId()).toBe(expected);
    });

    it("Requirement 1 - Test 3) should have name property that is initialised to  name = Afrodyta", () => {
      //This is a test that checks if userName property can be populated
      //Arrange
      const expected = "Afrodyta";
      //Act
      const testAccount = new Account(1, "Afrodyta");
      //Assert
      expect(testAccount.getUserName()).toBe(expected);
    });
  });
});
