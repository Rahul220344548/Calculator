let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
let checkSecondNumisStored = false;
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

function operate(inOperator, firstOperand, secondOperand) {
    // console.log(firstOperand + " " + operator + " " + secondNum);
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    
    switch (inOperator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "÷":
            result = divide(num1, num2);
            break;
        case "×":
            result = multiply(num1, num2);
            break;
    }
    
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = result;

    //clear all global variables to avoid re-use
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    checkSecondNumisStored = false;

}

function setDisplay() {

    const currInput = document.querySelector(".display .display-digits");
    
    if (checkSecondNumisStored) { //checks if secondOperand Exists 
        currInput.textContent = displayValue; //sets current input value to 
        checkSecondNumisStored = false;
    } else {
        if (currInput.textContent === '0') {
            currInput.textContent = displayValue;
        } else {
            currInput.textContent += displayValue;
        }
    }
    
    // If no operator has been selected
    if (!firstOperator) {
        firstOperand = currInput.textContent;
    } else {
        secondOperand = currInput.textContent;
    }

}

function storeFirstOperator() {
    // stores operator if there is no operator stored yet
    if (firstOperator == null) {
        firstOperator = displayValue;
        checkSecondNumisStored = true;
    } else { // there exists a operator "+"
        operate(firstOperator, firstOperand, secondOperand); 
        firstOperand = result;
        result = null;
        secondOperator = displayValue;
        firstOperator = secondOperator;
        checkSecondNumisStored = true;    
    }
    
}


// Sets display 
const digitButtons = document.querySelectorAll('.button-digit');
digitButtons.forEach(button => {
    button.addEventListener('click', () => {
        displayValue = button.textContent;
        setDisplay();
    });
})

// First Operator click

const getOperator = document.querySelectorAll('.button-sign');
getOperator.forEach(button => {
    button.addEventListener('click', () => {
        displayValue = button.textContent;
        storeFirstOperator();
    });
})


//Equal Button
const equal = document.querySelector('.button-equal');
equal.addEventListener('click', () => {
    if (result == null) {
        operate(firstOperator, firstOperand, secondOperand);
    } else if (result > 0) {
        firstOperand = result;
        operate(firstOperator, firstOperand, secondOperand);
    } else {
        const currInput = document.querySelector(".display .display-digits");
        currInput.textContent = `Error`;
    }
    
    // console.log(`Equal: first = ${firstOperand} , second = ${secondOperand} , 
    //         firstOp = ${firstOperator} , secondOP = ${secondOperator} , result = ${result} `);
});



// Clear button
const clearDisplay = document.querySelector('.button-clr');
clearDisplay.addEventListener('click', () => {
    
    setTimeout(() => window.location.reload(), 100);
});