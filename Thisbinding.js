const person = {
    name: 'peter',
    birthYear: 1994,
    calcAge: function() {
    console.log(2018 - this.birthYear);
}
}
person.calcAge(); 
// 'this' refers to 'person', because 'calcAge' was called with //'person' object reference
const calculateAge = person.calcAge;
calculateAge();
const calculateAge1 = person.calcAge.bind(person);
calculateAge1();
// 'this' refers to 'person', because 'bind' was used to set the object reference
let a = 20;
const b = 30;
var c;
function multiply(e, f) {
    var g = 20;
 return e * f * g;
}
c = multiply(20, 30);
console.log(c);