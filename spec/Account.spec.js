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

      testAccount.deposit(testTransaction);
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });

    it("Requirement 2 - Test 2) should increase accountBallance to 1000", () => {
      //This is a test checks that accountBallance array is of length 1000
      //Arrange
      const expected = 1000;

      //Act
      testAccount.deposit(testTransaction);
      //Assert
      expect(testAccount.getAccountBalance()).toBe(expected);
    });

    it("Requirement 2 - Test 3) should throw a NAN error", () => {
      //This is a test checks a string is not accepted as a credit input
      //Arrange
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: "one",
      });

      //Act
      //Assert
      expect(() => {
        testAccount.deposit(testTransaction);
      }).toThrowError("Invalid credit input: Please enter a number");
    });

    it("Requirement 2 - Test 4) should throw a no negative numbers error", () => {
      //This is a test checks a negative number is not accepted as a credit input
      //Arrange
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: -1,
      });

      //Act
      //Assert
      expect(() => {
        testAccount.deposit(testTransaction);
      }).toThrowError("Invalid credit input: Please enter a positive number");
    });
  });

  describe("Requirement 3 Tests", () => {
    // Will replace REPEATED arrange code
    let testAccount, testTransaction;

    beforeEach(() => {
      testAccount = new Account();

      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: 100,
        getDebit: 10,
      });
    });

    afterEach(() => {
      testAccount = undefined;
      testTransaction = undefined;
    });

    it("Requirement 3 - Test 1) should add a transaction to the accountTransactions Array", () => {
      //This is a test checks that accountTransactions array is of length 1
      //Arrange
      const expected = 2;
      //Act

      testAccount.deposit(testTransaction);
      testAccount.withdraw(testTransaction);
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });

    it("Requirement 3 - Test 2) should have a total account balance of 90", () => {
      //This is a test checks that accountBalance is at 90
      //Arrange
      const expected = 90;
      //Act

      testAccount.deposit(testTransaction);
      testAccount.withdraw(testTransaction);
      //Assert
      expect(testAccount.getAccountBalance()).toBe(expected);
    });

    it("Requirement 3- Test 3) should throw a NAN error", () => {
      //This is a test checks a string is not accepted as a debit input
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDebit: "one",
      });
      //Act
      //Assert
      expect(() => {
        testAccount.withdraw(testTransaction);
      }).toThrowError("Invalid debit input: Please enter a number");
    });

    it("Requirement 3 - Test 4) should throw a no negative numbers error", () => {
      //This is a test checks a negative number is not accepted as a debit input
      //Arrange
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDebit: -1,
      });

      //Act
      //Assert
      expect(() => {
        testAccount.withdraw(testTransaction);
      }).toThrowError("Invalid debit input: Please enter a positive number");
    });

    it("Requirement 3 - Test 5) should throw insufficient funds error", () => {
      //This is a test checks a an error is thrown if the account has insufficient funds compered with the debit input
      //Arrange
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDebit: 1000,
      });

      //Act
      //Assert
      expect(() => {
        testAccount.withdraw(testTransaction);
      }).toThrowError("Insufficient funds: Transaction declined");
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

    it("Requirement 4 - Test 1) should preform both a transactions", () => {
      //This is a test checks that accountBalance is 0
      //Arrange
      const expected = 0;
      //Act
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: 100,
        getDebit: 100,
      });
      testAccount.deposit(testTransaction);
      testAccount.withdraw(testTransaction);

      //Assert
      expect(testAccount.getAccountBalance()).toBe(expected);
    });
    it("Requirement 4 - Test 2) should preform both a transactions 3 times", () => {
      //This is a test checks that an error message is returned and that 3 transactions have been added to accountTransaction
      //Arrange
      //Act
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getCredit: 200,
        getDebit: 100,
      });
      testAccount.deposit(testTransaction);
      testAccount.withdraw(testTransaction);
      testAccount.withdraw(testTransaction);

      //Assert
      expect(() => {
        testAccount.withdraw(testTransaction);
      }).toThrowError("Insufficient funds: Transaction declined");
      //Arrange
      const expected = 3;
      //Assert
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
  });

  describe("Requirement 12 Tests - Account testing overdraft functionality", () => {
    // Will replace REPEATED arrange code
    let testAccount;

    beforeEach(() => {
      testAccount = new Account(1, "Afrodyta", [], 1000, 0);
    });

    afterEach(() => {
      testAccount = undefined;
    });

    it("Requirement 12 - Test 1) should call the getOverdraft function of Account Class", () => {
      //This is a test that checks if the getOverdraft function of Account Class returns if overdraft is set to 0
      //Arrange
      const expected = 0;
      //Act
      //Assert
      expect(testAccount.getOverdraft()).toBe(expected);
    });
  });
  describe("Requirement 13 Tests - Account testing overdraft functionality", () => {
    // Will replace REPEATED arrange code
    let testAccount;

    beforeEach(() => {
      testAccount = new Account(1, "Afrodyta", [], 1000, 0);
    });

    afterEach(() => {
      testAccount = undefined;
    });

    it("Requirement 13 - Test 1) should call the changeOverdraft function of Account Class", () => {
      //This is a test that checks if the changeOverdraft function of Account Class returns to change the overdraft status
      //Arrange
      const expected = 1000;
      //Act
      testAccount.changeOverdraft(1000);
      //Assert
      expect(testAccount.getOverdraft()).toBe(expected);
    });
    it("Requirement 13 - Test 2) should throw a NAN error", () => {
      //This is a test checks a string is not accepted as a changeOverdraft argument
      //Arrange
      const expected = "Invalid overdraft input: Please enter a number";

      //Act
      //Assert
      expect(() => {
        testAccount.changeOverdraft("one");
      }).toThrowError(expected);
    });
    it("Requirement 13 - Test 3) should throw a no negative numbers error", () => {
      //This is a test checks a negative number is not accepted as a changeOverdraft argument
      //Arrange
      const expected =
        "Invalid overdraft input: Please enter a positive number";
      //Act
      //Assert
      expect(() => {
        testAccount.changeOverdraft(-1000);
      }).toThrowError(expected);
    });
    it("Requirement 13 - Test 4) should throw a null error", () => {
      //This is a test checks null is not accepted as a changeOverdraft argument
      //Arrange
      const expected = "Invalid overdraft input: Please don't leave empty";
      //Act
      //Assert
      expect(() => {
        testAccount.changeOverdraft(null);
      }).toThrowError(expected);
    });
  });

  describe("Requirement 14 Tests - Account testing overdraft functionality with withdrawals", () => {
    // Will replace REPEATED arrange code
    let testAccount, testTransaction, testTransaction2, testTransaction3;

    beforeEach(() => {
      testAccount = new Account(1, "Afrodyta", [], 1000, 100);

      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDebit: 1050,
      });
      testTransaction2 = jasmine.createSpyObj("testTransaction", {
        getDebit: 1100,
      });
      testTransaction3 = jasmine.createSpyObj("testTransaction", {
        getDebit: 1101,
      });
    });

    afterEach(() => {
      testAccount = undefined;
      testTransaction = undefined;
      testTransaction2 = undefined;
      testTransaction3 = undefined;
    });

    it("Requirement 14 - Test 1) should call the withdraw function of Account Class", () => {
      //This is a test checks that accountTransactions array is of length 1 as the overdraft is set to 100
      //Arrange
      const expected = 1;
      //Act

      testAccount.withdraw(testTransaction);
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
    it("Requirement 14 - Test 2) should call the withdraw function of Account Class", () => {
      //This is a test checks that accountTransactions array is of length 1 as the overdraft is set to 100
      //Arrange
      const expected = 1;
      //Act

      testAccount.withdraw(testTransaction2);
      //Assert
      expect(testAccount.getAccountTransactions().length).toBe(expected);
    });
    it("Requirement 14 - Test 3) should call the withdraw function of Account Class", () => {
      //This is a test checks that error is thrown as the withdraw amount is greater than the balance and overdraft together
      //Arrange
      const expected = "Insufficient funds: Transaction declined";
      //Act
      //Assert
      expect(() => {
        testAccount.withdraw(testTransaction3);
      }).toThrowError(expected);
    });
  });
});
