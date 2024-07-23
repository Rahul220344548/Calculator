

function add(inFirstNum,inSecondNum) {
    return inFirstNum + inSecondNum;
}

function subtract() {
    
}
function multiply() {

}

function divide() {

}

function displayValue(value) {
    alert("HEllo");
    // const display = document.querySelector(".display");
    // const t = display.textContent = "Hello";
    
}

function operate(operator, firstNum, secondNum) {
    
    add(firstNum,secondNum);
}

let firstNum;
let secondNum;
let operator;

const btn = document.querySelector('.clear-btn.btn');
btn.addEventListener('click', displayValue);