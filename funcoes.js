// AULA 5: FUNÇÕES

console.log("=== EXEMPLO 1: FUNÇÃO SIMPLES ===");

function saudacao() {
  console.log("Bem-vindo ao Freelancer!");
}

saudacao();
saudacao();
saudacao();

console.log("\n=== EXEMPLO 2: FUNÇÃO COM PARÂMETROS ===");

function saudarPessoa(nome) {
  console.log("Olá " + nome + "!");
}

saudarPessoa("João");
saudarPessoa("Maria");
saudarPessoa("Pedro");

console.log("\n=== EXEMPLO 3: FUNÇÃO COM MÚLTIPLOS PARÂMETROS ===");

function somar(a, b) {
  console.log(a + " + " + b + " = " + (a + b));
}

somar(5, 3);
somar(10, 20);
somar(100, 50);

console.log("\n=== EXEMPLO 4: FUNÇÃO COM RETURN ===");

function calcularMedia(nota1, nota2, nota3) {
  let media = (nota1 + nota2 + nota3) / 3;
  return media;
}

let resultado = calcularMedia(8, 9, 7);
console.log("Média: " + resultado);

let resultado2 = calcularMedia(10, 10, 10);
console.log("Média: " + resultado2);

console.log("\n=== EXEMPLO 5: FUNÇÃO COM OPERAÇÕES ===");

function calcularPrecoComDesconto(preco, percentual_desconto) {
  let desconto = preco * (percentual_desconto / 100);
  let preco_final = preco - desconto;
  return preco_final;
}

let preco1 = calcularPrecoComDesconto(100, 20);
console.log("Preço com 20% desconto: $" + preco1);

let preco2 = calcularPrecoComDesconto(500, 15);
console.log("Preço com 15% desconto: $" + preco2);

console.log("\n=== EXEMPLO 6: FUNÇÃO COM CONDICIONAL ===");

function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarMaioridade(17)); // Menor de idade
console.log(verificarMaioridade(25)); // Maior de idade
console.log(verificarMaioridade(18)); // Maior de idade

console.log("\n=== EXEMPLO 7: FUNÇÃO QUE USA LOOP ===");

function tabuada(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
  }
}

console.log("Tabuada do 5:");
tabuada(5);

console.log("\n=== EXEMPLO 8: ARROW FUNCTION ===");

const multiplicar = (a, b) => {
  return a * b;
};

console.log("5 * 3 = " + multiplicar(5, 3));
console.log("10 * 2 = " + multiplicar(10, 2));

console.log("\n=== EXEMPLO 9: ARROW FUNCTION SIMPLES ===");

const dobrar = (numero) => numero * 2;

console.log("Dobro de 5: " + dobrar(5));
console.log("Dobro de 10: " + dobrar(10));
console.log("Dobro de 25: " + dobrar(25));

console.log("\n=== EXEMPLO 10: FUNÇÃO DENTRO DE FUNÇÃO ===");

function calcularSalarioFinal(salario_base, percentual_bonus) {
  function calcularBonus() {
    return salario_base * (percentual_bonus / 100);
  }
  
  let bonus = calcularBonus();
  let salario_final = salario_base + bonus;
  
  return salario_final;
}

let salario1 = calcularSalarioFinal(1000, 20);
console.log("Salário com 20% bônus: $" + salario1);

let salario2 = calcularSalarioFinal(2000, 15);
console.log("Salário com 15% bônus: $" + salario2);

console.log("\n=== EXEMPLO 11: FUNÇÃO PARA VALIDAÇÃO ===");

function validarEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}

console.log("joao@gmail.com é válido? " + validarEmail("joao@gmail.com")); // true
console.log("joaosenaemail é válido? " + validarEmail("joaosenaemail")); // false
console.log("maria@.com é válido? " + validarEmail("maria@.com")); // true (tecnicamente)

console.log("\n=== EXEMPLO 12: FUNÇÃO PARA CONVERTER MOEDAS ===");

function converterMoeda(usd, taxa_cambio) {
  let mzn = usd * taxa_cambio;
  return mzn;
}

let taxa = 63.9;  // 1 USD = 63.9 MZN

let moeda1 = converterMoeda(100, taxa);
console.log("$100 USD = " + moeda1.toFixed(2) + " MZN");

let moeda2 = converterMoeda(500, taxa);
console.log("$500 USD = " + moeda2.toFixed(2) + " MZN");

console.log("\n=== EXEMPLO 13: FUNÇÃO PARA CALCULAR GANHOS ===");

function calcularGanhoMensal(projetos_por_semana, valor_por_projeto) {
  let semanas = 4;
  let ganho_total = projetos_por_semana * valor_por_projeto * semanas;
  return ganho_total;
}

let ganho1 = calcularGanhoMensal(2, 200);
console.log("2 projetos x $200 por mês: $" + ganho1);

let ganho2 = calcularGanhoMensal(3, 300);
console.log("3 projetos x $300 por mês: $" + ganho2);

console.log("\n=== EXEMPLO 14: FUNÇÃO COM MÚLTIPLOS RETURNS ===");

function classificarNota(nota) {
  if (nota >= 9) {
    return "A";
  } else if (nota >= 7) {
    return "B";
  } else if (nota >= 5) {
    return "C";
  } else {
    return "F";
  }
}

console.log("Nota 9.5: " + classificarNota(9.5));
console.log("Nota 8.0: " + classificarNota(8.0));
console.log("Nota 6.0: " + classificarNota(6.0));
console.log("Nota 3.0: " + classificarNota(3.0));

console.log("\n=== EXEMPLO 15: FUNÇÃO QUE CHAMA OUTRA FUNÇÃO ===");

function calcularComissao(valor) {
  return valor * 0.10;  // 10%
}

function calcularGanhoFreelancer(valor_projeto) {
  let freelancer_recebe = valor_projeto * 0.90;  // 90%
  let comissao = calcularComissao(valor_projeto);  // Chama outra função
  
  console.log("Valor do projeto: $" + valor_projeto);
  console.log("Comissão Freelancer (10%): $" + comissao);
  console.log("Você recebe (90%): $" + freelancer_recebe);
}

calcularGanhoFreelancer(300);
console.log("---");
calcularGanhoFreelancer(500);
