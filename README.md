# Servidor HTTP em Node.js

Projeto desenvolvido como exercício prático para o curso online de aprendizagem de **Node.js** do **IFRS**.

O objetivo do projeto é demonstrar a criação de um servidor HTTP utilizando recursos nativos do Node.js, sem o uso de frameworks como Express, aplicando conceitos básicos de rotas, controllers e manipulação de requisições HTTP.

## Sobre o projeto

Este projeto implementa uma API simples para gerenciamento de produtos, utilizando o módulo nativo `http` do Node.js.

A aplicação possui rotas para operações básicas de CRUD:

- Listar produtos
- Criar produto
- Atualizar produto
- Remover produto

## Tecnologias utilizadas

- Node.js
- JavaScript
- Nodemon

## Como executar

Instale as dependências:

```bash
npm i nodemon --save-dev
```

Inicie o servidor:

```bash
npm run dev
```

O servidor será iniciado em:

```text
http://localhost:3000
```

Principais rotas:

```text
GET /api/produtos
POST /api/produtos
PUT /api/produtos/:id
DELETE /api/produtos/:id
```
