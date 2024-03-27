"use strict";

// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const firstEl = document.createElement("p");
firstEl.style.color = "red";
firstEl.textContent = "Hey I'm red!";
container.appendChild(firstEl);

const secondEl = document.createElement("h3");
secondEl.style.color = "blue";
secondEl.textContent = "I'm a blue h3!";
container.appendChild(secondEl);


const divEl = document.createElement("div");
divEl.classList.add("myDiv");

const headEl = document.createElement("h1");
headEl.textContent = "I'm in a div!";
divEl.appendChild(headEl);

const parEl = document.createElement("p");
parEl.textContent = "ME TOO!";
divEl.appendChild(parEl);

container.appendChild(divEl);