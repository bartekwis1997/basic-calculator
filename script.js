const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operation');
const display = document.querySelector('.result');

let screenValue = '';
let buffer = 0;
let currentOperation = null;

const handleDisplayValueCalculate = () => {
    /* Here we recalculate buffer to screenValue. */
    let temporaryResult;
    switch (currentOperation) {
        case '+':
            temporaryResult = buffer + (+screenValue);
            display.textContent = temporaryResult;
            break;
        case '-':
            temporaryResult = buffer - (+screenValue);
            display.textContent = temporaryResult;
            break;
        case 'x':
            temporaryResult = buffer * (+screenValue);
            display.textContent = temporaryResult;
            break;
        case '/':
            temporaryResult = buffer / (+screenValue);
            display.textContent = temporaryResult;
            break;
    }
}

const handleNumberClick = (e) => {
    const number = e.target.textContent;

    /* After number click, we want to add it to screenValue. */
    handleDisplayValueCalculate();

    screenValue = screenValue + number;
    display.textContent = screenValue;
    console.log('buffer', buffer, currentOperation);
}

const handleOperationClick = (e) => {
    const operation = e.target.textContent;
    currentOperation = operation;
    buffer = (+display.textContent);

    screenValue = '';
    console.log('buffer', buffer, currentOperation);
}

const handleClearButtonClick = (e) => {
    screenValue = '';
    display.textContent = 0;
    buffer = 0;
    currentOperation = null;
}

handleEqualsClick = () => {
    handleDisplayValueCalculate();
}

clearButton.addEventListener('click', handleClearButtonClick);

equalsButton.addEventListener('click', handleEqualsClick);

numberButtons.forEach(button => {
    button.addEventListener('click', handleNumberClick);
})

operationButtons.forEach(button => {
    button.addEventListener('click', handleOperationClick);
})