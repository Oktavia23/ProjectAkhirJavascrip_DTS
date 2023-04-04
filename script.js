

function masukkanAngka(par) {
    calculator.layar.value += par
}

function kalkulasi() {
    calculator.layar.value = eval(calculator.layar.value)
}

function del() {
    calculator.layar.value = ""
}


function backspace() {
    calculator.layar.value = calculator.layar.value.substring(-1, calculator.layar.value.length - 1)
}

function persentase() {
    calculator.layar.value = calculator.layar.value / "100";
} 
