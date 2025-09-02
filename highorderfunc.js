const numbers = [2, 4, 6, 8, 10];

function addTwo(number) {
    return number + 2;
}

const numbersPlusTwo = numbers.map(addTwo);

console.log(numbersPlusTwo);

const fruits = [];
fruits.push("banana", "apple", "peach", "watermelon");
console.log(fruits.length); // 4
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '3', '5']
console.log(fruits.length); // 6