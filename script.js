let first = "";
let oper = "";
let second = "";

function add(props) {
    if (oper.length === 0) {
        first = first + props;
    }
    else {
        second = second + props;
    }
    setView();
}

function operation(props) {
    oper = props;
    setView();
}

function clearAll() {
    first = "";
    oper = "";
    second = "";
    document.getElementById("first").innerHTML = "";
    document.getElementById("oper").innerHTML = "";
    document.getElementById("second").innerHTML = "";
}

function back() {
    if (oper.length === 0) {
        first = first.substring(0, first.length - 1);
    }
    else {
        second = second.substring(0, second.length - 1);
    }
    setView();
}

function math() {
    if (first.length === 0) {
        alert("Ошибка");
    }
    if (oper.length === 0) {
        alert("Ошибка");
    }
    if (second.length === 0) {
        alert("Ошибка");
    }
    const firstNumber = Number(first);
    const secondNumber = Number(second);
    if (oper === '+') {
        first = String(firstNumber + secondNumber);
    }
    if (oper === '-') {
        first = String(firstNumber - secondNumber);
    }
    if (oper === '*') {
        first = String(firstNumber * secondNumber);
    }
    if (oper === '/') {
        if (secondNumber == 0) {
            alert("Ошибка")
        } else {
            first = String(firstNumber / secondNumber);
        }
    }
    oper = "";
    second = "";
    setView()
}

function setView() {
    document.getElementById("first").innerHTML = first;
    document.getElementById("oper").innerHTML = oper;
    document.getElementById("second").innerHTML = second;
}
