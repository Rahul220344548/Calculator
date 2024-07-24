let firstNum = '';
let secondNum = '';
let operator = '';
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

function divide(inFirstNum, inSecondNum) {
    if (inSecondNum > inFirstNum) return "ERROR";
    return inFirstNum / inSecondNum;
}

function operate(operator, firstNum, secondNum) {
    
    const num1 = parseFloat(firstNum);
    const num2 = parseFloat(secondNum);

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2)
            break;
        case '×':
            result = multiply(num1, num2)
            break;
        case '÷':
            result = divide(num1, num2)
            break;
        default:
            result = "NULL";
            break;
    }
    
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = result;

    firstNum = result.toString();
    secondNum = '';
    operator = '';
    enterSecondNumFlag= false;
    
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
    const currInput = document.querySelector(".display .display-digits");
    if (firstNum && !operator) {
        operator = inOP;
        currInput.textContent += ` ${operator} `;
        enterSecondNumFlag = true;  // Prepare for the second number input
    }   
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
        storeOperator(operatorValue);
    });
});


const equal = document.querySelector('.button-equal');
equal.addEventListener('click', () => {
    operate(operator,firstNum,secondNum);
});


const clearDisplay = document.querySelector('.button-clr');
clearDisplay.addEventListener('click', () => {
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = '0';
    firstNum = '';
    secondNum = '';
    operator = '';
    enteringSecondNum = false;
});