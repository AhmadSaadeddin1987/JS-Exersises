const wouter = {
    firstName: "Wouter",
    lastName: "Kleijn",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },

    formatName: function (title, uppercase) {
        const name = `${this.firstName} ${this.lastName}`;
        const full = title ? `${title} ${name}` : name;
        return uppercase ? full.toUpperCase() : full;
    }
};

console.log('original:', wouter.getFullName());

const other = { firstName: 'Ahmad', lastName: 'Saad' };
const boundGetFullName = wouter.getFullName.bind(other);
console.log('bound to other:', boundGetFullName());

const boundToWouter = wouter.getFullName.bind(wouter);
console.log('bound to wouter:', boundToWouter());

// call(thisArg, arg1, arg2, ...)
console.log('call with args ->', wouter.formatName.call(other, 'Mr.', true));
// apply(thisArg, [arg1, arg2, ...])
console.log('apply with args ->', wouter.formatName.apply(wouter, ['Mrs.', true]));
console.log(this);