

function add(inFirstNum,inSecondNum) {
    return inFirstNum + inSecondNum;
}

function subtract(inFirstNum, inSecondNum) {
    return inFirstNum - inSecondNum;
    
}
function multiply(inFirstNum,inSecondNum) {
    return inFirstNum * inSecondNum;
}

function divide(inFirstNum,inSecondNum) {
    return inFirstNum / inSecondNum;
}

function operate(operator, firstNum, secondNum) {
    console.log(operator);
    if (operator == "+") {
        console.log(add(firstNum,secondNum));
    }
    
}

function displayDigits(value) {

    const displayDigit = document.querySelector(".display .display-digits");
    if (displayDigit) {
        displayDigit.textContent += value;  
    }
    firstNum = displayDigit.textContent;
    
}

// NON FUNCTION CODE ??????????????????????????????????

let firstNum;
let secondNum;
let operator="+";


const digitButtons = document.querySelectorAll('.button-digit');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const displayValue = button.textContent;
        displayDigits(displayValue);
    });
})

// User Selects Operator 

const operatorSelect = document.querySelectorAll('.button-sign');
operatorSelect.forEach(button => {

    button.addEventListener('click', () => {
        const operatorValue = button.textContent;
        operate(operatorValue);
    });
});