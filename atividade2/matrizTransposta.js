function verificarNumeroPrimo(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function transporMatriz(A) {
    console.log("Matriz Original:");
    A.forEach(row => console.log(row.join(" ")));
    
    let transposta = A[0].map((_, colIndex) => A.map(row => row[colIndex]));
    
    console.log("\nMatriz Transposta:");
    transposta.forEach(row => console.log(row.join(" ")));
}

// Casos de testes
console.log(verificarNumeroPrimo(0)); // false
console.log(verificarNumeroPrimo(1)); // false
console.log(verificarNumeroPrimo(2)); // true
console.log(verificarNumeroPrimo(3)); // true
console.log(verificarNumeroPrimo(7)); // true
console.log(verificarNumeroPrimo(83)); // true
console.log(verificarNumeroPrimo(100)); // false
console.log(verificarNumeroPrimo(991)); // true
console.log(verificarNumeroPrimo(104729)); // true
console.log(verificarNumeroPrimo(14348907)); // false

// Teste de transposição de matriz
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
transporMatriz(matriz);
