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