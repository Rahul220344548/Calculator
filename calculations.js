

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
    
    if (operator == "+") {
        console.log(add(firstNum,secondNum));
    }
    
}

function displayDigits(value) {
    const displayDigit = document.querySelector(".display .display-digits");
    displayDigit.textContent = value;
}

let firstNum;
let secondNum;
let operator="+";


const digitButtons = document.querySelectorAll('.button-digit');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        displayDigits(value);
    });
})
