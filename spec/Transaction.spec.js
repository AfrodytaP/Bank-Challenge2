import Transaction from "../src/Transaction.js";

describe("Transaction Class Tests", () => {
  //This is a suite of tests for the Transaction class
  describe("Testing the Date aspect", () => {
    // Will replace REPEATED arrange code
    let testTransaction, testTransactionEmpty;

    beforeEach(() => {
      testTransaction = new Transaction("10-01-2012", 1000, 0, 1000);
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    //This is a suite of tests for requirements 4
    it("Requirement 4 - Test 3) should create a new instance of Transaction Class", () => {
      //This is a tests that checks if an instance of Transaction Class can be made
      //Arrange
      //Act
      //Assert
      expect(testTransaction).toBeInstanceOf(Transaction);
    });

    it("Requirement 4 - Test 4) should call the getDate function of Transaction Class", () => {
      //This is a tests that checks if the getDate function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getDate");
      testTransaction.getDate();
      //Assert
      expect(testTransaction.getDate).toHaveBeenCalledWith();
    });

    it("Requirement 4 - Test 5) should call the getDate function of Transaction Class", () => {
      //This is a tests that checks if the getDate function returns the set date

      //Arrange
      const expected = "10-01-2012";
      //Act
      //Assert
      expect(testTransaction.getDate()).toBe(expected);
    });

    it("Requirement 4 - Test 6) should call the getDate function of Transaction Class", () => {
      //This is a tests that checks if the date is not set the current date will be used
      //Arrange
      const expected = new Date().toLocaleDateString();
      testTransactionEmpty = new Transaction();
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
    });

    afterEach(() => {
      testTransaction = undefined;
      testTransactionEmpty = undefined;
    });

    it("Requirement 4 - Test 7) should call the getCredit function of Transaction Class", () => {
      //This is a tests that checks if the getCredit function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(testTransaction, "getCredit");
      testTransaction.getCredit();
      //Assert
      expect(testTransaction.getCredit).toHaveBeenCalledWith();
    });
  });
});
