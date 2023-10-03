function addToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function backspace() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substr(0, result.length - 1);
}

function calculate() {
    let result = eval(document.getElementById('result').value);
    document.getElementById('hasil').value = result
}