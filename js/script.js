var numSquares = 6;
var colors = generateRandomColors(numSquares);
var getSquares = document.querySelectorAll(".square");
var pickColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;
    for(var i = 0; i < getSquares.length; i++){
        if(colors[i]){
            getSquares[i].style.backgroundColor = colors[i];
        } else {
            getSquares[i].style.display = "none";
        }
    }

});

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickColor = pickedColor();
    colorDisplay.textContent = pickColor;
    for(var i = 0; i < getSquares.length; i++){
            getSquares[i].style.backgroundColor = colors[i];
            getSquares[i].style.display = "block";
        
    }
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickColor = pickedColor();
    //change colorDisplay to match the new color
    colorDisplay.textContent = pickColor;
    msgDisplay.textContent = "";
    this.textContent = "NEW COLOURS"
    //change colors of square
    for(var i = 0; i < getSquares.length; i++){
    getSquares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
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
        resetButton.textContent = "Play Again?";
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
