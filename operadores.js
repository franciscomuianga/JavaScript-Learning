// AULA 2: OPERADORES

console.log("=== OPERADORES ARITMÉTICOS ===");

// Números base
let a = 10;
let b = 3;

// Soma
let soma = a + b;
console.log(a + " + " + b + " = " + soma);

// Subtração
let subtracao = a - b;
console.log(a + " - " + b + " = " + subtracao);

// Multiplicação
let multiplicacao = a * b;
console.log(a + " * " + b + " = " + multiplicacao);

// Divisão
let divisao = a / b;
console.log(a + " / " + b + " = " + divisao);

// Resto
let resto = a % b;
console.log(a + " % " + b + " = " + resto);

// Potência
let potencia = a ** 2;
console.log(a + " ** 2 = " + potencia);

console.log("\n=== OPERADORES DE COMPARAÇÃO ===");

// Maior que
let maior = a > b;
console.log(a + " > " + b + " = " + maior);

// Menor que
let menor = a < b;
console.log(a + " < " + b + " = " + menor);

// Igual
console.log("10 == '10' = " + (10 == "10"));  // true
console.log("10 === '10' = " + (10 === "10")); // false

// Diferente
console.log("10 != 5 = " + (10 != 5));   // true
console.log("10 !== '10' = " + (10 !== "10")); // true

// Maior ou igual
console.log("10 >= 10 = " + (10 >= 10)); // true

// Menor ou igual
console.log("10 <= 5 = " + (10 <= 5));   // false

console.log("\n=== OPERADORES LÓGICOS ===");

let ativo = true;
let premium = false;

// E (AND) - ambos devem ser true
let resultado1 = ativo && premium;
console.log("true && false = " + resultado1); // false

// OU (OR) - pelo menos um deve ser true
let resultado2 = ativo || premium;
console.log("true || false = " + resultado2); // true

// NÃO (NOT) - inverte
let resultado3 = !ativo;
console.log("!true = " + resultado3); // false

console.log("\n=== OPERADORES DE ATRIBUIÇÃO ===");

let numero = 10;
console.log("Número inicial: " + numero);

numero += 5;  // Soma 5
console.log("Depois de += 5: " + numero);

numero -= 3;  // Subtrai 3
console.log("Depois de -= 3: " + numero);

numero *= 2;  // Multiplica 2
console.log("Depois de *= 2: " + numero);

numero /= 4;  // Divide 4
console.log("Depois de /= 4: " + numero);

console.log("\n=== RESUMO ===");
let preco = 100;
let desconto = 20;
let preco_final = preco - desconto;

console.log("Preço original: " + preco);
console.log("Desconto: " + desconto);
console.log("Preço final: " + preco_final);
