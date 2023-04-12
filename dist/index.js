"use strict";
// Basic types
let id = 5;
let company = 'Alexander Kacharava';
let isPublish = true;
let x = 'Hello';
let age = 90;
let ids = [1, 2, 3, 4, 5];
ids.push(30);
let arr = ['1', 1, false];
// Tuple
let person = [1, 'Alex', true];
/// Tuple array
let employee;
employee = [
    [1, "Alex"],
    [2, "Loka"],
    [3, "Mola"],
];
/// Union
let uId = 22;
uId = false;
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Alex'
};
// Type assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
;
const user1 = {
    id: 1,
    name: "Alex",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
;
// Classes
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const alex = new Person(1, 'Alex');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empl = new Employee(3, 'Brad', 'Entry level');
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numbArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['Alex', 'Brad', 'Joe']);
strArray.push("Hi there");
