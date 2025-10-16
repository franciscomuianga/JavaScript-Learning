// AULA 11: O QUE É API?

/*
=== O QUE É API? ===

API = Application Programming Interface
(Interface de Programação de Aplicações)

É uma forma de apps/sites conversarem entre si.

=== ANALOGIA: RESTAURANTE ===

Você (app)  →  Garçom (API)  →  Cozinha (servidor)
                    ↓
Você (app)  ←  Garçom (API)  ←  Comida (dados)

=== EXEMPLOS REAIS ===

1. API de Clima
   Request: "Temperatura em Maputo?"
   Response: {"temp": 28, "clima": "ensolarado"}

2. API do GitHub
   Request: "Repos de franciscomuianga?"
   Response: {"repos": 1, "seguidores": 0}

3. API de Câmbio
   Request: "1 USD em MT?"
   Response: {"USD": 1, "MT": 63.50}

=== FLUXO ===

SEU APP  →  REQUEST  →  API
   ↑                     ↓
   └────  RESPONSE  ←────┘

=== MÉTODOS ===

GET    - Buscar dados
POST   - Criar algo
PUT    - Atualizar
DELETE - Deletar

=== APIs PÚBLICAS (Grátis) ===

1. JSONPlaceholder - https://jsonplaceholder.typicode.com
2. GitHub API - https://api.github.com
3. OpenWeather - https://openweathermap.org/api
4. REST Countries - https://restcountries.com

=== POR QUE É IMPORTANTE? ===

✅ 90% dos trabalhos freelancer usam APIs
✅ Integrar serviços externos
✅ Buscar dados de outras plataformas
✅ Criar apps conectados

=== PRÓXIMAS AULAS ===

Aula 12: Fetch API (como usar)
Aula 13: Async/Await (código mais limpo)
Aula 14: Projeto Real com API
*/

console.log("=== O QUE É API? ===");
console.log("\nAPI = Ponte entre aplicações");
console.log("\nExemplo:");
console.log("Seu app pede dados → API processa → API retorna dados");
console.log("\nFormato de dados: JSON");
console.log("\nPróxima aula: Vamos USAR APIs de verdade com Fetch!");
