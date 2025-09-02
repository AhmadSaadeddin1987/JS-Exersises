function SayGoodbye() {
    console.log("Goodbye ");
    function SayHello() {
        console.log("Hello ");
    }
    return SayHello;
}
SayGoodbye()();
function counter() {
    let count = 0;
    return function() {
    count++;
    console.log(count);
}
}
const x = counter();
x();
x();
x();
function makeMultiplier(factor) {
    return function(number) {
    return number * factor;
    }
}

const double = makeMultiplier(2)(5);
const triple = makeMultiplier(3)(8);
console.log(double);
console.log(triple);
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
    deposit: function(amount) {
    balance += amount;
    console.log(`u deposit current balance: ${balance}`);
    },
    withdraw: function(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log(`u withdraw current balance: ${balance}`);
    } else {
        console.log("u insufficient funds");
    }
    },
    getBalance: function() {
    return balance;
    }
    };
}

const account = createBankAccount(150);
account.deposit(100);
account.withdraw(25);
console.log(account.getBalance());


    let a = 3
    function addTwo(x) {
    let ret = x + 2
    return ret
}
    let b = addTwo(a)
console.log(b)

let val1 = 2
function multiplyThis(n) {
  let ret = n * val1
return ret
}
let multiplied = multiplyThis(6)
console.log('The result is  :', multiplied)

let val = 7
    function createAdder() {
    function addNumbers(a, b) {
    let ret = a + b
    return ret
    }
    return addNumbers
}
let adder = createAdder()
let sum = adder(val, 12)
console.log('example of function returning a function: ', sum);

let c = 4
const addX = x => n => n + x
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d)