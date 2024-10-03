
// Task 1
function Account(accountNumber, balance = 0, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }
  
// Task 2
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`${amount} successfully deposited.`);
    } else {
      console.log("Unable to deposit. Remember, deposit amount must be positive.");
    }
  };
  
  Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`${amount} successfully withdrawn.`);
    } else if (amount > this.balance) {
      console.log("This amount is greater than the funds available.");
    } else {
      console.log("Unable to withdraw. Remember, withdrawal amount must be positive.");
    }
  };

// Task 3
Account.prototype.calculateInterest = function(rate, years, timesCompoundedPerYear) {
    const principal = this.balance;
    const r = rate / 100;
    const n = timesCompoundedPerYear;
    const t = years;
  
    const compoundInterest = principal * Math.pow(1 + r / n, n * t);
    console.log(`Balance after interest has compounded: ${compoundInterest}`);
    return compoundInterest;
  };
  
const newAccount = new Account(8599, 900.08, "Owen Owl")
newAccount.deposit(100)
newAccount.withdraw(1210)
newAccount.withdraw(50)
newAccount.calculateInterest(3, 10, 1)