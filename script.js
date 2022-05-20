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
    alert("Ye can't divide by zero ye eejit");
    return "nah";
  }
  return num1 / num2;
}

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
      return "error";
  }
}
