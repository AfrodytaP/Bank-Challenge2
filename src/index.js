import Account from "./Account.js";
import Printer from "./Printer.js";
import Transaction from "./Transaction.js";

// account instance
const account = new Account(1, "Afrodyta Pudlo", [], 0);

console.log("Hello, " + account.getUserName() + "!\n");

// transaction instances
const transaction1 = new Transaction("10-01-2012", 1000, null);
const transaction2 = new Transaction("13-01-2012", 2000, null);
const transaction3 = new Transaction("14-01-2012", null, 500);

// deposit and withdraw transactions
account.deposit(transaction1);
account.deposit(transaction2);
account.withdraw(transaction3);

// get account transactions
const accountTransactions = account.getAccountTransactions();

// print statement
Printer.printStatement(accountTransactions);
//--------------------------------------------------------------
console.log("\n\n");

// account instance
const account2 = new Account(2, "Afrodyta Pudlo", [], 0, 200);

console.log("Hello, " + account2.getUserName() + "!\n");
console.log("User has 200 overdraft.\n");
// transaction instances
const transaction4 = new Transaction("10-01-2012", 1000, null);
const transaction5 = new Transaction("13-01-2012", 2000, null);
const transaction6 = new Transaction("14-01-2012", null, 500);
const transaction7 = new Transaction("16-01-2012", null, 900);
const transaction8 = new Transaction("16-01-2012", null, 900);
const transaction9 = new Transaction("16-01-2012", null, 900);

// get account transactions
try {
  // deposit and withdraw transactions
  account2.deposit(transaction4);
  account2.deposit(transaction5);
  account2.withdraw(transaction6);
  account2.withdraw(transaction7);
  account2.withdraw(transaction8);
  account2.withdraw(transaction9);
} catch (error) {
  console.log(
    error.message + " transaction8 was more than the available funds." + `\n`
  );
}
// get account transactions
const accountTransactions2 = account2.getAccountTransactions();
// print statement
Printer.printStatement(accountTransactions2);
console.log("\n\n");
//--------------------------------------------------------------
// invalid credit input
console.log("User Tried to print statement but no transaction were made.");
// account instance
const account3 = new Account(3, "Afrodyta Pudlo", [], 0, 0);

console.log("Hello, " + account3.getUserName() + "!\n");
// get account transactions
const accountTransactions3 = account3.getAccountTransactions();
// try catch block to handles the error
try {
  // print statement
  Printer.printStatement(accountTransactions3);
} catch (error) {
  console.log(error.message + `\n`);
}
//--------------------------------------------------------------
// invalid credit input
console.log("User entered invalid credit input - ten.");
// try catch block to handles the error
try {
  const transaction10 = new Transaction("15-01-2012", "ten", null);
  account3.deposit(transaction10);
} catch (error) {
  console.log(error.message + `\n`);
}
//--------------------------------------------------------------
// invalid debit input
console.log("User wanted to withdraw more funds than was available.");

// try catch block to handles the error
try {
  const transaction11 = new Transaction("15-01-2012", null, 30000);
  account3.withdraw(transaction11);
} catch (error) {
  console.log(error.message + `\n`);
}
