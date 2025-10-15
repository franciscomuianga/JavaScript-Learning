// AULA 6: ARRAYS

// 1. Criar arrays
let numeros = [10, 20, 30, 40, 50];
let frutas = ["Maçã", "Banana", "Laranja"];

console.log("Números:", numeros);
console.log("Frutas:", frutas);

// 2. Acessar valores
console.log("\nPrimeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Terceira fruta:", frutas[2]);

// 3. Ver tamanho
console.log("\nQuantas frutas?", frutas.length);

// 4. Adicionar item
frutas.push("Morango");
console.log("Depois de adicionar:", frutas);

// 5. Remover item
frutas.pop();
console.log("Depois de remover:", frutas);

// 6. Mudar valor
frutas[1] = "Abacaxi";
console.log("Depois de mudar:", frutas);
