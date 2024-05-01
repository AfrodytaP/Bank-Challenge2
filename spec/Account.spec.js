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
    let testAccount, testTransaction;

    beforeEach(() => {
      testAccount = new Account();

      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: 1000,
      });
    });

    afterEach(() => {
      testAccount = undefined;
      testTransaction = undefined;
    });

    //This is a suite of tests for Requirement 2 - Deposit
    it("Requirement 2 - Test 1) should add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 1
      //Arrange
      const expected = 1;
      //Act

      testAccount.deposit(testTransaction.getCredit());
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });

    it("Requirement 2 - Test 2) should increase accountBallance to 1000", () => {
      //This is a test checks that accountBallance array is of length 1000
      //Arrange
      const expected = 1000;

      //Act
      testAccount.deposit(testTransaction.getCredit());
      //Assert
      expect(testAccount.getAccountBalance()).toBe(expected);
    });

    it("Requirement 2 - Test 3) should throw a NAN error", () => {
      //This is a test checks that accountBallance array is of length 1000
      //Arrange
      const expected = "Invalid credit input: Please enter a number";

      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: "one",
      });

      //Act
      //Assert
      expect(() => {
        testAccount.deposit(testTransaction.getCredit());
      }).toThrowError("Invalid credit input: Please enter a number");
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

    xit("Requirement 3 - Test 1) should add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 1
      //Arrange
      const expected = 1;
      //Act
      const accountTransaction = {
        date: "10-01-2012",
        credit: null,
        debit: 1000,
        balance: null,
      };

      testAccount.withdraw(accountTransaction);

      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
  });

  describe("Requirement 4 Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount, testTransaction;

    beforeEach(() => {
      testAccount = new Account();
    });

    afterEach(() => {
      testAccount = undefined;
      testTransaction = undefined;
    });

    it("Requirement 4 - Test 1) should not add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 0
      //Arrange
      const expected = 0;
      //Act
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDebit: 1000,
      });

      testAccount.withdraw(testTransaction);

      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
  });
});
