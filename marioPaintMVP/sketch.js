/*
Current problems with code:
    When circle color changes so does button color. I think this is unavoidable without importing another p5 library.
    Everything else is beautiful.
*/
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var buttonWidth = 100;
var buttonHeight = 55;
var ballColor = 255;
var ballColor1 = 255;
var button1XPos = canvasWidth - (canvasWidth - 10);
var button2XPos = canvasWidth - (canvasWidth - (buttonWidth + 30));
var button3XPos = canvasWidth - (canvasWidth - (buttonWidth * 2 + 50));
var button4XPos = canvasWidth - (canvasWidth - (buttonWidth * 3 + 70));
var buttonYPos = canvasHeight - (10 + buttonHeight);

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(225);
}
//Draws the buttons and accompanying text + controls color
function draw() {
    fill(ballColor1);
//this gives the button 10 pixels of space away from the left edge & bottom of the canvas
    const button1 = rect(button1XPos, buttonYPos, buttonWidth, buttonHeight);
    stroke(0);
    text('Blue', button1XPos + 40, buttonYPos + 32);
    //this gives the button 20 pixels of separation from the previous button, and 10 pixels from the bottom of the canvas
    const button2 = rect(button2XPos, buttonYPos, buttonWidth, buttonHeight);
    stroke(0);
    text('Warm Pink', button2XPos + 20, buttonYPos + 32);
//this gives the button 20 pixels of separation from the previous button, and 10 pixels from the bottom of the canvas
    const button3 = rect(button3XPos, buttonYPos, buttonWidth, buttonHeight); 
    stroke(0);
    text('White', button3XPos + 35, buttonYPos + 32); 
//this gives the button 20 pixels of separation from the previous button, and 10 pixels from the bottom of the canvas
    const button4 = rect(button4XPos, buttonYPos, buttonWidth, buttonHeight); 
    stroke(0);
    text('Reset', button4XPos + 35, buttonYPos + 32); 
}
//Draws the random ellipses
function mouseDragged() {
    randomNum = random(0, 101);
    fill(ballColor);
    ellipse(mouseX, mouseY, randomNum, randomNum);
 }
//Controls what happens when the box is clicked
function mouseClicked() {  
    let distanceFromButton1 = dist(mouseX, mouseY, button1XPos, buttonYPos);
    let distanceFromButton2 = dist(mouseX, mouseY, button2XPos, buttonYPos);
    let distanceFromButton3 = dist(mouseX, mouseY, button3XPos, buttonYPos);
    let distanceFromButton4 = dist(mouseX, mouseY, button4XPos, buttonYPos);
    
    if (distanceFromButton1 <= buttonWidth) {
        ballColor = "#99badd";
    } else if (distanceFromButton2 <= buttonWidth) {
        ballColor = "#ffb7c5";
    } else if (distanceFromButton3 <= buttonWidth) {
        ballColor = 255;
    } else if (distanceFromButton4 <= buttonWidth) {
        background(225);
        ballColor = 255;
    }
  }

  // FUTURE add-on: Instead of randomly sized circles....randomly sized POKEBALLS!