
function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log(factorial(5)); // 120

let factorial = 1;

for (let i = 1; i <= 10; i++) {
    factorial = factorial * i;
    document.write(i + "! = " + factorial + "<br>");
}
