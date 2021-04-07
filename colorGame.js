let colors = [],
    pickedColor,
    squares = document.querySelectorAll(".square"),
    colorDisplay = document.getElementById("colorDisplay"),
    messageDisplay = document.querySelector("#message"),
    header = document.querySelector(".header"),
    resetButton = document.querySelector("#reset"),
    borderNormal = "solid 2px black";

init();

function init() {
    setupSquares();
    reset();
}


function setupSquares() {
    for (let i = 0; i < squares.length; i ++) {
        squares[i].addEventListener("click", function() {
            let clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                header.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
            }
            else {
                this.style.opacity = "0";
                messageDisplay.textContent = "Wrong";
            }
    
        })
    }
}

resetButton.addEventListener("click", function(){
    reset();
})

function reset() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Reroll";
    messageDisplay.textContent = "Good Luck!";
    for (let i = 0; i < squares.length; i ++) {
        squares[i].style.background = colors[i];
        squares[i].style.opacity = "1";
    }
    header.style.backgroundColor = "rgb(228, 116, 42)";
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.opacity = "1";
        squares[i].style.backgroundColor = color;
    }    
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
    arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g +  ", " + b + ")"
}