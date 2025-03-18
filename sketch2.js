let fishes = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  for (let i = 0; i < 5; i++) {
    fishes.push(createFish(random(width), random(height)))
  }
}

function draw() {
  background(255)
  for (let i = 0; i < fishes.length; i++) {
    drawFish(fishes[i])
    fishes[i].x += fishes[i].speed
    
    if (fishes[i].x > width - fishes[i].length / 2 || fishes[i].x < 0) {
      fishes[i].speed = -fishes[i].speed
      fishes[i].length = -fishes[i].length
    }
    
    fishes[i].y += sin(fishes[i].x / 20)
  }
}

function drawFish(fish) {
  fill(fish.color)

  triangle(
    fish.x - fish.length / 4,
    fish.y,
    fish.x - fish.length / 1.2,
    fish.y + fish.thickness / 2,
    fish.x - fish.length / 1.2,
    fish.y - fish.thickness / 2
  )
  ellipse(fish.x, fish.y, abs(fish.length), fish.thickness)
  fill(255)
  ellipse(fish.x + fish.length / 4, fish.y, 8)

  fill(0)
  ellipse(fish.x + fish.length / 4, fish.y, 3)
}

function mousePressed() {
  let clicked = false
  for (let i = 0; i < fishes.length; i++) {
    let d = dist(mouseX, mouseY, fishes[i].x, fishes[i].y)
    if (d < fishes[i].thickness / 2) {
      fishes[i].color = color(random(255), random(255), random(255))
      clicked = true
    }
  }
  
  if (!clicked) {
    fishes.push(createFish(mouseX, mouseY))
  }
}

function createFish(x, y) {
  return {
    x: x,
    y: y,
    length: 80,
    thickness: 30,
    speed: random(1, 4),
    color: color(random(255), random(255), random(255))
  }
}