import Transaction from "../src/Transaction.js";

describe("Transaction Class Tests", () => {
  //This is a suite of tests for the Transaction class
  describe("Testing the Date aspect", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = new Transaction("10-01-2012", 1000, 0, 1000);
      testTransactionEmpty = new Transaction();
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    //This is a suite of tests for requirements 4
    it("Requirement 4 - Test 3) should create a new instance of Transaction Class", () => {
      //This is a test that checks if an instance of Transaction Class can be made
      //Arrange
      //Act
      //Assert
      expect(testTransaction).toBeInstanceOf(Transaction);
    });

    it("Requirement 4 - Test 4) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getDate function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getDate");
      testTransaction.getDate();
      //Assert
      expect(testTransaction.getDate).toHaveBeenCalledWith();
    });

    it("Requirement 4 - Test 5) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getDate function returns the set date

      //Arrange
      const expected = "10-01-2012";
      //Act
      //Assert
      expect(testTransaction.getDate()).toBe(expected);
    });

    it("Requirement 4 - Test 6) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the date is not set the current date will be used
      //Arrange
      const expected = new Date().toLocaleDateString();
      //Act
      //Assert
      expect(testTransactionEmpty.getDate()).toBe(expected);
    });
  });

  describe("Testing the Credit aspect", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = new Transaction("10-01-2012", 1000, 0, 1000);
      testTransactionEmpty = new Transaction();
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    it("Requirement 4 - Test 7) should call the getCredit function of Transaction Class", () => {
      //This is a test that checks if the getCredit function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getCredit");
      testTransaction.getCredit();
      //Assert
      expect(testTransaction.getCredit).toHaveBeenCalledWith();
    });

    it("Requirement 4 - Test 8) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getCredit function returns the set credit amount
      //Arrange
      const expected = 1000;
      //Act
      //Assert
      expect(testTransaction.getCredit()).toBe(expected);
    });

    it("Requirement 4 - Test 9) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getCredit function returns 0 if credit amount is not set
      //Arrange
      const expected = 0;
      //Act
      //Assert
      expect(testTransactionEmpty.getCredit()).toBe(expected);
    });
  });

  describe("Testing the Debit aspect", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = new Transaction("10-01-2012", 0, 1000, 1000);
      testTransactionEmpty = new Transaction();
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    it("Requirement 4 - Test 10) should call the getDebit function of Transaction Class", () => {
      //This is a test that checks if the getDebit function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getDebit");
      testTransaction.getDebit();
      //Assert
      expect(testTransaction.getDebit).toHaveBeenCalledWith();
    });

    it("Requirement 4 - Test 11) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getDebit function returns the set debit amount
      //Arrange
      const expected = 1000;
      //Act
      //Assert
      expect(testTransaction.getDebit()).toBe(expected);
    });
    it("Requirement 4 - Test 12) should call the getDate function of Transaction Class", () => {
      //This is a test that checks if the getDEbit function returns 0 if debit amount is not set
      //Arrange
      const expected = 0;
      //Act
      //Assert
      expect(testTransactionEmpty.getDebit()).toBe(expected);
    });
  });

  describe("Testing the Balance aspect", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = new Transaction("10-01-2012", 0, 1000, 1000);
      testTransactionEmpty = new Transaction();
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    it("Requirement 4 - Test 13) should call the getBalance function of Transaction Class", () => {
      //This is a test that checks if the getBalance function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getBalance");
      testTransaction.getBalance();
      //Assert
      expect(testTransaction.getBalance).toHaveBeenCalledWith();
    });

    it("Requirement 4 - Test 14) should call the getBalance function of Transaction Class", () => {
      //This is a test that checks if the getBalance function returns the set balance amount
      //Arrange
      const expected = 1000;
      //Act
      //Assert
      expect(testTransaction.getBalance()).toBe(expected);
    });
    it("Requirement 4 - Test 15) should call the getBalance function of Transaction Class", () => {
      //This is a test that checks if the getBalance function returns 0 if balance amount is not set
      //Arrange
      const expected = 0;
      //Act
      //Assert
      expect(testTransactionEmpty.getBalance()).toBe(expected);
    });
  });
});
