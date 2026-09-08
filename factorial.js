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

function factorial2(n) {
    if (n < 0) {
        return "El factorial no está definido para números negativos";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(factorial2(5)); // 120
console.log(factorial2(10)); // 120
console.log(factorial2(50)); // 120
