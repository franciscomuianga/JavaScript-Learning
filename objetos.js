// AULA 8: OBJETOS

// 1. Criar objeto simples
let pessoa = {
    nome: "Francisco Raul Muianga",
    idade: 17,
    cidade: "Moçambique",
    estudante: true
};

console.log("=== Objeto Pessoa ===");
console.log(pessoa);
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);

// 2. Adicionar propriedade
pessoa.email = "muianga85francisco@gmail.com";
console.log("\nDepois de adicionar email:");
console.log(pessoa);

// 3. Mudar valor
pessoa.idade = 18;
console.log("\nDepois de mudar idade:");
console.log("Idade:", pessoa.idade);

// 4. Objeto dentro de objeto
let desenvolvedor = {
    nome: "Francisco",
    habilidades: {
        javascript: true,
        sketchware: true,
        git: true
    },
    projetos: 7
};

console.log("\n=== Objeto Desenvolvedor ===");
console.log("Nome:", desenvolvedor.nome);
console.log("Sabe JavaScript?", desenvolvedor.habilidades.javascript);
console.log("Quantos projetos?", desenvolvedor.projetos);

// 5. Array de objetos
let apps = [
    {nome: "App 1", downloads: 1000},
    {nome: "App 2", downloads: 5000},
    {nome: "App 3", downloads: 3000}
];

console.log("\n=== Array de Apps ===");
apps.forEach(function(app) {
    console.log(app.nome + " tem " + app.downloads + " downloads");
});

// 6. Total de downloads
let totalDownloads = apps.reduce(function(total, app) {
    return total + app.downloads;
}, 0);

console.log("Total de downloads:", totalDownloads);
