// Basic types
let id: number = 5;
let company: string = 'Alexander Kacharava';
let isPublish: boolean = true;
let x: any = 'Hello';
let age: number = 90;
let ids: number[] = [1,2,3,4,5];

ids.push(30);
let arr: any[] = ['1', 1, false];

// Tuple
let person: [number, string, boolean] = [1, 'Alex', true];
/// Tuple array
let employee: [number, string][];

employee = [
  [1, "Alex"],
  [2, "Loka"],
  [3, "Mola"],
];

/// Union
let uId: string | number | boolean = 22
uId = false

// Enum
enum Direction1 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number,
  name: string
}

const user: User = {
  id: 1,
  name: 'Alex'
}

// Type assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number


// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

// Interfaces
interface UserInterface {
  id: number;
  name: string;
  age?: number;
};

const user1: UserInterface = {
  id: 1,
  name: "Alex",
};

interface MathFunc {
  (x: number, y:number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string
};

// Classes
class Person implements PersonInterface {
  id: number
  name: string

  constructor(id:number, name:string) {
    this.id = id,
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const alex = new Person(1, 'Alex')

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const empl = new Employee(3, 'Brad', 'Entry level')

// Generics
function getArray<Type>(items: Type[]): Type[] {
  return new Array().concat(items);
}

let numbArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['Alex', 'Brad', 'Joe']);

strArray.push("Hi there");