const btn = document.getElementById("btn");

const square = document.getElementById("square");

const range = document.getElementById("range");

const rangeText = document.getElementById("range-span");

const text = document.getElementById("text");

const circle = document.getElementById("circle");

const ebtn = document.getElementById("e_btn");

const span = document.getElementById("text-span");

let color = "red";

let hight;

let width;

const colorSave = function (event) {
  color = event.target.value;
};

text.addEventListener("change", colorSave);

const colorChange = function (event) {
  square.style.backgroundColor = color;
};

btn.addEventListener("click", colorChange);

ebtn.style.display = "none";

const sizeChange = function (event) {
  rangeText.textContent = event.target.value;
  let value = event.target.value;
  width = value + "%";
  hight = value + "%";
  circle.style.height = width;
  circle.style.width = hight;
};

range.addEventListener("input", sizeChange);
