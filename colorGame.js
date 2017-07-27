var number = 6;
var colors = generateColors(number);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {	
	setUpMode();
	setSquares();
	resetFunc();
}

function setUpMode() {
	for(var i = 0; i<mode.length; i++) {
	mode[i].addEventListener("click", function() {
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy") {
			number = 3;
		}
		else {
			number = 6;
		}
		resetFunc();
	})
}
}

function setSquares() {
	for(var i =0; i<squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			changeColor(clickedColor); 
			h1.style.backgroundColor = pickedColor;
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?";
		}
		else {
			messageDisplay.textContent = "Try Again";
			this.style.backgroundColor = "#232323";
		}
	})
}
}


function changeColor(color) {
	for(var i =0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateColors(num) {
	var colorArr = [];
	for(var i = 0; i<num; i++) {
		colorArr.push(randomColor());
	}

	return colorArr;
}

function randomColor() {
	var str = "rgb(" + randomNum() + ", " + randomNum() + ", " + randomNum() + ")";
	return str;
}


function randomNum() {
	var num = Math.floor(Math.random() * 256);
	return num.toString();
}

reset.addEventListener("click", function() {
	resetFunc();
});


function resetFunc() {
	reset.textContent = "New Colors";
	colors = generateColors(number);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
}