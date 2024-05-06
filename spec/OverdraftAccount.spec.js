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
      //Assert
      expect(testOverdraftAccount).toBeInstanceOf(OverdraftAccount);
    });
    it("Requirement 13 - Test 2) should call the getOverdraftAccount function of OverdraftAccount Class", () => {
      //This is a test that checks if the getOverdraftAccount function of OverdraftAccount Class can be called
      //Arrange
      const expected = 3000;
      //Act
      //Assert
      expect(testOverdraftAccount.getOverdraftAccount()).toBe(expected);
    });
  });
});
