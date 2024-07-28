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

}

function setDisplay() {

    const currInput = document.querySelector(".display .display-digits");
    
    if (checkSecondNumisStored) {
        currInput.textContent = displayValue;
        checkSecondNumisStored = false;
    } else {
        currInput.textContent += displayValue;
    }
    
    // If no operator has been selected
    if (!firstOperator) {
        firstOperand = currInput.textContent;
    } else {
        secondOperand = currInput.textContent;
    }
    // operate(firstOperator,firstOperand,10);

}

function storeFirstOperator() {
    // const operateVal = document.querySelector(.)
    // stores operator if there is no operator stored yet
    if (firstOperator == null) {
        firstOperator = displayValue;
        checkSecondNumisStored = true;
        console.log(firstOperator);
    }
    // else {
    //     console.log(firstOperand + " " + firstOperator + " " + secondOperand);
    // }
    
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
    operate(firstOperator,firstOperand,secondOperand);
});



// Clear button
const clearDisplay = document.querySelector('.button-clr');
clearDisplay.addEventListener('click', () => {
    
    alert(firstOperand);
});