let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
function add(inFirstNum,inSecondNum) {
    return inFirstNum + inSecondNum;
}

function subtract(inFirstNum, inSecondNum) {
    return inFirstNum - inSecondNum;
    
}
function multiply(inFirstNum,inSecondNum) {
    return inFirstNum * inSecondNum;
}

function percentage(inValue) {
    return inValue / 100;
}
function divide(inFirstNum, inSecondNum) {
    if (inSecondNum === 0) return "INFINITY";
    return parseFloat((inFirstNum / inSecondNum).toFixed(3));
}

function operate(operator, firstNum, secondNum) {
    
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    
    
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = result;

    firstNum = '';
    secondNum = '';
    operator = '';
    enterSecondNumFlag = false;

}

function setDisplay(value) {


}



const digitButtons = document.querySelectorAll('.button-digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const displayValue = button.textContent;
        setDisplay(displayValue);
    });
})


const equal = document.querySelector('.button-equal');
equal.addEventListener('click', () => {
    operate(operator,firstNum,secondNum);
});



