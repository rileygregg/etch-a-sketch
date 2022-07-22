// set variables
let container = document.querySelector(".container-main");
let rows = document.querySelector(".rows");
let columns = document.querySelector(".columns");
let body = document.querySelector("body");

// create elements

let containerInner = document.createElement("div");
let rowBoxes = document.createElement("div");

// create default grid size 16 x 16
function createGrid() {
    createContainer(16);
    createColumn();
}

// create function that makes rows based on argument
function createContainer() {
    for (let i = 0; i < 16; i++) {
        let containerMain = document.createElement("div");
        containerMain.classList.add("container-main");

        let containerInner = document.createElement("div");
        containerInner.classList.add("container-inner");

        body.appendChild(containerMain);
        containerMain.appendChild(containerInner);
    }
}

createContainer(16);

function createColumn() {
    for (let i = 0; i < 16; i++) {
        let containerInner = document.createElement("div");
        rowBoxes.classList.add("row-boxes");
        rowBoxes.textContent = "box";
        containerInner.appendChild(rowBoxes);

        createContainer(16);
    }
}
