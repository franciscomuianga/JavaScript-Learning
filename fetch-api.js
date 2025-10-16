// AULA 12: FETCH API

console.log("=== FETCH API ===\n");

// 1. Buscar dados do usuário GitHub
console.log("1. Buscando dados do GitHub...");
fetch('https://api.github.com/users/franciscomuianga')
  .then(response => response.json())
  .then(data => {
    console.log("✅ Usuário:", data.login);
    console.log("   Repos públicos:", data.public_repos);
    console.log("   Criado em:", data.created_at);
  })
  .catch(error => {
    console.log("❌ Erro:", error.message);
  });

// 2. Buscar post de exemplo
console.log("\n2. Buscando post de exemplo...");
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(post => {
    console.log("✅ Post ID:", post.id);
    console.log("   Título:", post.title);
    console.log("   Corpo:", post.body.substring(0, 50) + "...");
  })
  .catch(error => {
    console.log("❌ Erro:", error.message);
  });

// 3. Buscar lista de posts
console.log("\n3. Buscando lista de posts...");
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log("✅ Total de posts:", posts.length);
    console.log("   Primeiros 5 títulos:");
    posts.slice(0, 5).forEach((post, index) => {
      console.log(`   ${index + 1}. ${post.title}`);
    });
  })
  .catch(error => {
    console.log("❌ Erro:", error.message);
  });

// 4. Buscar dados de país
console.log("\n4. Buscando dados de Moçambique...");
fetch('https://restcountries.com/v3.1/name/mozambique')
  .then(response => response.json())
  .then(paises => {
    let moz = paises[0];
    console.log("✅ País:", moz.name.common);
    console.log("   Capital:", moz.capital[0]);
    console.log("   População:", moz.population.toLocaleString());
    console.log("   Região:", moz.region);
  })
  .catch(error => {
    console.log("❌ Erro:", error.message);
  });

// 5. Exemplo de erro (URL inválida)
console.log("\n5. Testando erro (URL inválida)...");
fetch('https://api.inexistente.com/dados')
  .then(response => {
    if (!response.ok) {
      throw new Error('API não encontrada');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("❌ Erro esperado:", error.message);
  });

console.log("\n⏳ Aguardando respostas das APIs...\n");
