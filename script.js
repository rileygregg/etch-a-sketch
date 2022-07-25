const container = document.getElementById("container");
let sixteen = document.querySelector(".button");
let sixtyFour = document.querySelector(".button-two");
const resetButton = document.querySelector(".button-reset");
const blackWhite = document.querySelector(".black");
const techno = document.querySelector(".rgb");

// Change grid size on click of button
sixteen.addEventListener("click", function () {
    makeCells(256);

    sixteen.style.backgroundColor = "darkgrey";
    sixteen.style.color = "white";
    sixteen.disabled = true;
    sixtyFour.disabled = true;
});

sixtyFour.addEventListener("click", function () {
    makeCells(4096);

    container.style.gridTemplateColumns = "repeat(64, 1fr)";
    container.style.gridTemplateRows = "auto";

    sixtyFour.style.backgroundColor = "darkgrey";
    sixtyFour.style.color = "white";
    sixteen.disabled = true;
    sixtyFour.disabled = true;
});

resetButton.addEventListener("click", function () {
    window.location.reload();
});

blackWhite.addEventListener("click", function () {
    cell.style.backgroundColor = "black";
});

techno.addEventListener("click", function () {
    cell.style.background = "black";
});
// set the reset button function
// function resetButton() {
//     window.location.reload();
// }

// Takes number of cells input and makes a grid
function makeCells(cellNum) {
    // Creates rows
    for (let i = 0; i < cellNum; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell).className = "cell";

        cell.addEventListener("mouseover", function () {
            cell.style.backgroundColor = randomColor();
        });
    }
}

function randomNumber() {
    return Math.floor(Math.random() * (255 + 1));
}

function randomColor() {
    let randColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randColor;
}

console.log(randomColor());
