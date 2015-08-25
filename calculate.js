//window.onload is equivalent to document.addEventListener("DOMContentLoaded", function(){})
var enteredCommands = [];
var equation;
var solved = false;
var operators = ['/', '*', '-', '+'];

window.onload = function() {
	var screenText = document.getElementById('screen-text')

	var buttons = document.getElementsByClassName('button')

	var clearButton = document.getElementById('clear-btn')
	clearButton.addEventListener('click', clearScreen)

	var equalButton = document.getElementById('equal-btn');
	equalButton.addEventListener('click', solveEquation)

//not exactly sure why this snippet doesn't work
	// for(var index in buttons){
	// 	console.log(index);
	// 	buttons[index].addEventListener('click', addToScreen);
	// }

	for(var buttonIndex = 0; buttonIndex <buttons.length; buttonIndex ++){
		buttons[buttonIndex].addEventListener('click', addToScreen);
	}

	function addToScreen() {
		if (solved){
			clearScreen();
		}
		var buttonValue = this.innerText;
		if (buttonValue == 'Negative'){
			buttonValue = '-'
		}
		enteredCommands.push(buttonValue);
		equation = enteredCommands.join('');
		screenText.innerText = equation;
	}

	function solveEquation(){
		try{
			eval(equation)
			screenText.innerText = eval(equation)
			solved = true;
		} catch (error) {
			if (error instanceof SyntaxError) {
				alert('Invalid equation, do you even math?')
			}
		}
	}

	function clearScreen(){
		enteredCommands = [];
		equation = null;
		screenText.innerText = '';
		solved = false;
	}
}

