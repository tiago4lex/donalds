# 🍔 Totem de Autoatendimento - McDonald's (Personalizável)

Este projeto é um **totem de autoatendimento** inspirado no McDonald's, desenvolvido com **Next.js** e **Prisma**. Ele pode ser facilmente adaptado para outros restaurantes, oferecendo uma interface moderna e intuitiva.

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** - Biblioteca para interfaces interativas
- 🎨 **TailwindCSS** - Estilização rápida e responsiva
- 🟦 **TypeScript** - Tipagem estática para mais segurança
- 🛢️ **NeonDB** - Banco de dados escalável e eficiente
- ⚡ **Next.js** - Framework para aplicações web modernas
- 📦 **Prisma** - ORM para manipulação do banco de dados
- 🖌 **Shadcn** - Biblioteca de componentes estilizados

---

## 📂 **Instalação e Configuração**

### 1️⃣ **Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ **Instalar dependências**
```bash
npm install
```

### 3️⃣ **Configurar o Prisma e o Banco de Dados**
Instale o Prisma e o cliente:
```bash
npm install prisma@6.2.1 @prisma/client@6.2.1
```

Realize a migração do banco de dados:
```bash
npx prisma migrate dev
```

Se precisar adicionar dados iniciais:
```bash
npm install -D ts-node@10.9.1
npx prisma db seed
```
> **Nota:** Antes de rodar o comando `npx prisma db seed`, adicione a configuração de *seed* no arquivo `package.json`.

### 4️⃣ **Configurar o Shadcn**
```bash
npx shadcn@2.3.0 init
```

---

## ▶️ **Rodando o projeto**
```bash
npm run dev
```
O projeto estará disponível em **http://localhost:3000** 🚀

---

## 📌 **Personalização**
Este sistema pode ser adaptado para **qualquer restaurante**, alterando apenas os produtos e algumas configurações no banco de dados.

---

## 📄 **Licença**
Este projeto é de código aberto e pode ser modificado conforme necessário. 🔥
