// foreach
const numbers = [1, 2, 3];
numbers.forEach(num => console.log(num * 2));
const result = numbers.forEach(num => num * 2);
console.log(result);
console.log(numbers);
// map
const array = [4, 2, 6];
const doubled = array.map(num => num * 2);
console.log(doubled); 
console.log(array);
// fill
const x = [2,4,5,3,1,6];
x.fill(0, 2, 4);
console.log(x);
// find
const y = [5, 12, 8, 130, 44];
const found = y.find(num => num > 12);
console.log(found);
// findindex
const yz = [5, 12, 8, 130, 44];
const found1 = yz.findIndex(num => num > 12);
console.log(found1);
const numbers1 = [1, 3, 5, 7, 9];

const sum = numbers1.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'watermelon', 'apple'];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count); 

const ages = [22, 25, 29, 15 , 25, 22, 30, 22 , 21 , 18 , 13];
const age = ages.filter(age => age >= 21);
console.log(age);