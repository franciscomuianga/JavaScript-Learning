// AULA 3: CONDIÇÕES (if/else)

console.log("=== EXEMPLO 1: MAIORIDADE ===");

let idade = 17;

if (idade >= 18) {
  console.log("Pode fazer compras online");
} else {
  console.log("Tem que pedir autorização");
}

console.log("\n=== EXEMPLO 2: CLASSIFICAÇÃO DE NOTA ===");

let nota = 8;

if (nota >= 9) {
  console.log("Excelente! A+");
} else if (nota >= 7) {
  console.log("Muito bom! A");
} else if (nota >= 5) {
  console.log("Aceitável. B");
} else {
  console.log("Reprovado. C");
}

console.log("\n=== EXEMPLO 3: COMPARAÇÃO ===");

let numero = 10;

if (numero > 15) {
  console.log("Número é maior que 15");
} else if (numero == 10) {
  console.log("Número é exatamente 10");
} else if (numero < 10) {
  console.log("Número é menor que 10");
}

console.log("\n=== EXEMPLO 4: OPERADOR LÓGICO (&&) ===");

let usuario_ativo = true;
let tem_saldo = true;

if (usuario_ativo && tem_saldo) {
  console.log("Pode fazer transferência");
} else {
  console.log("Não pode fazer transferência");
}

console.log("\n=== EXEMPLO 5: OPERADOR LÓGICO (||) ===");

let tem_cartao = false;
let tem_dinheiro = true;

if (tem_cartao || tem_dinheiro) {
  console.log("Pode comprar");
} else {
  console.log("Não tem como pagar");
}

console.log("\n=== EXEMPLO 6: OPERADOR NÃO (!) ===");

let deletado = false;

if (!deletado) {
  console.log("Conta está ativa");
} else {
  console.log("Conta foi deletada");
}
