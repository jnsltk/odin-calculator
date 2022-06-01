const display = document.querySelector('#display');

const btnNum1 = document.querySelector('#button-1');
const btnNum2 = document.querySelector('#button-2');
const btnNum3 = document.querySelector('#button-3');
const btnNum4 = document.querySelector('#button-4');
const btnNum5 = document.querySelector('#button-5');
const btnNum6 = document.querySelector('#button-6');
const btnNum7 = document.querySelector('#button-7');
const btnNum8 = document.querySelector('#button-8');
const btnNum9 = document.querySelector('#button-9');
const btnNum0 = document.querySelector('#button-0');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');
const btnClear = document.querySelector('#clear');
const btnEquals = document.querySelector('#equals');

let displayValue = 0;
let currentOperator = '';
let displayTempValue = 0;
let result = 0;

// Basic calculator functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (!num2) {
        alert('You can\'t divide by zero');
        return 'error';
    }
    return num1 / num2;
}

// Operator function
function operate(operator, num1, num2) {
    switch (operator) {
    case 'add':
        return add(num1, num2);
    case 'subtract':
        return subtract(num1, num2);
    case 'multiply':
        return multiply(num1, num2);
    case 'divide':
        return divide(num1, num2);
    default:
        return 'error';
    }
}

function refreshDisplay() {
    display.value = Math.round(displayValue * 100000000) / 100000000;
}

// This function updates the display to whatever value it gets passed
function updateDisplay(value) {
    displayValue = value;
    refreshDisplay();
}

/* This function gets called when the user presses a button,
checks which button was pressed, and adds that number to displayValue */
function btnPress(e) {
    if (!displayValue || displayValue === result) updateDisplay('');
    displayValue += `${e.target.id.slice(-1)}`;
    refreshDisplay();
}

/* This function gets called when the user presses the equals button, or when pressing
the operator button and the operation is not the first one. It takes the previous display
value, the current display value, and the operator, passes them to the operate function,
and then displays the result */
function calculate() {
    if (!currentOperator && !displayTempValue) return;
    const num1 = parseInt(displayTempValue, 10);
    const num2 = parseInt(displayValue, 10);
    result = operate(currentOperator, num1, num2);
    updateDisplay(result);
}

/* This function gets called when the user presses an operator button. */
function operatorBtnPress(e) {
    // if (displayValue === result) console.log('Hi');
    // Checks if this is the first operation in a row and whether the equal button has been used
    if (displayValue !== result && currentOperator && displayTempValue) {
        calculate();
        displayTempValue = result;
        currentOperator = e.target.id;
        return;
    }
    currentOperator = e.target.id;
    displayTempValue = display.value;
    updateDisplay(0);
}

function clearAll() {
    displayValue = 0;
    currentOperator = '';
    displayTempValue = 0;
    result = 0;
    updateDisplay(0);
}

btnNum1.addEventListener('click', btnPress);
btnNum2.addEventListener('click', btnPress);
btnNum3.addEventListener('click', btnPress);
btnNum4.addEventListener('click', btnPress);
btnNum5.addEventListener('click', btnPress);
btnNum6.addEventListener('click', btnPress);
btnNum7.addEventListener('click', btnPress);
btnNum8.addEventListener('click', btnPress);
btnNum9.addEventListener('click', btnPress);
btnNum0.addEventListener('click', btnPress);

btnAdd.addEventListener('click', operatorBtnPress);
btnSubtract.addEventListener('click', operatorBtnPress);
btnMultiply.addEventListener('click', operatorBtnPress);
btnDivide.addEventListener('click', operatorBtnPress);
btnClear.addEventListener('click', clearAll);
btnEquals.addEventListener('click', calculate);

display.value = displayValue;
