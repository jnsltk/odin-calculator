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
        return 'nah mate';
    }
    return num1 / num2;
}