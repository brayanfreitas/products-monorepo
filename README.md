<h1 align="center">
    <a href="https://github.com/brayanfreitas/products-monorepo">🦠 Microsserviço de Produtos usando RabbitMQ</a>
</h1>
<p align="center">Microsservice com RabbitMQ, NestJS e MongoDB </p>

# Tabela de conteúdos

- [Tabela de conteúdos](#tabela-de-conteúdos)
  - [🏃 Como Rodar a API](#-como-rodar-a-api)
  - [✅ Pré Requisitos](#-pré-requisitos)
  - [✅ Usando a API](#-usando-a-api)
    - [✅ Clonando repositório](#-clonando-repositório)
    - [✅ Instalando depêndencias](#-instalando-depêndencias-e-iniciando-a-api)
  - [🛠 Tecnologias](#-tecnologias)
  - [🧑🏽 Autor](#-autor)

---

## 🔁 Como Rodar a API

---

### ✅ Pré Requisitos

Para iniciar a API é necessário ter algumas ferramentas instaladas em sua máquina, o [Node.js](https://nodejs.org/en/) e [Nest.js](https://nestjs.com), caso não use o docker, é necessário ter o mongoDB instalado. 


### ✅ Clonando repositório

Para usar a api local, abra seu terminal/cmd clone este repositório usando o comando abaixo:

```bash
# clonar repositório
$ git clone https://github.com/brayanfreitas/products-monorepo
```

### ✅ Instalando depêndencias

Ainda dentro da pasta raiz, "desafio", instale as dependências no node, e inicie a API em seu terminal, usando os comandos abaixo para npm:

```bash
# instalando dependecias
$ npm install
# rodando a api

Caso esteja usando o gerenciador de pacotes yarn, use os comando:

```bash
#
# instalando dependecias
$ yarn install
# rodando a api
```

Dentro da API existe uma pasta chamada Apps, entre nela e cria um arquivo .env em cada pasta raiz decada api. Ou seja, um .env para product-a e um para product-b.

Nesses arquivos será necessário adicionar as variáveis de ambiente. 
no caso do product-a: 
```
MONGODB_URI=
RABBIT_MQ_URI=
RABBIT_MQ_PRODUCT_B_QUEUE=

PORT=
```
Preencha esses dados com o banco que você queira usar. No caso da api product-a é necessário usar um replicaSet do mongoDB. Caso você não saiba como usa-lo. Procure a documentação do mongo sobre.

Para product-b: 
```
MONGODB_URI=
RABBIT_MQ_URI=
RABBIT_MQ_PRODUCT_B_QUEUE=

PORT=3010

```
Para iniciar as APIS digite em terminais separados:
```
yarn start:dev product-a
```
```
yarn start:dev product-b
```
### ✅ Usando Docker. 
Usando o docker você pode usar as variáveis de ambiente que eu utilizei, irei deixa-las abaixo: 
product-a:
```
MONGODB_URI='mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=rs0'
RABBIT_MQ_URI="amqp://0.0.0.0:5672"
RABBIT_MQ_PRODUCT_B_QUEUE="PRODUCT_B"
PORT=3020
```
Product-b
```
MONGODB_URI='mongodb://localhost:27020/mydb2'
RABBIT_MQ_URI="amqp://0.0.0.0:5672"
RABBIT_MQ_PRODUCT_B_QUEUE="PRODUCT_B"

PORT=3010
```

Para usar o docker, abra seu terminal e digite: 
```
docker compose up -d
```
As apis e os bancos vão subir em containers depois basta você acessar via url http://localhost:3020/productA
Para criar, basta enviar uma solicitação post com o seguinte payload:
```
{
    "name": "teste3",
    "description":"teste",
    "value": 4
}
```
Há também uma rota get em que você pode retornar os item paginados. Nesse caso é possível passar os Query Params para paginação: 

```
page do tipo número.
limite do tipo número 
search do tipo string.

exemplo: http://localhost:3020/productA?limit=2&page=1&search=teste3

```







## 🛠 Tecnologias

---

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org)
- [Nest.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Docker](https://www.docker.com/)


---

### 🧑🏽 Autor

---

<a href="https://github.com/BrDSF">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56849210?s=400&u=570b60dff5f67fed7fd5daef77b2e2f8e8c729c2&v=4" width="100px;" alt=""/>
 <br/>
 <b>Brayan Freitas</b></a>

Feito com ❤️ por Brayan Freitas 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Brayan-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in//brayan-freitas-86a6721a7/)](https://www.linkedin.com/in/brayan-freitas-86a6721a7/)
[![Gmail Badge](https://img.shields.io/badge/-brayandeyvid17@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:brayandeyvid17@gmail.com)](mailto:brayandeyvid17@gmail.com)
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

> This is a challenge by [Coodesh](https://coodesh.com/)