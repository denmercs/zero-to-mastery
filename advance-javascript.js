// Javascript Types
// number
// string
// boolean
// undefined
// null
// symbol
// object

/**
 * SCOPE
 */

function aa() {
  console.log("test");
}

window.aa();
// -> test

function bb() {
  var a = "hello";
  console.log(a);
}

console.log(a);
// --> error a is not defined

bb(); //--> result hello

// other test
let c = "Can i access this?";

function bb() {
  let a = "hello";
  console.log(c);
}

bb(); //--> result will be "Can i access this?"

// other test
let b = "Can i access this?";

function bb() {
  b = "hello";
}

bb();
console.log(b); //--> results will be "hello"

// other test
let fun = 5;

function funFunction() {
  // child scope
  let fun = "helloo";
  console.log(1, fun);
}
function funerFunction() {
  // child scope
  let fun = "Byee";
  console.log(2, fun);
}
function funestFunction() {
  // child scope
  fun = "AHHHHH";
  console.log(3, fun);
}

console.log("window", fun);
console.log(fun); //--> results will be "AHHHHH"

// ternary operator
function isUserValid(bool) {
  return bool;
}

let answer = isUserValid(true) ? "You may enter" : "Access Denied";

// results -->  you may enter

// switch statement
function moveCommand(direction) {
  let whatHappens;

  switch (direction) {
    case "forward":
      whatHappens = "you encounter a monster";
      break;
    case "back":
      whatHappens = "you arrived home";
      break;
    case "right":
      whatHappens = "you found a river ";
      break;
    case "left":
      whatHappens = "you run into a troll";
      break;
    default:
      whatHappens = "please enter a valid direction";
  }
  return whatHappens;
}

moveCommand(left);

// let & const

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
}

console.log(wizardLevel); //--> false

experience = 80;
player = "Sally";

console.log(player); //--> error

// const ( you can change the property but you can't reassign in the variable)

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false,
};

obj.wizardLevel = true;

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

const name = "John Snow";
const obj = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
};

const a = "Simon";
const b = true;
const c = {};

const obj = {
  a,
  b,
  c,
};

// template strings
// using --> ``

const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name}, you seems to be ${
  age - 10
}. What a lovely ${pet}!`;

console.log(greetingBest);

function greet(name = "", age = "", pet = "cat") {
  return `Hello ${name}, you seems to be ${age - 10}. What a lovely ${pet}!`;
}

// Symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

sym1;
sym2;
sym3;

sym2 === sym3; // result --> false

// Arrow functions
const add = (a, b) => a + b;

// Advance function
const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Closures
// - a function ran, the function executed. it's never going to execute again but it's going to remember there are references to the variables
// so the child scope always has access of the parents scope.

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };

  return second;
};

const newFunc = first();

newFunc();

// currying
const multiply = (a, b) => a + b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(2); //-->  results will be 6
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); //--> results will be 50

// compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); // result will be 7

// avoid sideeffect, functional purity means we always return something
let a = 1;
function b() {
  a = 2;
}

// Advance arrays
let array = [1, 2, 3, 4, 5];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});

console.log(double);

// map, filter, reduce
const mapArray = array.map((num) => num * 2);

console.log(mapArray);

// map creates a new array and return it

// filter
const filterArrary = array.filter((num) => {
  return num > 5;
});

// reduce
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);

console.log(reduceArray);

// Advance Objects

// reference type
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

object1 == object2; // true
object1 === object3; // false
object2.value = 15;
object2.value; // 15
object3.value; // 10

// context
function scope() {
  let a = 4;
}

function context() {
  console.log(this);
}

const object4 = {
  a: function () {
    console.log(this);
  },
};

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`WEEEE I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard1 = new Wizard("Sean", "Dark Magic");

// pass by reference or by value
let a = 5;
let b = a; // pass by reference

b++; // -> 6

let obj1 = { name: "Yao", password: "123" };
let obj2 = obj1;

obj2.password = "easypeasy";

console.log(obj1);

let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj);
let clone2 = { ...obj };
let superClone = JSON.parse(JSON.stringify(obj));

obj.c = 5;
console.log(clone);
console.log(superClone);

// ES7
// includes

"hello".includes("o"); // true

// **
const square = (x) => x ** 2;

// es8
// padStart()
// padEnd()

'Turtle'.padStart(10); //--> results  "         Turtle"
'Turtle'.padEnd(10); //--> results "Trutle         "


// changes
const fun = (a,b,c,d,) => {
  console.log(a)
}

fun(1,2,3,4)

// objects

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr. Grinch"
}

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key])
})

Object.values(obj).forEach(value => {
  console.log(value)
})

Object.entries(obj).forEach(value => {
  console.log(value)
})

Object.entries(obj).map(value => {
  return value[1] + value[0].replace("username", "")
})

// Async Await
// .flat()

const array = [1,[2,3],[4,[5]]];
array.flat() // results --> [1,2,3,4,5]

array.flat(2) // results --> [1,2,3,4,5]

const entries = ["bob", "sally",,,,,"cindy"];
entries.flat();

// flatMap()
const jurassicPark = [["trex"], 1,2,3,[4,5]];
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + "trex");

// trim start and trim end
let userEmail = "          eddytheeagle@gmail.com";
let userEmail2 = "jonnydangerous@gmail.com";
console.log(userEmail.trimStart());
console.log(userEmail2.trimeEnd());

userProfiles = [["commanderTom", 23], ["derekZlander", 40], ["hansel", 13]];

const obj = Object.fromEntries(userProfiles);
Object.entries(obj)

// try and catch block

try {
  4 + 5
} catch {
  console.log("you messed up!")
}

// advance looping
const basket = ["apples", "oranges", "grapes"];

for(let i = 0; i < basket.length; i++) {
  console.log(basket[i])
}

basket.forEach(item => console.log(item));

// for of
// Iterating -> works in array and strings
for(item of basket) {
  console.log(item);
}

// for in
// works in object
// Enumerating
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

for(item in detailedBasket) {
  console.log(item);
}