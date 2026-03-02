function bankAccount() {
    let balance = 0;

    function deposit(amount) {
        balance+=amount;
    }

    function withdraw(amount) {
        if(amount>balance) {
            console.log("Insufficient balance!");
        } else {
            balance-=amount;
        }
    }

    function getBalance() {
        console.log(balance);
    }

    return Object.freeze({
        deposit,
        withdraw,
        getBalance
    });
}

let account=bankAccount();

account.deposit(5000);
account.withdraw(1000);
account.getBalance();