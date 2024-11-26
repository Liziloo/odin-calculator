let num1;
let num2;
let operator;
const displayContent = [];
const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        buttonNumber = e.target.innerHTML;
        displayContent.push(buttonNumber);
        fillDisplay();
    });
});

function fillDisplay() {
    const displayString = displayContent.join('');
    console.log(displayString);
    display.innerHTML = displayString;
}

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
    if (num2 === 0) {
        return 'Ah ah ah! Zero intolerance!';
    }
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}