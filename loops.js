// AULA 4: LOOPS (for)

console.log("=== EXEMPLO 1: CONTAGEM SIMPLES ===");

for (let i = 0; i < 10; i++) {
  console.log("Contagem: " + i);
}

console.log("\n=== EXEMPLO 2: TABUADA DO 7 ===");

let numero = 7;

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}

console.log("\n=== EXEMPLO 3: SOMAR NÚMEROS ===");

let soma = 0;

for (let i = 1; i <= 5; i++) {
  soma = soma + i;
  console.log("Iteração " + i + ", soma até agora: " + soma);
}

console.log("Soma total: " + soma);

console.log("\n=== EXEMPLO 4: LISTA DE NOMES ===");

let nomes = ["João", "Maria", "Pedro", "Ana", "Carlos"];

for (let i = 0; i < nomes.length; i++) {
  console.log((i + 1) + ". " + nomes[i]);
}

console.log("\n=== EXEMPLO 5: NÚMEROS PARES ===");

console.log("Números pares de 0 a 20:");

for (let i = 0; i <= 20; i = i + 2) {
  console.log(i);
}

console.log("\n=== EXEMPLO 6: CONTAGEM REGRESSIVA ===");

for (let i = 10; i > 0; i--) {
  console.log(i);
}
console.log("Decolagem! 🚀");
