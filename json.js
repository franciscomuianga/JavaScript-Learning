// AULA 9: JSON

// 1. Objeto JavaScript
let desenvolvedor = {
    nome: "Francisco Raul Muianga",
    idade: 17,
    habilidades: ["JavaScript", "Sketchware", "Git"],
    projetos: 7,
    estudando: true
};

console.log("=== Objeto Original ===");
console.log(desenvolvedor);

// 2. Converter Objeto → JSON (stringify)
let jsonString = JSON.stringify(desenvolvedor);
console.log("\n=== Convertido para JSON ===");
console.log(jsonString);
console.log("Tipo:", typeof jsonString); // string

// 3. Converter JSON → Objeto (parse)
let objetoNovamente = JSON.parse(jsonString);
console.log("\n=== Convertido de volta para Objeto ===");
console.log(objetoNovamente);
console.log("Nome:", objetoNovamente.nome);
console.log("Habilidades:", objetoNovamente.habilidades);

// 4. Exemplo: Dados de uma API (simulado)
let dadosAPI = '{"usuario":"franciscomuianga","repos":8,"seguidores":0}';

console.log("\n=== Dados da API (JSON) ===");
console.log(dadosAPI);

let github = JSON.parse(dadosAPI);
console.log("\n=== Dados da API (Objeto) ===");
console.log("Usuário:", github.usuario);
console.log("Repositórios:", github.repos);
console.log("Seguidores:", github.seguidores);

// 5. Array de objetos em JSON
let apps = [
    {nome: "App 1", downloads: 1000},
    {nome: "App 2", downloads: 5000}
];

let appsJSON = JSON.stringify(apps);
console.log("\n=== Array de Apps em JSON ===");
console.log(appsJSON);

// 6. JSON com formatação bonita (indent)
let jsonBonito = JSON.stringify(desenvolvedor, null, 2);
console.log("\n=== JSON Formatado ===");
console.log(jsonBonito);
