let rows = 10
let cols = 10
let pressed = false

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (!pressed){
    let r = mouseX
    let g = mouseY
    let b = 100
    if (r >= 255){
      r = 255 - (r % 255)
    }
    if (g >= 255){
      g = 255 - (g % 255)
    }

    for (let x = 0; x < rows; x++){
      for (let y = 0; y < cols; y++) {
        fill(255)

        if(mouseX > x * (width/rows) && mouseY > y * (height/cols)){
          fill(r, g, b)
        }

        rect(x * (width/rows), y * (height/cols), width/rows)
      }

    }
  }
}

function mousePressed(){
  pressed = !pressed
}