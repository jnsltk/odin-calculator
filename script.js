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

let displayValue = '';

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
    alert('Ye can\'t divide by zero ye eejit');
    return 'nah';
  }
  return num1 / num2;
}

// Operator function
function operate(operator, num1, num2) {
  switch (operator) {
    case add:
      return add(num1, num2);
    case subtract:
      return subtract(num1, num2);
    case multiply:
      return multiply(num1, num2);
    case divide:
      return divide(num1, num2);
    default:
      return 'error';
  }
}

/* This function gets called when the user presses a button,
checks which button was pressed, and adds that number to displayValue */
function btnPress(e) {
  displayValue += `${e.target.id.slice(-1)}`;
  // console.log(e.target.id.slice(-1));
  display.value = displayValue;
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
