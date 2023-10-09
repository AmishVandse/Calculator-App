// Function to perform basic math operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Initialize variables
let firstNumber = "";
let operator = "";
let secondNumber = "";

// Event listeners for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        if (operator === "") {
            firstNumber += button.textContent;
        } else {
            secondNumber += button.textContent;
        }
        document.getElementById('display').textContent = (operator === "") ? firstNumber : secondNumber;
    });
});

// Event listener for operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        operator = button.textContent;
    });
});

// Event listener for the equals button
document.getElementById('equals').addEventListener('click', () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
        let result;
        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                result = divide(num1, num2);
                break;
            default:
                break;
        }
        document.getElementById('display').textContent = result;
        firstNumber = result.toString();
        operator = "";
        secondNumber = "";
    }
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', () => {
    firstNumber = "";
    operator = "";
    secondNumber = "";
    document.getElementById('display').textContent = "0";
});
