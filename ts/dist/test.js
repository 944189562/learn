"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
let user = { firstName: 'Jane', lastName: 'User' };
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
let user1 = new Student('zs', 'M.', 'li');
console.log(user1);
let ro = [1, 2, 3];
// ro[0] = 1
let a = ro;
a[0] = 5;
function createSquare(config) {
    return { color: 'string', area: 1 };
}
// interface 定义函数
let mySearch;
mySearch = function (source, subString) {
    return false;
};
mySearch = function (src, sub) {
    return false;
};
mySearch = function (src, sub) {
    return false;
};
let myArray;
myArray = ['Blob', 'zs'];
let myStr = myArray[0];
let readonlyStringArray = ['zs', 'ls'];
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
        this.setTime(new Date());
    }
    setTime(d) {
        this.currentTime = d;
    }
}
exports.default = {};
