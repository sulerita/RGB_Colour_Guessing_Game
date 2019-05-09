var colors = generateRandomColors(6);
var getSquares = document.querySelectorAll(".square");
var pickColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickColor = pickedColor();
    //change colorDisplay to match the new color
    colorDisplay.textContent = pickColor;
    //change colors of square
    for(var i = 0; i < getSquares.length; i++){
    getSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickColor;

for(var i = 0; i < getSquares.length; i++){
    //add initial colors to squares
    getSquares[i].style.backgroundColor = colors[i];

    //add click listeners to square
    getSquares[i].addEventListener("click", function(){
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedcolor 
    console.log(clickedColor, pickColor)
    if(clickedColor === pickColor){
        msgDisplay.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again";
    }else{
        this.style.backgroundColor = "#232323";
        msgDisplay.textContent = "Try Again";
    }
    });

}


function changeColors(color){
    //Loop through all squares 
    for(var i = 0; i < getSquares.length; i++){
    //change each color to match color
    getSquares[i].style.backgroundColor = color;
    
    }

}
function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to arr
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
