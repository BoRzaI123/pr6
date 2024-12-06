"use strict";

const divElement = document.querySelector("div");
console.log(divElement);

const ulElement = document.querySelector("ul");
console.log(ulElement);

const secondLiElement = ulElement.querySelectorAll("li")[1];
console.log(secondLiElement);

const liElements = document.querySelectorAll("li");

liElements.forEach(li => li.classList.add("list-item"));

console.log(liElements);
