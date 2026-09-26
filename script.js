let cellContainer = document.querySelector(".cell-container");
const gridSizeInput = document.querySelector("#gridSize");
const confirmbtn = document.querySelector(".confirmSizeBtn");

confirmbtn.addEventListener("click", () => {
    let size = Number(gridSizeInput.value);
    cellContainer.innerHTML = ""
    for (let i = 0; i < size * size ; i += 1) {
        let cell = document.createElement("div");
        cellContainer.classList.add("has-border")
        cell.classList.add("cell");
        cellContainer.appendChild(cell);
        cell.addEventListener("mouseover", colorCell)
        cell.style.width = `${450 / size}px`
        cell.style.height = `${450 / size}px`
    }
})

function random() {
    let randomRed = Math.floor(Math.random() * 255)
    let randomGreen = Math.floor(Math.random() * 255)
    let randomBlue = Math.floor(Math.random() * 255)
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

function colorCell(event) {
    event.target.style.backgroundColor = random()
}