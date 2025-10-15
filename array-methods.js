// AULA 7: ARRAY METHODS

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. forEach - percorre cada item
console.log("=== forEach ===");
numeros.forEach(function(numero) {
    console.log("Número:", numero);
});

// 2. map - transforma cada item
console.log("\n=== map ===");
let dobro = numeros.map(function(numero) {
    return numero * 2;
});
console.log("Dobro:", dobro);

// 3. filter - filtra itens
console.log("\n=== filter ===");
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log("Números pares:", pares);

// 4. find - encontra o primeiro
console.log("\n=== find ===");
let maiorQue5 = numeros.find(function(numero) {
    return numero > 5;
});
console.log("Primeiro maior que 5:", maiorQue5);

// 5. reduce - reduz a um valor
console.log("\n=== reduce ===");
let soma = numeros.reduce(function(total, numero) {
    return total + numero;
}, 0);
console.log("Soma total:", soma);

// EXEMPLO PRÁTICO: Lista de produtos
let produtos = [
    {nome: "Arroz", preco: 20},
    {nome: "Feijão", preco: 15},
    {nome: "Açúcar", preco: 10}
];

let totalCompra = produtos.reduce(function(total, produto) {
    return total + produto.preco;
}, 0);

console.log("\n=== Exemplo Prático ===");
console.log("Total da compra:", totalCompra, "MT");
