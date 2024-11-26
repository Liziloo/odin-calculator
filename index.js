let num1 = null;
let num2 = null;
let operator;
const displayContent = [];
const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach((button) => {
    button.addEventListener('click', numberHandler)
});

function numberHandler(event) {
    const buttonNumber = event.target.innerHTML;
    displayContent.push(buttonNumber);
    fillDisplay();
    if (num1 === null) {
        operatorButtons.forEach((button) => {
            button.addEventListener('click', operatorHandler);
        });
    };
}

function operatorHandler(event) {
    operator = event.target.innerHTML;
    operatorButtons.forEach((button) => {
        button.removeEventListener('click', operatorHandler);
    })
}

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