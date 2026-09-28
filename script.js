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
        cell.dataset.count = 0
        cellContainer.appendChild(cell);
        cell.addEventListener("mouseover", colorCell)
        cell.addEventListener("mousedown", colorCell)
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

let shadowMode = false
let clickMode = false
let isDrawing = false

window.addEventListener("mousedown", () => {isDrawing = true})
window.addEventListener("mouseup", () => {isDrawing = false})


function colorCell(event) {
    if (clickMode && !isDrawing) return;

    if (shadowMode) {
        darkenCell(event)
    } else {
        event.target.style.backgroundColor = random()
        event.target.style.opacity = 1
        event.target.dataset.count = 0
    }
}

function darkenCell(event) {
    let count = Number(event.target.dataset.count)
    count += 1
    event.target.dataset.count = count
    count = count / 10
    event.target.style.opacity = count
    event.target.style.backgroundColor = "black"

}

function btn() {
    let cells = document.querySelectorAll(".cell")

    let btn1 = document.createElement("button")
    btn1.classList.add("btn1")
    btnsLeft.appendChild(btn1)
    btn1.textContent = "Shadow"
    btn1.addEventListener("click", () => {
        shadowMode = !shadowMode
    })

    let btn2 = document.createElement("button")
    btn2.classList.add("btn2")
    btnsLeft.appendChild(btn2)
    btn2.textContent = "Draw mode"
    btn2.addEventListener("click", () => {
        clickMode = !clickMode
        btn2.textContent = clickMode ? "Modo: Lapiz" : "Modo: Libre"
    })

    let btn3 = document.createElement("button")
    btn3.classList.add("btn3")
    btnsRight.appendChild(btn3)
    btn3.textContent = "Delete"
    btn3.addEventListener("click", () => {
        cells.forEach((item) => {
            item.style.backgroundColor = ""
            item.dataset.count = 0
        })
    })

    let btn4 = document.createElement("button")
    btn4.classList.add("btn4")
    btnsRight.appendChild(btn4)
    btn4.textContent = "cell border"
    btn4.addEventListener("click", () => {
        cells.forEach((item) => {
            item.classList.toggle("cell-bordered")
        })
    })
}