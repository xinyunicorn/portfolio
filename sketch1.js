let bubbles = []

class Bubble {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.size = 10
    this.alpha = 255
    this.color = [random(255), random(255), random(255)]
  }

  update() {
    this.size += 2
    this.alpha -= 3
  }

  display() {
    noFill()
    strokeWeight(2)
    stroke(this.color[0], this.color[1], this.color[2], this.alpha)
    ellipse(this.x, this.y, this.size)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(255)
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update()
    bubbles[i].display()
  }
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY))
}