// let balance = 500.00;

// class to create new account
class Account {
  constructor(username) {
    // add a username to identify account
    this.username = username;
    // initialize balance at zero
    this.balance = 0;
  }
};

class Transaction {
  // created superclass to remove the shared code between withdrawal and deposit
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

}

class Deposit extends Transaction {
// method to execute deposit
  commit() {
    this.account.balance += this.amount;
  }
};

class Withdrawal extends Transaction {
 // method to execute withdawal
  commit() {
    this.account.balance -= this.amount;
  }
};





// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);



console.log('Balance:', myAccount.balance);
