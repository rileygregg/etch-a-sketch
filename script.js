// set variables
let container = document.querySelector("#container");
let rows = document.querySelector(".rows");
let columns = document.querySelector(".columns");

// create default grid size 16 x 16
function createGrid() {
    createRow(16);
    createColumn();
}

// create function that makes rows based on argument
function createRow(entry) {
    for (let i = 0; i < entry; i++) {
        let rowBoxes = document.createElement("div");
        rowBoxes.classList.add("row-boxes");
        container.appendChild(rowBoxes);
    }
}

function createColumn() {
    for (let i = 0; i < createRow(16); i++) {
        let columnBoxes = document.createElement("div");
        columnBoxes.classList.add("column-boxes");
        container.appendChild(columnBoxes);
    }
}

createRow(16);
createColumn();
