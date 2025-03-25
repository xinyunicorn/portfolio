let rows = 5
let cols = 4
let radius = 30
let size = 20
let randColor = [255, 255, 255]
let x = []
let y = []
let isFlower = []

function setup() {
  createCanvas(windowWidth, windowHeight)
 
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x.push(i * (width / cols) + 170)
      y.push(j * (height / rows) + 100)
      isFlower.push(false)
    }
  }
}

function draw() {
  background(255)

  for (let i = 0; i < x.length; i++) {
    if (isFlower[i]) {
      drawFlower(x[i], y[i])
    } else {
      drawCircle(x[i], y[i])
    }
  }
}

function drawCircle(x, y) {
  fill(64,48,14)
  ellipse(x, y, radius * 2)
}

function drawFlower(x, y) {
  fill(randColor[0], randColor[1], randColor[2])
  
  ellipse(x, y - size, size * 2, size * 2)
  ellipse(x, y + size, size * 2, size * 2)
  ellipse(x - size, y, size * 2, size * 2)
  ellipse(x + size, y, size * 2, size * 2)
  
  fill(255, 255, 0)
  ellipse(x, y, size * 2)
}

function mousePressed() {
  for (let i = 0; i < x.length; i++) {
    let d = dist(mouseX, mouseY, x[i], y[i])
    if (d < radius) {
      isFlower[i] = !isFlower[i]
    }
  }

  randColor[0] = random(255)
  randColor[1] = random(255)
  randColor[2] = random(255)
}