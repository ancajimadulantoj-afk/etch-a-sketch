let cellContainer = document.querySelector(".cell-container");
const gridSizeInput = document.querySelector("#gridSize");
const confirmbtn = document.querySelector(".confirmSizeBtn");
const btnsLeft = document.querySelector(".btns-left")
const btnsRight = document.querySelector(".btns-right")


confirmbtn.addEventListener("click", () => {
    let size = Number(gridSizeInput.value);
    if (size > 100) return alert("Numero invalido, ingrese un numero del 1 al 100")
    if (size < 1) return alert("Numero invalido, ingrese un numero del 1 al 100")
    cellContainer.innerHTML = ""
    btnsLeft.innerHTML = ""
    btnsRight.innerHTML = ""
    for (let i = 0; i < size * size ; i += 1) {
        let cell = document.createElement("div");
        cellContainer.classList.add("has-border")
        cell.classList.add("cell");
        cellContainer.appendChild(cell);
        cell.addEventListener("mouseover", colorCell)
        cell.style.width = `${450 / size}px`
        cell.style.height = `${450 / size}px`
    }
    btn()
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

function btn() {
    let btn1 = document.createElement("button")
    btn1.classList.add("btn1")
    btnsLeft.appendChild(btn1)
    btn1.textContent = "Shadow"
    let btn2 = document.createElement("button")
    btn2.classList.add("btn2")
    btnsLeft.appendChild(btn2)
    let btn3 = document.createElement("button")
    btn3.classList.add("btn3")
    btnsRight.appendChild(btn3)
    btn3.textContent = "Delete"
    let btn4 = document.createElement("button")
    btn4.classList.add("btn4")
    btnsRight.appendChild(btn4)
    btn4.textContent = "cell border"
}