const container = document.getElementById("container");
let cell;
let sixteen = document.querySelector(".button");
let sixtyFour = document.querySelector(".button-two");

// Change grid size on click of button
sixteen.addEventListener("click", function () {
    makeCells(256);

    sixteen.disabled = true;
    sixtyFour.disabled = true;
});

sixtyFour.addEventListener("click", function () {
    makeCells(4096);

    container.style.gridTemplateColumns = "repeat(64, 1fr)";
    container.style.gridTemplateRows = "auto";

    sixteen.disabled = true;
    sixtyFour.disabled = true;
});

// Takes number of cells input and makes a grid
function makeCells(cellNum) {
    // Creates rows
    for (let i = 0; i < cellNum; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className = "cell";

        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = "black";
        });
    }
}
