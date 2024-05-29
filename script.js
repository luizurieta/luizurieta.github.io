
let circleColor = 0;
let lineColor = 0;
let circles = [];
let lines = [];
let circleCount = 0; 
let lineCount = 0; 
let maxCircleCount = 300; 
let maxLineCount = 500; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  noFill();
  background(200);
}

function draw() {
  // Dibuja líneas primero
  for (let i = 0; i < lines.length; i++) {
    let lineCoords = lines[i];
    stroke(lineCoords[4]); 
    strokeWeight(lineCoords[5]); 
    line(lineCoords[0], lineCoords[1], lineCoords[2], lineCoords[3]);
  }

  // Luego dibuja círculos
  for (let i = 0; i < circles.length; i++) {
    let circleCoords = circles[i];
    fill(circleCoords[4]); 
    noStroke();
    ellipse(circleCoords[0], circleCoords[1], circleCoords[2], circleCoords[3]);
  }
}

function mouseMoved() {
  // Genera círculos si no se ha alcanzado el límite
  if (circleCount < maxCircleCount) {
    if (mouseY <= height / 2) {
      let circleSize = random(1, 40); 
      let circleX = random(width * 0.05, width * 0.95);
      let circleY = random(height * 0.05, height * 0.95);
      circles.push([circleX, circleY, circleSize, circleSize, circleColor]);
      circleCount++; 
    }
  }

  // Genera líneas si no se ha alcanzado el límite
  if (lineCount < maxLineCount) {
    if (mouseY > height / 2) {
      let startX = random(width);
      let startY = random(height);
      let endX = random(width);
      let endY = random(height);
      let lineWidth = random(1, 5);
      lines.push([startX, startY, endX, endY, lineColor, lineWidth]);
      lineCount++; 
    }
  }
}

function keyPressed() {
  // Cambia el color de los círculos al presionar la tecla "1"
  if (key === '1') {
    circleColor = color(random(90, 210), random(200, 230), random(250, 255)); 
    
    for (let i = 0; i < circles.length; i++) {
      circles[i][4] = circleColor;
    }
  }

  // Cambia el color de las líneas al presionar la tecla "2"
  if (key === '2') {
    lineColor = color(random(0, 50), random(50, 100), random(100, 150));
    
    for (let i = 0; i < lines.length; i++) {
      lines[i][4] = lineColor;
    }
  }
}