// JAVASCRIPT TYPES

// 1. Number

3 + 4;
3 * 5;
6 / 2;
3 - 2;
15 % 5;

// 2. String
"hello" + "there!";

// 3. Boolean
true;
false;

// 4. Undefined

// JAVASCRIPT VARIABLES
let george = "testing";
console.log(george);

// prompt
// alert
let first = console.log("enter first number");
let second = console.log("enter second number");
let sum = Number(first) + Number(second);

// undefined
let password;
console.log(password);

// Javascript Conditional

// if, else if, else
let name = "Dennis";
if (name === "Dennis") {
  console.log("Hi there Dennis");
} else if (name === "Jackie") {
  console.log("Hi there Jackie!");
} else {
  console.log("Hi there Jayden!");
}

// Comparisons
// !==
// ===
// >=
// <=
// >
// <

// Javascript DOM
document.write("hello"); //--> document is a screen in the browser
window; // -- parent of document
window.alert("check check");

// DOM Selectors

// getElementsByTagName
document.getElementsByTagName("second");
// getElementsByClassName
document.getElementsByTagName("first");
// getElementById
document.getElementById("tags");
// querySelector
document.querySelector("h1");
// querySelectorAll
document.querySelectorAll("h1");
// getAttribute
document.querySelector("li").getAttribute("random");
// set attribute
document.querySelector("li").setAttribute("test");
// className
document.querySelector("h1").className("test");
// classList
document.querySelector("li").classList;
//add
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
document.querySelector("li").classList.toggle("done");
// innerHTML
document.querySelector("h1").innerHTML = "<strong>!!!</strong>";
// parent element
document.querySelectorAll("li")[1].parentElement;
//children
document.querySelectorAll("li")[1].parentElement.children;
// getElementsByTagName
document.getElementsByTagName("button");

// Events
let button = document.getElementsByTagName("button")[0];
// keyboard events and mouse events
button.addEventListener("click", () => {
  console.log("CLICKED!");
});

// append and createElement
let button = document.getElementsById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick());

input.addEventListener("keypress", addListAfterKeypress());
