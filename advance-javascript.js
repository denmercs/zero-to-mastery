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
