const canvas = document.querySelector("#canvas")
const pixel = document.querySelector(".grid-item")
const resetButton = document.querySelector("#reset")
let gridSize;

function fill(i) {
  let pixelToFill = document.getElementById(`${i}`)
  let randomC = Math.floor(Math.random() * 360)
  if (!pixelToFill.style.backgroundColor) {
    pixelToFill.style.backgroundColor = `hsl(${randomC}, 100%, 50%)`
    pixelToFill.setAttribute("data-color", `${randomC}`)
    pixelToFill.setAttribute("data-brightness", `50`)
  } else {
    let colorDarken = parseInt(pixelToFill.getAttribute("data-brightness")) - 5
    let color = parseInt(pixelToFill.getAttribute("data-color"))
    
    pixelToFill.setAttribute("data-brightness", `${colorDarken}`)
    pixelToFill.style.backgroundColor = `hsl(${color}, 100%, ${colorDarken}%)`
  }
  
}

function newCanvas(p) {
  gridSize = p * p;
  if (typeof(p) != "number" || !p || p > 150) newCanvas(parseInt(prompt("Enter grid size (max 150): ")))
  for (let i = 1; i <= (gridSize); i++) {
    const gridItem = document.createElement("div")
    gridItem.setAttribute("id", `${i}`)
    gridItem.classList.add("grid-item")
    document.getElementById("canvas").style.gridTemplateColumns = `repeat(${p}, 1fr)`
    document.getElementById("canvas").style.gridTemplateRows = `repeat(${p}, 1fr)`
    gridItem.addEventListener("mouseenter", () => {
      fill(i)
    })
    canvas.appendChild(gridItem)
  }
}

resetButton.addEventListener("click", () => {
  canvas.innerHTML = ""
  newCanvas(parseInt(prompt("Enter grid size (max 150): ")))
})
