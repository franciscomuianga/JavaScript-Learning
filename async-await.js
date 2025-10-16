// AULA 13: ASYNC/AWAIT

console.log("=== ASYNC/AWAIT ===\n");

// 1. Exemplo básico
async function exemploBasico() {
  console.log("1. Exemplo básico:");
  
  const response = await fetch('https://api.github.com/users/franciscomuianga');
  const data = await response.json();
  
  console.log("✅ Usuário:", data.login);
  console.log("   Repos:", data.public_repos);
  console.log("   Criado:", data.created_at.split('T')[0]);
}

// 2. Com tratamento de erro
async function comTryCatch() {
  console.log("\n2. Com try/catch:");
  
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (!response.ok) {
      throw new Error('Erro na API');
    }
    
    const post = await response.json();
    console.log("✅ Post:", post.title);
    
  } catch (error) {
    console.log("❌ Erro:", error.message);
  }
}

// 3. Múltiplos requests (sequencial)
async function multiplosSequencial() {
  console.log("\n3. Múltiplos requests (sequencial):");
  console.log("⏳ Aguarde...");
  
  const inicio = Date.now();
  
  try {
    // Request 1
    const r1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await r1.json();
    
    // Request 2
    const r2 = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await r2.json();
    
    // Request 3
    const r3 = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const comment = await r3.json();
    
    const tempo = Date.now() - inicio;
    
    console.log("✅ Post:", post.title);
    console.log("✅ Usuário:", user.name);
    console.log("✅ Comentário:", comment.email);
    console.log(`⏱️  Tempo: ${tempo}ms`);
    
  } catch (error) {
    console.log("❌ Erro:", error.message);
  }
}

// 4. Múltiplos requests (paralelo - mais rápido)
async function multiplosParalelo() {
  console.log("\n4. Múltiplos requests (paralelo - mais rápido):");
  console.log("⏳ Aguarde...");
  
  const inicio = Date.now();
  
  try {
    // Todos ao mesmo tempo!
    const [r1, r2, r3] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/posts/1'),
      fetch('https://jsonplaceholder.typicode.com/users/1'),
      fetch('https://jsonplaceholder.typicode.com/comments/1')
    ]);
    
    const post = await r1.json();
    const user = await r2.json();
    const comment = await r3.json();
    
    const tempo = Date.now() - inicio;
    
    console.log("✅ Post:", post.title);
    console.log("✅ Usuário:", user.name);
    console.log("✅ Comentário:", comment.email);
    console.log(`⏱️  Tempo: ${tempo}ms (muito mais rápido!)`);
    
  } catch (error) {
    console.log("❌ Erro:", error.message);
  }
}

// 5. Buscar dados de país
async function buscarPais() {
  console.log("\n5. Buscar país (Moçambique):");
  
  try {
    const response = await fetch('https://restcountries.com/v3.1/name/mozambique');
    const paises = await response.json();
    const moz = paises[0];
    
    console.log("✅ País:", moz.name.common);
    console.log("   Capital:", moz.capital[0]);
    console.log("   População:", moz.population.toLocaleString());
    console.log("   Moedas:", Object.keys(moz.currencies).join(', '));
    
  } catch (error) {
    console.log("❌ Erro:", error.message);
  }
}

// Executar todos os exemplos
async function executarTodos() {
  await exemploBasico();
  await comTryCatch();
  await multiplosSequencial();
  await multiplosParalelo();
  await buscarPais();
  
  console.log("\n✅ Todos os exemplos concluídos!");
}

executarTodos();
