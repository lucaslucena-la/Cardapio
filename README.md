# 🍽️ Cardápio Digital

Uma aplicação fullstack moderna desenvolvida com **React + TypeScript + Vite** no frontend e **Spring Boot + PostgreSQL** no backend. O projeto simula um sistema de cardápio digital para restaurantes, permitindo o cadastro e visualização de pratos com nome, imagem e preço.

---

## 📸 Layout da Página

### 💻 Tela Principal

A página inicial exibe os produtos cadastrados em um layout de cards responsivos, com título, imagem e preço:

![Cardápio](./public/assets/cardapio-preview.png)

### 📝 Tela de Cadastro

Ao clicar em **"novo"**, um modal é aberto para cadastrar um novo prato no cardápio:

![Cadastro](./public/assets/cadastro-preview.png)

---

## ⚙️ Tecnologias Utilizadas

### 🔹 Frontend

* React
* TypeScript
* Vite
* Axios
* React Query (TanStack)
* CSS

### 🔸 Backend

* Spring Boot
* Spring Web
* Spring Data JPA
* PostgreSQL
* Maven

---

## 🚀 Como Rodar o Projeto

### ✅ Pré-requisitos

* Node.js (v18+)
* Java 17+
* PostgreSQL

### 📆 Instalação

```bash
git clone https://github.com/seu-usuario/cardapio-digital.git
cd cardapio-digital
```

### ⚠️ Banco de Dados

Antes de rodar a aplicação, crie o banco no PostgreSQL:

```sql
CREATE DATABASE cardapio;
```

O backend criará a tabela automaticamente na primeira execução (`spring.jpa.hibernate.ddl-auto=update`).

---

### ▶️ Rodando o Backend

```bash
cd Backend-Cardapio
./mvnw spring-boot:run
```

Edite o arquivo `application.properties` com suas credenciais:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/cardapio
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
```

---

### ▶️ Rodando o Frontend

```bash
cd Front-Cardapio
npm install
npm run dev
```

Abra [http://localhost:5173](http://localhost:5173) no navegador.

---

## ✅ Funcionalidades

* Visualizar todos os pratos cadastrados
* Cadastrar novo prato via modal
* Atualização automática da tela com React Query
* Integração completa com API REST
* Cadastro dinâmico com imagem por URL

---

## 🗂️ Estrutura do Projeto

```
cardapio-digital/
├── Backend-Cardapio/
│   └── src/main/java/com/example/cardapio/
│       ├── controller/
│       ├── model/
│       └── repository/
└── Front-Cardapio/
    ├── components/
    ├── hooks/
    ├── interface/
    └── App.tsx
```

---

## 🧐 Aprendizados

Este projeto proporcionou o aprendizado prático de:

* Consumo de APIs REST com React e Axios
* Gerenciamento de cache e estados assíncronos com React Query
* Manipulação de formulários e modais com React
* Integração entre frontend e backend com tipagens seguras (DTOs)
* Mapeamento ORM com JPA e PostgreSQL
* Organização de código por responsabilidades
* Boas práticas de versionamento com Git

---

## 👤 Autor

Desenvolvido por **Lucas Lucena**
GitHub: [@lucaslucena-la](https://github.com/lucaslucena-la)

---

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar e melhorar! 🚀
