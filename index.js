class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.readyToReset = false;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;

    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.currentOperand !== "" && this.previousOperand !== "") this.compute();
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {

            case "+":
                computation = prev + current;
                break;

            case "-":
                computation = prev - current;
                break;

            case "x":
                computation = prev * current;
                break;

            case "÷":
                computation = prev / current;
                break;

            case "%":
                computation = prev % current;
                break;
            case "^":
                computation = Math.pow(prev, current);
                break;
            default:
                return;
        }
        this.readyToReset = true;
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.previousOperand} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = "";
        }

    }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement);

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {

        if (calculator.previousOperand === "" &&
            calculator.currentOperand !== "" &&
            calculator.readyToReset) {
            calculator.currentOperand = "";
            calculator.readyToReset = false;
        }
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener("click", button => {
    calculator.delete();
    calculator.updateDisplay();
})

var element = document.body;
function gece() {
    element.classList.toggle("dark");
}

let sum;
window.result = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    sum = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is 1,999999
    // console.log(sum);
    //updateResult(sum);
    calculator.clear()
    calculator.appendNumber(sum)
    calculator.updateDisplay();
}

function numDigits() {
    let a = document.getElementById("output").innerHTML;
    let digitNumber = a.toString().length;
    calculator.clear();
    calculator.appendNumber(digitNumber);
    calculator.updateDisplay();
}

//! koda bak 

// function nokta() {
//     let value = document.getElementById("output").innerHTML;
//     if (Math.floor(value) === value) return 0;
//     return value.toString().split(".")[1].length || 0;
// }

// console.log(nokta());

// function disableCalculatorGrid() {
//     var calculatorGrid = document.getElementsByClassName("calculator-grid")[0]
//     calculatorGrid.style = "display: none; "
// }

function binaryToDecimal() {
    let binary = document.getElementById("output").innerHTML;
    let decimal = parseInt((binary + '').replace(/[^01]/gi, ''), 2);
    calculator.clear();
    calculator.appendNumber(decimal);
    calculator.updateDisplay();
}

function decimalToBinary() {
    let dec1mal = document.getElementById("output").innerHTML;
    let b1nary = (+dec1mal).toString(2);
    calculator.clear();
    calculator.appendNumber(b1nary);
    calculator.updateDisplay();
}

function hexToDecimal() {
    let hex = document.getElementById("output").innerHTML;
    let energy = parseInt(hex, 16);
    console.log(energy);
    calculator.clear();
    calculator.appendNumber(energy);
    calculator.updateDisplay();
}

function decimalToHex() {
    let hex = document.getElementById("output").innerHTML;
    let sampuan = parseInt(hex, 10).toString(16);
    calculator.clear();
    calculator.appendNumber(sampuan);
    calculator.updateDisplay();
}

function sin1() {
    let x = document.getElementById("output").innerHTML;
    let sin = Math.sin(x);
    calculator.clear();
    calculator.appendNumber(sin);
    calculator.updateDisplay();
}

function cos1() {
    let x = document.getElementById("output").innerHTML;
    let cos = Math.cos(x);
    calculator.clear();
    calculator.appendNumber(cos);
    calculator.updateDisplay();
}

function tanh1() {
    let x = document.getElementById("output").innerHTML;
    let tan = Math.tanh(x)
    calculator.clear();
    calculator.appendNumber(tan);
    calculator.updateDisplay();
}

function log1() {
    let x = document.getElementById("output").innerHTML;
    let log = Math.log(x)
    calculator.clear();
    calculator.appendNumber(log);
    calculator.updateDisplay();
}
function exp1() {
    let x = document.getElementById("output").innerHTML;
    let exp = Math.exp(x);
    calculator.clear();
    calculator.appendNumber(exp);
    calculator.updateDisplay();
}


function factorial(n) {
    //base case
    if (n == 0 || n == 1) {
        return 1;
        //recursive case
    } else {
        return n * factorial(n - 1);
    }
}

function fak() {
    let n = document.getElementById("output").innerHTML;
    a = factorial(n);
    calculator.clear();
    calculator.appendNumber(a);
    calculator.updateDisplay();
}

function sign() {
    let n = document.getElementById("output").innerHTML;
    a = n * (-1);
    calculator.clear();
    calculator.appendNumber(a);
    calculator.updateDisplay();
}