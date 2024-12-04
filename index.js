let num1 = num2 = null;
let displayString = '';
let operator;
const displayContent = [];
const display = document.querySelector('#display');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

const equalButton = document.querySelector('.enter');

const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    num1 = num2 = operator = null;
    displayContent.splice(0, displayContent.length);
    fillDisplay();
    operatorButtons.forEach((button) => {
        button.removeEventListener('click', operatorHandler);
    })
})

numberButtons.forEach((button) => {
    button.addEventListener('click', numberHandler)
});

function numberHandler(event) {
    const buttonNumber = event.target.innerHTML;
    displayContent.push(buttonNumber);
    fillDisplay();
    
    operatorButtons.forEach((button) => {
        button.addEventListener('click', operatorHandler);
    });
    if (num1 !== null) {
        equalButton.addEventListener('click', equalHandler);
    }
}

function operatorHandler(event) {
    if (operator !== null) {
        equalHandler();
    }
    operator = event.target.innerHTML;
    num1 = Number(displayString);
    displayContent.splice(0, displayContent.length);
    operatorButtons.forEach((button) => {
        button.removeEventListener('click', operatorHandler);
    })
}

function equalHandler() {
    num2 = Number(displayString);
    displayContent.splice(0, displayContent.length);
    switch (operator) {
        case '+':
            displayContent.push(add(num1, num2));
            break;
        case '-':
            displayContent.push(subtract(num1, num2));
            break;
        case '/':
            displayContent.push(divide(num1, num2));
            break;
        case '*':
            displayContent.push(multiply(num1, num2));
    }
    fillDisplay();
    num2 = null;
    num1 = Number(displayString);
    operatorButtons.forEach((button) => {
        button.addEventListener('click', operatorHandler);
    });
}

function fillDisplay() {
    displayString = displayContent.join('');
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