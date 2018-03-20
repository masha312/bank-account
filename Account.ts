class Account {
    private balance:string;
    constructor(theBalance:string) {
        this.balance = theBalance;
    }

    
    get theBalance(): string {
        return this.balance;
    }

    set theBalance(newBalance: string) {
        this.balance = newBalance;
    }

    //notify
    notify = (amount: number, approvedTrans: boolean) => {
        if (approvedTrans) {
            document.getElementById("confirm").innerHTML = "$"+ amount.toString() + " has been withdrawn from your account.";
        } else {
            document.getElementById("confirm").innerHTML = "Insufficient funds.";
        }
    }

    //withdraw
    withdraw = (amount: number) => {
        let currBal = parseFloat(this.balance);
        if (currBal >= amount) {
            let newBal = currBal - amount;
            this.balance = newBal.toString();
            this.notify(amount, true);
        } else {
            this.notify(amount, false);
        }
    }

    
    //showBalance
    showBalance = () => {
        document.getElementById("confirm").innerHTML = "You have $" + this.balance + " in your account.";
    }
}

var user_account: any;

function createNewAccount() {
    let input:HTMLInputElement = document.getElementById("openAccount") as HTMLInputElement;
    let inputtedVal: string = input.value;
    user_account = new Account(inputtedVal);
    document.getElementById("confirm").innerHTML = "Your account was created successfully.";
}

function withdrawFromAccount() {
    let input:HTMLInputElement = document.getElementById("withdrawAmount") as HTMLInputElement;
    let inputtedVal: string = input.value;
    let wAm: number = parseFloat(inputtedVal);
    user_account.withdraw(wAm);
}

function showCurrBalance() {
    user_account.showBalance();
}
