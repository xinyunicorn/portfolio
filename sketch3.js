let eyes = []

class Eye {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.size = size
  }

  update(newX, newY) {
    let angle = atan2(newY - this.y, newX - this.x)
    this.pupilX = this.x + cos(angle) * this.size * 0.2
    this.pupilY = this.y + sin(angle) * this.size * 0.2
  }

  show() {
    fill(255)
    ellipse(this.x, this.y, this.size)
    
    fill(0)
    ellipse(this.pupilX, this.pupilY, this.size * 0.5)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  for (let i = 0; i < eyes.length; i++) {
    eyes[i].update(mouseX, mouseY)
    eyes[i].show()
  }
}

function mousePressed() {
  eyes.push(new Eye(mouseX, mouseY, random(30, 70)))
}