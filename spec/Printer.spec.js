import Printer from "../src/Printer.js";

describe("Printer Class Tests", () => {
  //This is a suite of tests for the Printer class
  describe("Requirement 5 Tests - Date formatting", () => {
    // Will replace REPEATED arrange code
    let testPrinter, testTransaction;

    beforeEach(() => {
      testPrinter = new Printer();
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 100,
        getDebit: 1000,
        getBalance: 200,
      });
    });

    afterEach(() => {
      testPrinter = undefined;
      testTransaction = undefined;
    });
    //This is a suite of tests for requirements 5
    it("Requirement 5 - Test 1) should create a new instance of Printer Class", () => {
      //This is a test that checks if an instance of Printer Class can be made
      //Arrange
      //Act
      //Assert
      expect(testPrinter).toBeInstanceOf(Printer);
    });

    it("Requirement 5 - Test 2) should call the formatDate function of Printer Class", () => {
      //This is a test that checks if the formatDate function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatDate");
      Printer.formatDate();
      //Assert
      expect(Printer.formatDate).toHaveBeenCalledWith();
    });

    it("Requirement 5 - Test 3) should call the formatDate function of Printer Class", () => {
      //This is a test that checks if the formatDate function returns the set date in a 10/01/2012 format
      //Arrange
      const expected = "10/01/2012";
      //Act
      //Assert
      expect(Printer.formatDate(testTransaction)).toBe(expected);
    });
  });

  describe("Requirement 6 Tests - Credit formatting", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 100,
        getDebit: 1000,
        getBalance: 200,
      });

      testTransactionEmpty = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: null,
        getDebit: null,
        getBalance: null,
      });
    });

    afterEach(() => {
      testTransaction = undefined;
    });

    it("Requirement 6 - Test 1) should call the formatCredit function of Printer Class", () => {
      //This is a test that checks if the formatCredit function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatCredit");
      Printer.formatCredit();
      //Assert
      expect(Printer.formatCredit).toHaveBeenCalledWith();
    });

    it("Requirement 6 - Test 2) should call the formatCredit function of Printer Class", () => {
      //This is a test that checks if the formatCredit function returns the credit in a 100.00 format
      //Arrange
      const expected = "100.00";
      //Act
      const output = Printer.formatCredit(testTransaction);
      //Remove ANSI escape codes from output
      const outputNoColour = output.replace(/\x1b\[[0-9;]*m/g, "");
      //Assert
      expect(outputNoColour).toEqual(expected);
    });

    it("Requirement 6 - Test 3) should call the formatCredit function of Printer Class", () => {
      //This is a test that checks if the formatCredit function returns credit as "" if null
      //Arrange
      const expected = "";
      //Act
      //Assert
      expect(Printer.formatCredit(testTransactionEmpty)).toEqual(expected);
    });
  });

  describe("Requirement 7 Tests - Debit formatting", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 100,
        getDebit: 1000,
        getBalance: 200,
      });
      testTransactionEmpty = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: null,
        getDebit: null,
        getBalance: null,
      });
    });

    afterEach(() => {
      testTransaction = undefined;
    });

    it("Requirement 7 - Test 1) should call the formatDebit function of Printer Class", () => {
      //This is a test that checks if the formatDebit function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatDebit");
      Printer.formatDebit();
      //Assert
      expect(Printer.formatDebit).toHaveBeenCalledWith();
    });

    it("Requirement 7 - Test 2) should call the formatDebit function of Printer Class", () => {
      //This is a test that checks if the formatDebit function returns the debit in a 1000.00 format
      //Arrange
      const expected = "1000.00";
      //Act
      const output = Printer.formatDebit(testTransaction);
      //Remove ANSI escape codes from output
      const outputNoColour = output.replace(/\x1b\[[0-9;]*m/g, "");
      //Assert
      expect(outputNoColour).toEqual(expected);
    });

    it("Requirement 7 - Test 3) should call the formatDebit function of Printer Class", () => {
      //This is a test that checks if the formatDebit function returns debit as "" if null
      //Arrange
      const expected = "";
      //Act
      //Assert
      expect(Printer.formatDebit(testTransactionEmpty)).toEqual(expected);
    });
  });

  describe("Requirement 8 Tests - Balance formatting", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 100,
        getDebit: 1000,
      });
      testTransaction.currentBalance = 200;

      testTransactionEmpty = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: null,
        getDebit: null,
      });
      testTransactionEmpty.currentBalance = null;
    });

    afterEach(() => {
      testTransaction = undefined;
    });

    it("Requirement 8 - Test 1) should call the formatBalance function of Printer Class", () => {
      //This is a test that checks if the formatBalance function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatBalance");
      Printer.formatBalance();
      //Assert
      expect(Printer.formatBalance).toHaveBeenCalledWith();
    });

    it("Requirement 8 - Test 2) should call the formatBalance function of Printer Class", () => {
      //This is a test that checks if the formatBalance function returns the balance in a 1000.00 format
      //Arrange
      const expected = "200.00";
      //Act
      const output = Printer.formatBalance(testTransaction);
      //Remove ANSI escape codes from output
      const outputNoColour = output.replace(/\x1b\[[0-9;]*m/g, "");
      //Act
      //Assert
      expect(outputNoColour).toEqual(expected);
    });
  });
  describe("Requirement 9 Tests - Transaction formatting", () => {
    // Will replace REPEATED arrange code
    let testTransaction;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 1000,
        getDebit: null,
      });
      testTransaction.currentBalance = 1000;
    });

    afterEach(() => {
      testTransaction = undefined;
    });

    it("Requirement 9 - Test 1) should call the formatTransaction function of Printer Class", () => {
      //This is a test that checks if the formatTransaction function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatTransaction");
      Printer.formatTransaction();
      //Assert
      expect(Printer.formatTransaction).toHaveBeenCalledWith();
    });

    it("Requirement 9 - Test 2) should call the formatTransaction function of Printer Class", () => {
      //This is a test that checks if the formatTransaction function returns the transaction balance in specific format
      //Arrange
      const expected = "10/01/2012 || 1000.00 ||        || 1000.00";
      //Act
      const output = Printer.formatTransaction(testTransaction);
      //Remove ANSI escape codes from output
      const outputNoColour = output.replace(/\x1b\[[0-9;]*m/g, "");
      //Assert
      expect(outputNoColour).toEqual(expected);
    });
  });

  describe("Requirement 10 Tests - Statement Printer", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransaction2, testAccount;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 1000,
        getDebit: null,
      });
      testTransaction.currentBalance = 1000;

      testTransaction2 = jasmine.createSpyObj("testTransaction", {
        getDate: "14-01-2012",
        getCredit: null,
        getDebit: 500,
      });
      testTransaction2.currentBalance = 2500;
      testAccount = jasmine.createSpyObj("testAccount", {
        getUserID: 1,
        getUserName: "Afrodyta",
        getAccountTransactions: [],
        getAccountBalance: 0,
      });
      testAccount.getAccountTransactions().push(testTransaction);
      testAccount.getAccountTransactions().push(testTransaction2);
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransaction2 = undefined;
      testAccount = undefined;
    });

    it("Requirement 10 - Test 1) should call the printStatement function of Printer Class", () => {
      //This is a test that checks if the printStatement function of Printer Class can be called
      //Arrange
      //Act
      spyOn(Printer, "printStatement");
      Printer.printStatement();
      //Assert
      expect(Printer.printStatement).toHaveBeenCalledWith();
    });

    it("Requirement 10 - Test 2) should call the printStatement function of Printer Class", () => {
      //This is a test that checks if the printStatement function console.log() been called
      //Arrange
      const spy = spyOn(console, "log");
      //Act

      let accountTransactions = testAccount.getAccountTransactions();
      Printer.printStatement(accountTransactions);
      //Assert
      expect(spy).toHaveBeenCalled();
    });

    it("Requirement 10 - Test 3) should call the printStatement function of Printer Class", () => {
      //This is a test that checks if the printStatement function console.log() been called the correct number of times
      //Arrange
      const spy = spyOn(console, "log");
      //Act
      const accountTransactions = testAccount.getAccountTransactions();
      Printer.printStatement(accountTransactions);

      //Assert
      expect(spy).toHaveBeenCalledTimes(
        testAccount.getAccountTransactions().length + 1 // +1 accounts for the extra console.log() for the header
      );
    });

    it("Requirement 10 - Test 4) should call the printStatement function of Printer Class", () => {
      //This is a test that checks if the printStatement function console.log() been called the correct number of times with the correct arguments
      //Arrange
      const spy = spyOn(console, "log");
      //Act
      const accountTransactions = testAccount.getAccountTransactions();
      Printer.printStatement(accountTransactions);

      //Assert
      accountTransactions.forEach((accountTransaction) => {
        const expected = Printer.formatTransaction(accountTransaction);
        expect(spy).toHaveBeenCalledWith(expected);
      });
    });
    it("Requirement 10 - Test 5) should call the printStatement function of Printer Class", () => {
      //This is a test that checks if the printStatement function throws an error if no transactions are present in array
      //Arrange
      const accountTransactionsEmpty = [];
      //Act
      //Assert
      expect(() => {
        Printer.printStatement(accountTransactionsEmpty);
      }).toThrowError("No transactions to print");
    });
  });

  describe("Requirement 11 Tests - Statement Printer colour output", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransaction2;

    beforeEach(() => {
      testTransaction = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 1000,
        getDebit: 1000,
      });
      testTransaction.currentBalance = 1000;
      testTransaction2 = jasmine.createSpyObj("testTransaction", {
        getDate: "10-01-2012",
        getCredit: 1000,
        getDebit: 1000,
      });
      testTransaction2.currentBalance = -1000;
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransaction2 = undefined;
    });

    it("Requirement 11 - Test 1) should call the formatDebit function of Printer Class", () => {
      //This is a test that checks if the formatDebit function of Printer Class returns the debit in red color
      // Arrange
      const expected = "\x1b[31m";
      // Act
      const output = Printer.formatDebit(testTransaction);
      // Assert
      // Check if the output includes the ANSI escape code for red color
      expect(output).toContain(expected);
    });
    it("Requirement 11 - Test 2) should call the formatCredit function of Printer Class", () => {
      //This is a test that checks if the formatCredit function of Printer Class returns the credit in green color
      // Arrange
      const expected = "\x1b[32m";
      // Act
      const output = Printer.formatCredit(testTransaction);
      // Assert
      // Check if the output includes the ANSI escape code for red color
      expect(output).toContain(expected);
    });
    it("Requirement 11 - Test 3) should call the formatBalance function of Printer Class", () => {
      //This is a test that checks if the formatBalance function of Printer Class returns the balance in green color when credit is positive
      // Arrange
      const expected = "\x1b[32m";
      // Act
      const output = Printer.formatBalance(testTransaction);
      // Assert
      // Check if the output includes the ANSI escape code for red color
      expect(output).toContain(expected);
    });
    it("Requirement 11 - Test 4) should call the formatBalance function of Printer Class", () => {
      //This is a test that checks if the formatBalance function of Printer Class returns the balance in red color when credit is negative
      // Arrange
      const expected = "\x1b[31m";
      // Act
      const output = Printer.formatBalance(testTransaction2);
      // Assert
      // Check if the output includes the ANSI escape code for red color
      expect(output).toContain(expected);
    });
  });
});
