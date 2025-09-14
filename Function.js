/*function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
    }

    function addTwoNumbers(number1, number2) {
    return number1 + number2;
    }
console.log(multiplyTwoNumbers(2, 3)); // 6
console.log(addTwoNumbers(21, 3)); // 24
let x=3;
console.log(addTwoNumbers(x, 3)); // 6

function multiplyTwoNumbers(number1, number2) {
   console.log(number1 * number2);
}
multiplyTwoNumbers(2, 3); // 6
multiplyTwoNumbers(21, 3); // 63
let y = Math.random();
y = Math.floor(y * 10) + 1;
console.log(y);
let z = Math.random();
console.log(z);
function multiplyTwoNumbers(number1, number2) {
    return number1 * number2;
    }
const multiply = multiplyTwoNumbers(2, 3);
console.log(multiply); // 6 
const sum = function (number1, number2) {
    return number1 + number2;
} 
console.log(sum(2, 3)); // 5
console.log(sum(21, 3));
let s = " this      is          a     string  ";
s = s.trim().replace(/\s+/g, " ");
console.log(s)
const v = Math.round(4.5);
console.log(v);
const r = Array.from([1, 3, 3]);
console.log(r);
const p = Array.from([1, 2, 3], x => x * 2);
console.log(p);
const str = "abc";
console.log([...str]); // ['a', 'b', 'c']
console.log(Array.from(str)); // ['a', 'b', 'c']
const set = new Set(['foo', 'bar', 'baz', 'foo', 'bar']);
console.log([...set]);
function test() {
    console.log(Array.from(arguments));
    }
    test(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
    test('a', 'b', 'c');
    
const myMap = new Map();

// Add key-value pairs
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set(3, "three"); // number key
myMap.set({x: 10}, "object key"); // object key
myMap.set("object key", {x: 10});
console.log(myMap.get("a")); // 1
console.log(myMap.get(3)); // "three"
console.log(myMap.get({x: 10}));// undefined (different object reference)
console.log(myMap.get("object key")); // {x: 10}

// Check existence of keys
console.log(myMap.has("b")); // true
console.log(myMap.has({x: 10})); // false
let n = 20;
console.log(n.toString(2)); // "10100" (binary)
console.log(n.toString(16)); // "14" (hexadecimal)
console.log(typeof n); // "number"
console.log(typeof n.toString(2)); // "string"

const manhattan = function (p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
}
console.log(manhattan({x: 2, y: 4}, {x: 8, y: 8})); // 10*/
const m = (a, b) => {console.log(a + b);}
m(3,42);