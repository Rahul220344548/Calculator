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

function operate(inOperator, infirstOperand, insecondOperand) {
    // console.log(firstOperand + " " + operator + " " + secondNum);
    const num1 = parseFloat(infirstOperand);
    const num2 = parseFloat(insecondOperand);
    
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
    firstOperand = result;
    secondOperand = null;
    firstOperator = null;
    checkSecondNumisStored = false;

}

function setDisplay() {

    const currInput = document.querySelector(".display .display-digits");
    
    if (checkSecondNumisStored) { // is secondOperand store , checks if it is true 
        currInput.textContent = displayValue; //sets current input value to 
        checkSecondNumisStored = false;
    } else {
        if (currInput.textContent === '0') {
            currInput.textContent = displayValue;
        } else {
            currInput.textContent += displayValue;
        }
    }
    
    // If no operator has been 
    if (!firstOperator) { // if first operator is falsy then store firstOperand
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
    
    operate(firstOperator, firstOperand, secondOperand);

});


// Clear button
const clearDisplay = document.querySelector('.button-clr');
clearDisplay.addEventListener('click', () => {
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = '0';
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    checkSecondNumisStored = false;
});

//Percentage Button

const percentButton = document.querySelector('.button-percent');

const updateDisplayWithPercentage = (operand) => {
    const currInput = document.querySelector(".display .display-digits");
    currInput.textContent = percentage(operand);
    return currInput.textContent;
};

percentButton.addEventListener('click', () => {
    
    if (secondOperand == null) {
        firstOperand = updateDisplayWithPercentage(firstOperand);
    } else {
        secondOperand = updateDisplayWithPercentage(secondOperand);
    }
    
});

//dot button

const dotButton = document.querySelector('.button-dot');
dotButton.addEventListener('click', () => {
    
    // This function checks and appends a dot . when users click on decimal
    const currInput = document.querySelector(".display .display-digits");
    displayValue = ".";

    if (!currInput.textContent.includes('.')) {
        if (currInput.textContent === "0") {
            currInput.textContent += displayValue;
        } else {
            currInput.textContent += displayValue;
        }
    }
});

// BackSpace Button Branch

const backspaceButton = document.querySelector('.button-back-space');
backspaceButton.addEventListener('click', () => {
    alert("Backspcae");
});
