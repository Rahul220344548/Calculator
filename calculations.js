let firstNum = '';
let secondNum = '';
let operator;
let enterSecondNumFlag = false;

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
    console.log(firstNum+ " " + operator + " " + secondNum);
    // if (operator == "+") {
    //     console.log(add(firstNum,secondNum));
    // }
    
}

function setDisplay(value) {

    
    const currInput = document.querySelector(".display .display-digits");
      
    if (enterSecondNumFlag) {
        currInput.textContent = value;
        enterSecondNumFlag = false;
    } else {
        if (currInput.textContent === '0') {
            currInput.textContent = value;
        } else {
            currInput.textContent += value;
        }
    }
    
    //If no operator has been selected yet, update the first number
    if (!operator) {
        firstNum = currInput.textContent;
    } else {
        secondNum = currInput.textContent;
    }

}

function storeOperator(inOP) {
    if (firstNum) {
        operator = inOP;
        enteringSecondNum = true;  // Prepare for the second number input
    }
    console.log("Operator stored: ", operator);
}

const digitButtons = document.querySelectorAll('.button-digit');

digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        const displayValue = button.textContent;
        setDisplay(displayValue);
    });
})

// User Selects Operator 

const operatorSelect = document.querySelectorAll('.button-sign');
operatorSelect.forEach(button => {

    button.addEventListener('click', () => {
        const operatorValue = button.textContent;
        console.log(storeOperator(operatorValue));
    });
});


const equal = document.querySelector('.button-equal');
equal.addEventListener('click', () => {
    operate(operator,firstNum,secondNum);
});


const clearDisplay = document.querySelector('.button-clr');
clearDisplay.addEventListener('click', () => {
    const currInput = document.querySelector(".display .display-digits");
    setTimeout(() => window.location.reload(), 100);
});