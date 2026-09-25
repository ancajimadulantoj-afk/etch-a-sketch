let cellContainer = document.querySelector(".cell-container");

for (let i = 0; i < 81; i += 1) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cellContainer.appendChild(cell);
}

const gridSizeInput = document.querySelector("#gridSize");
let size = gridSizeInput.value;
Number(size)