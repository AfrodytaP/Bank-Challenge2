import Account from "./Account.js";
import Printer from "./Printer.js";
import Transaction from "./Transaction.js";

// account instance
const account = new Account(1, "Afrodyta Pudlo", [], 0);

console.log("Hello, " + account.getUserName() + "!\n");

// invalid credit input
console.log("User Tried to print statement but no transaction were made.");

// get account transactions
try {
  const accountTransactions = account.getAccountTransactions();
  // print statement
  Printer.printStatement(accountTransactions);
} catch (error) {
  console.log(error.message + `\n`);
}

// transaction instances
const transaction1 = new Transaction("10-01-2012", 1000, null, 1000);
const transaction2 = new Transaction("13-01-2012", 2000, null, 3000);
const transaction3 = new Transaction("14-01-2012", null, 500, 2500);

// deposit and withdraw transactions
account.deposit(transaction1);
account.deposit(transaction2);
account.withdraw(transaction3);

// invalid credit input
console.log("User entered invalid credit input - ten.");
// try catch block to handles the error
try {
  const transaction4 = new Transaction("15-01-2012", "ten", null, 3500);
  account.deposit(transaction4);
} catch (error) {
  console.log(error.message + `\n`);
}

// invalid credit input
console.log("User wanted to withdraw more funds than was available.");

// try catch block to handles the error
try {
  const transaction5 = new Transaction("15-01-2012", null, 30000, -500);
  account.withdraw(transaction5);
} catch (error) {
  console.log(error.message + `\n`);
}

// get account transactions
const accountTransactions = account.getAccountTransactions();

// print statement
Printer.printStatement(accountTransactions);
