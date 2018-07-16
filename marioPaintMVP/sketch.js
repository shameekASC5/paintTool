var canvasWidth = 1000; //Set to window.innerWidth and window.innerHeight for full screen
var canvasHeight = 600; 
var buttonWidth = 100;
var buttonHeight = 55;
var ballColor1 = 255;
var buttonSpace = 200;
var button1XPos = canvasWidth - (canvasWidth - 10) + buttonSpace;
var button2XPos = canvasWidth - (canvasWidth - (buttonWidth + 30)) + buttonSpace;
var button3XPos = canvasWidth - (canvasWidth - (buttonWidth * 2 + 50)) + buttonSpace;
var button4XPos = canvasWidth - (canvasWidth - (buttonWidth * 3 + 70)) + buttonSpace;
var button5XPos = canvasWidth - (canvasWidth - (buttonWidth * 4 + 90)) + buttonSpace;
var buttonYPos = canvasHeight - (10 + buttonHeight);
const colorArray = [255, 255, 255];
var randomShape;
// var rect;

function setup() {
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("sketch-holder");
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
    text('Random Color', button4XPos + 15, buttonYPos + 32); 
//this gives the button 20 pixels of separation from the previous button, and 10 pixels from the bottom of the canvas
    const button5 = rect(button5XPos, buttonYPos, buttonWidth, buttonHeight); 
    stroke(0);
    text('Reset', button5XPos + 35, buttonYPos + 32); 
}
//Draws the random ellipses/rects
function mouseDragged() {
    randomNum = random(0, 101);
    fill(colorArray);
    ellipse(mouseX, mouseY, randomNum);
    //Random ellipse or rectangle
    //calculatedChance = Math.floor(Math.random() * 2);
    // if (calculatedChance === 0) {
    // randomShape = ellipse(mouseX, mouseY, randomNum);
    // } else if (calculatedChance === 1) {
    // randomShape = rect(mouseX, mouseY, randomNum, randomNum);
    // }
    
}

//Controls what happens when the box is clicked
function mouseClicked() {  
    let distanceFromButton1 = dist(mouseX, mouseY, button1XPos, buttonYPos);
    let distanceFromButton2 = dist(mouseX, mouseY, button2XPos, buttonYPos);
    let distanceFromButton3 = dist(mouseX, mouseY, button3XPos, buttonYPos);
    let distanceFromButton4 = dist(mouseX, mouseY, button4XPos, buttonYPos);
    let distanceFromButton5 = dist(mouseX, mouseY, button5XPos, buttonYPos);
    //let distanceFromButton6 = dist(mouseX, mouseY, button6XPos, buttonYPos);
    if (distanceFromButton1 <= buttonWidth && buttonYPos) {
        colorArray.splice(0, 1, 153);
        colorArray.splice(1, 1, 186);
        colorArray.splice(2, 1, 221);
        
    } else if (distanceFromButton2 <= buttonWidth) {
        colorArray.splice(0, 1, 255);
        colorArray.splice(1, 1, 183);
        colorArray.splice(2, 1, 197);

    } else if (distanceFromButton3 <= buttonWidth) {
        colorArray.splice(0, 1, 255);
        colorArray.splice(1, 1, 255);
        colorArray.splice(2, 1, 255);
        
    } else if (distanceFromButton4 <= buttonWidth) {
        let num1 = Math.ceil(Math.random() * 255);
        let num2 = Math.ceil(Math.random() * 255);
        let num3 = Math.ceil(Math.random() * 255);
        colorArray.splice(0, 1, num1);
        colorArray.splice(1, 1, num2);
        colorArray.splice(2, 1, num3);
        console.log(colorArray);
        
    } else if (distanceFromButton5 <= buttonWidth) {
        background(225);
        colorArray.splice(0, 1, 255);
        colorArray.splice(1, 1, 255);
        colorArray.splice(2, 1, 255);
        
    }  
  }

  
  