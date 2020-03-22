var numSquares = 6;
var colors = [];
var pickedColor;

var messageDisplay = document.querySelector("#message");
var squares = document.querySelectorAll(".square")
var modeButtons = document.querySelectorAll(".mode")
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();

    //square event listeners
    setupSquares();

    //run reset function
    reset();
};

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
    
            reset();
        });
    };
};

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //add click listeners to sqaures
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            };
        });
    };
};

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of the squares on the page
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        };
    };
    //reset display
    h1.style.backgroundColor = "steelBlue";
};

resetButton.addEventListener("click", function (){
    reset();
});

function changeColors(color){
    //loop through all squares
    for(var i = 0; squares.length; i++){
        //change color to match given color
        squares[i].style.backgroundColor = color;
    }
};

function pickColor (){
    //pick a random number
    var random = Math.floor(Math.random() * colors.length)
    //use number to access color in array
    return colors[random];
};

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i = 0 ; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());       
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256); 
    //pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256); 
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256); 
    return "rgb(" + r + ", " + g + ", " + b + ")";
}



