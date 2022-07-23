const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");

let cells = document.getElementsByClassName("cell");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRow(16);
    makeColumns(16);
}

// Takes (rows, columns) input and makes a grid
function makeCells(cellNum) {
    // Creates rows
    for (let r = 0; r < cellNum; r++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell).className = "cell";
    }
}

makeCells(256);
