let count = 0;
const countElement = document.getElementById("count");

function updateDisplay() {
    countElement.innerText = count;
}

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}
