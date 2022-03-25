"use strict";
let r = {
    name: 'zs',
    age: 18,
    sex: 'man'
};
console.log(r);
class Ren {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
let r1 = new Ren('zs', 18, 'man');
console.log(r1);
let r2 = new Ren('ls', 18);
console.log(r2);
