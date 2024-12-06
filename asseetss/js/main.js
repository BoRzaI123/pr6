"use strict";

let surname = prompt("Введите число", 'число');


for (let i = 0; i < surname; i++) {
    const div = document.createElement("div");
    div.textContent = 'Блок';
    div.style.border = "1px solid black";
    
    document.body.append(div);
}

