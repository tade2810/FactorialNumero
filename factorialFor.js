
function factorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }

    return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 120
