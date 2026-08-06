class BankAccount {

    accountNumber: number;
    accountHolder: string;
    accountBalance: number;

    constructor(accountNumber: number, accountHolder: string, accountBalance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.accountBalance = accountBalance;
    }
    deposit(depositAmount: number): void {
        this.accountBalance += depositAmount;
        console.log("Deposited Amount: " + depositAmount);
    }
    withdraw(withdrawAmount: number): void {
        if (withdrawAmount <= this.accountBalance) {
            this.accountBalance -= withdrawAmount;
            console.log("Withdrawn Amount: " + withdrawAmount);
        } else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance(): void {
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Holder: " + this.accountHolder);
        console.log("Current Balance: " + this.accountBalance);
    }
}
let bankAccountObject = new BankAccount(1001, "Hasmitha", 5000);
bankAccountObject.deposit(2000);
bankAccountObject.withdraw(1500);
bankAccountObject.displayBalance();