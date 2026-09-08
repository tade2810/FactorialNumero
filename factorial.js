function factorial(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial(5)); // 120
console.log(factorial(10)); // 120
console.log(factorial(50)); // 120
