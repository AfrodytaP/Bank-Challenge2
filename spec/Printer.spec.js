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
      //Assert
      expect(Printer.formatCredit(testTransaction)).toEqual(expected);
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
      //Assert
      expect(Printer.formatDebit(testTransaction)).toEqual(expected);
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
      //Assert
      expect(Printer.formatBalance(testTransaction)).toEqual(expected);
    });

    it("Requirement 8 - Test 3) should call the formatBalance function of Printer Class", () => {
      //This is a test that checks if the formatBalance function returns balance as "" if null
      //Arrange
      const expected = "";
      //Act
      //Assert
      expect(Printer.formatBalance(testTransactionEmpty)).toEqual(expected);
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
        getBalance: 1000,
      });
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
  });
});
