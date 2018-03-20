"use strict";
var Account = /** @class */ (function () {
    function Account(theBalance) {
        var _this = this;
        //notify
        this.notify = function (amount, approvedTrans) {
            if (approvedTrans) {
                document.getElementById("confirm").innerHTML = "$" + amount.toString() + " has been withdrawn from your account.";
            }
            else {
                document.getElementById("confirm").innerHTML = "Insufficient funds.";
            }
        };
        //withdraw
        this.withdraw = function (amount) {
            var currBal = parseFloat(_this.balance);
            if (currBal >= amount) {
                var newBal = currBal - amount;
                _this.balance = newBal.toString();
                _this.notify(amount, true);
            }
            else {
                _this.notify(amount, false);
            }
        };
        //showBalance
        this.showBalance = function () {
            document.getElementById("confirm").innerHTML = "You have $" + _this.balance + " in your account.";
        };
        this.balance = theBalance;
    }
    Object.defineProperty(Account.prototype, "theBalance", {
        get: function () {
            return this.balance;
        },
        set: function (newBalance) {
            this.balance = newBalance;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
}());
var user_account;
function createNewAccount() {
    var input = document.getElementById("openAccount");
    var inputtedVal = input.value;
    user_account = new Account(inputtedVal);
    document.getElementById("confirm").innerHTML = "Your account was created successfully.";
}
function withdrawFromAccount() {
    var input = document.getElementById("withdrawAmount");
    var inputtedVal = input.value;
    var wAm = parseFloat(inputtedVal);
    user_account.withdraw(wAm);
}
function showCurrBalance() {
    user_account.showBalance();
}
//# sourceMappingURL=Account.js.map