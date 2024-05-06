import OverdraftAccount from "../src/OverdraftAccount.js";

describe("OverdraftAccount Class Tests", () => {
  //This is a suite of tests for the Account class
  describe("Requirement 13 Tests - OverdraftAccount testing overdraft functionality", () => {
    // Will replace REPEATED arrange code
    let testOverdraftAccount;
    beforeEach(() => {
      testOverdraftAccount = new OverdraftAccount(
        1,
        "Afrodyta",
        [],
        1000,
        "available",
        3000
      );
    });

    afterEach(() => {
      testOverdraftAccount = undefined;
    });

    //This is a suite of tests for requirements 1
    it("Requirement 13 Tests 1) should create a new instance of Account Class", () => {
      //This is a test that checks if an instance of AccountOverdraft Class can be made
      //Arrange
      //Act
      const testOverdraftAccount = new OverdraftAccount();
      //Assert
      expect(testOverdraftAccount).toBeInstanceOf(OverdraftAccount);
    });
  });
});
