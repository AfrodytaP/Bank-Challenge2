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
      //This is a test that checks if the formatDate function of Transaction Class can be called
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

  describe("Requirement 5 Tests - Credit formatting", () => {
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

    it("Requirement 6 - Test 1) should call the formatCredit function of Printer Class", () => {
      //This is a test that checks if the formatCredit function of Transaction Class can be called
      //Arrange
      //Act
      spyOn(Printer, "formatCredit");
      Printer.formatCredit();
      //Assert
      expect(Printer.formatCredit).toHaveBeenCalledWith();
    });
  });
});
