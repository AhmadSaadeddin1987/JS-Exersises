class person {
    constructor(name, age , nationality) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }
    talk(Arabic) {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I am ${this.nationality}. I ${Arabic ? 'speak Arabic' : 'do not speak Arabic'}.`);
    }
    sleep () {
        console.log(`${this.name} is sleeping.`);
    }
}
const person1 = new person('Ahmad', 38, 'Palestinian');
person1.talk(true);
person1.sleep();
const person2 = new person('Veronika', 29, 'Russian');
person2.talk(false);
console.log(person1 instanceof person);
console.log(person2 instanceof person);
