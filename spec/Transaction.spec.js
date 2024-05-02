import Transaction from "../src/Transaction.js";

describe("Transaction Class Tests", () => {
  //This is a suite of tests for the Transaction class
  describe("Requirement 4 Tests 3", () => {
    // Will replace REPEATED arrange code
    let testTransaction;

    beforeEach(() => {
      testTransaction = new Transaction();
    });

    afterEach(() => {
      testTransaction = undefined;
    });

    //This is a suite of tests for requirements 4
    it("Requirement 4 - Test 3) should create a new instance of Transaction Class", () => {
      //This is a test that checks if an instance of Transaction Class can be made
      //Arrange
      //Act
      //Assert
      expect(testTransaction).toBeInstanceOf(Transaction);
    });
  });
});
