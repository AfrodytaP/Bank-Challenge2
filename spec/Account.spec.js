import Account from "../src/Account.js";

describe("Account Class Tests", () => {
  //This is a suite of tests for the Account class
  describe("Requirement 1 Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount;
    afterEach(() => {
      testAccount = undefined;
    });

    //This is a suite of tests for requirements 1
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

  describe("Requirement 2 Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount;

    beforeEach(() => {
      testAccount = new Account();
    });

    afterEach(() => {
      testAccount = undefined;
    });

    //This is a suite of tests for Requirement 2 - Deposit
    it("Requirement 2 - Test 1) should add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 1
      //Arrange
      const expected = 1;
      //Act
      const accountTransaction = {
        date: "10-01-2012",
        credit: 1000,
        debit: null,
        balance: null,
      };

      testAccount.deposit(accountTransaction);
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
  });

  describe("Requirement 3 Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount;

    beforeEach(() => {
      testAccount = new Account();
    });

    afterEach(() => {
      testAccount = undefined;
    });

    it("Requirement 3 - Test 1) should add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 1
      //Arrange
      const expected = 1;
      //Act
      const accountTransaction = {
        date: "10-01-2012",
        credit: 1000,
        debit: null,
        balance: null,
      };

      testAccount.withdraw(accountTransaction);

      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
  });
});
