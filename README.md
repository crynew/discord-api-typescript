API em TypeScript com Express
=============================
Este é um projeto básico de API em TypeScript utilizando o framework Express para Node.js.

Configuração do Ambiente
------------------------
Certifique-se de ter o Node.js e o npm instalados na sua máquina.
1. Instalação de Dependências
   npm install

2. Compilação do TypeScript
   npm run build

3. Execução do Servidor
   npm start
O servidor estará disponível em http://localhost:3000.

Estrutura do Projeto
---------------------
- src/ : Contém o código-fonte TypeScript da aplicação.
  - index.ts : Arquivo principal que configura o servidor Express.
  - routes/ : Pasta que contém os arquivos de rotas da API.
- dist/ : Pasta que contém o código JavaScript transpilado a partir do TypeScript.

Funcionalidades Principais
--------------------------
- Middlewares de Logging: Registra cada requisição recebida pelo servidor.
- Roteamento de API: Configuração de rotas utilizando o Express Router.
- Tratamento de Erros: Middleware para tratar requisições para rotas não encontradas (404 Not Found).

Rotas Disponíveis
------------------
- GET /api/users/profile/:id : Retorna informações de perfil do usuário com o ID fornecido.

Contribuição
------------
Sinta-se à vontade para contribuir com melhorias ou correções de bugs. Abra um pull request ou uma issue para discutir mudanças propostas.

Licença
-------
Este projeto está licenciado sob a MIT License.
