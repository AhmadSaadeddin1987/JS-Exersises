function Person(name, age) {
    this.name = name;
    this.age = age;
    this.talk = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
    this.wakeUp = function(wakeUpEarly) {
        if (wakeUpEarly) {
            console.log(`${this.name} is waking up early.`);
        } else {
            console.log(`${this.name} is sleeping in.`);
        }
    };
    this.sleep = function() {
        console.log(`${this.name} is sleeping.`);
    };
    }
const person1 = new Person('Ahmad', 38);
person1.talk();
person1.wakeUp(true);
const person2 = new Person('Veronika', 29);
person2.talk();
person2.wakeUp(false);
person2.sleep();

Person.prototype.eat = function(food) {
    console.log(`${this.name} is eating ${food}.`);
};
person1.eat('pizza');
person2.eat('salad');