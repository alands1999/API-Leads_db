# API de Cadastro de Leads
Este repositório contém uma API desenvolvida em Express.js que realiza o cadastro de leads recebidos de uma página frontend em um banco de dados MySQL, utilizando a biblioteca mysql2 para conexão com o banco de dados. O projeto segue o padrão REST e utiliza o método POST para receber os dados e armazená-los de forma segura.

Além disso, o repositório inclui:

- Uma aplicação frontend simples para testar a API.
- Um script SQL para criar as tabelas necessárias no banco de dados.

## Funcionalidades
- Recebe leads (nome, e-mail e telefone) através de uma requisição POST.
- Valida os dados dos leads utilizando expressões regulares.
- Insere os leads validados no banco de dados MySQL.
- Inclui um frontend básico para testes e simulações das requisições.
- Possui o código SQL do banco de dados para fácil configuração.

## Estrutura do Projeto
- conexao.js: Responsável por estabelecer e configurar a conexão com o banco de dados MySQL utilizando a biblioteca mysql2/promise.
- registraLeads.js: Função que insere os dados dos leads no banco de dados após validação.
- validacao.js: Funções de validação para nome, e-mail e telefone dos leads, garantindo que os dados estejam no formato adequado antes de serem enviados ao banco de dados.
- index.js: Ponto de entrada da API, define as rotas e executa a lógica principal de recebimento e processamento das requisições POST.
- frontend/: Pasta contendo uma aplicação frontend simples para testar a API.
- sql/: Pasta contendo o script SQL para criação das tabelas no banco de dados.

## Instalação e Uso
### Requisitos
- Node.js
- MySQL

### Passos para Instalação

1- Clone o repositório:
```
git clone https://github.com/seuusuario/nome-do-repositorio.git
```
2- Instale as dependências:
```
npm install
```
3- Configure o banco de dados MySQL, execute o script SQL presente na pasta sql/, e atualize as credenciais em conexao.js.

4- Inicie a aplicação:
```
npm start
```
5- A API estará disponível em http://localhost:8080/.

6- Utilize a aplicação frontend para testar as funcionalidades da API.

## Rotas
- POST /usuarios: Rota responsável por receber os dados do lead (nome, e-mail, telefone) e, após validação, armazená-los no banco de dados.
```
### Exemplo de Requisição

POST http://localhost:8080/usuarios
Content-Type: application/json

{
  "nome": "João da Silva",
  "email": "joao.silva@email.com",
  "telefone": "+5511999999999"
}
```

## Imagens do front-end do projeto:

![1](https://github.com/user-attachments/assets/e5502ed2-da8b-4ec0-aa73-1c6b49faffb0)
![2](https://github.com/user-attachments/assets/ef9483fa-020e-4155-abbe-632dece9ebb1)
![3](https://github.com/user-attachments/assets/fc5dadd4-0b48-47e7-8406-d3df6065dc79)
![4](https://github.com/user-attachments/assets/ed287dd7-ab1e-4882-b627-ba99499e2083)
![5](https://github.com/user-attachments/assets/d0e1e1d6-ea39-4aa4-92d9-ac865c14df7d)



