let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.textContent = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}