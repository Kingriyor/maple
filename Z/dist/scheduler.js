"use strict";
class scheduler {
    constructor(name) {
        this.description = "";
        this.name = name;
    }
    setDes(des) {
        this.description = des;
    }
    getDes() {
        return this.description;
    }
}
let mine = new scheduler("hold");
mine.setDes("testing123");
console.log(mine.getDes());
function test(name) {
    return "My name is " + name;
}
console.log(test("Ariyo"));
