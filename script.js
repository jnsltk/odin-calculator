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
const btnDecimal = document.querySelector('#decimal-point');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');
const btnClear = document.querySelector('#clear');
const btnEquals = document.querySelector('#equals');
const btnBackspace = document.querySelector('#backspace');

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
    display.value = displayValue;
    // display.value = Math.round(displayValue * 100000000) / 100000000;
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

function decimalBtnPress() {
    if (displayValue.includes('.')) return;
    displayValue += '.';
    refreshDisplay();
}

/* Since parseInt() parses an integer, it doesn't work with decimals. This function
does basically the same, but it works with decimals too */
function convertToNum(string) {
    if (typeof string === 'number') return string;
    if (string.includes('.')) {
        const tempArray = string.split('.');
        const int = parseInt(tempArray[0], 10);
        let divisor = '1';
        for (let i = 0; i < tempArray[1].length; i++) {
            divisor += '0';
        }
        const decimal = parseInt(tempArray[1], 10) / parseInt(divisor, 10);
        return int + decimal;
    }
    return parseInt(string, 10);
}

/* This function gets called when the user presses the equals button, or when pressing
the operator button and the operation is not the first one. It takes the previous display
value, the current display value, and the operator, passes them to the operate function,
and then displays the result */
function calculate() {
    if (!currentOperator && !displayTempValue) return;
    const num1 = convertToNum(displayTempValue);
    const num2 = convertToNum(displayValue);
    result = operate(currentOperator, num1, num2);
    updateDisplay(Math.round(result * 100000000) / 100000000);
}

/* This function gets called when the user presses an operator button. */
function operatorBtnPress(e) {
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

// Not perfect, doesn't work when displayValue is number
function deleteLast() {
    updateDisplay(displayValue.slice(0, -1));
}

function clearAll() {
    displayValue = 0;
    currentOperator = '';
    displayTempValue = 0;
    result = 0;
    updateDisplay('0');
}

// Not a perfect solution, only works with numpad
function keyPress(e) {
    const key = document.querySelector(`button[data-key="${e.keyCode}"]`);
    key.click();
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
btnDecimal.addEventListener('click', decimalBtnPress);

btnAdd.addEventListener('click', operatorBtnPress);
btnSubtract.addEventListener('click', operatorBtnPress);
btnMultiply.addEventListener('click', operatorBtnPress);
btnDivide.addEventListener('click', operatorBtnPress);
btnClear.addEventListener('click', clearAll);
btnEquals.addEventListener('click', calculate);
btnBackspace.addEventListener('click', deleteLast);

window.addEventListener('keydown', keyPress);

display.value = displayValue;
