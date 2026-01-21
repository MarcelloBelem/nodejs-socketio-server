# 🚀 Chat Live

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-blue.svg)](https://expressjs.com/)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.8.3-black.svg)](https://socket.io/)

Um projeto simples e elegante de chat ao vivo em tempo real, desenvolvido com Node.js, Express e Socket.IO. Ideal para aprender conceitos de comunicação em tempo real e WebSockets.

## ✨ Funcionalidades

- 🔗 **Conexão WebSocket**: Conexão bidirecional em tempo real
- 👋 **Boas-vindas**: Mensagem automática de boas-vindas para novos usuários
- 🏓 **Ping-Pong**: Teste de conectividade com resposta imediata
- 📢 **Broadcast de Mensagens**: Envio de mensagens para todos os usuários conectados
- 🔌 **Detecção de Desconexão**: Monitoramento automático de usuários offline

## 🛠️ Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução JavaScript no servidor
- **[Express](https://expressjs.com/)**: Framework minimalista para aplicações web
- **[Socket.IO](https://socket.io/)**: Biblioteca para comunicação em tempo real via WebSockets

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

## 🚀 Instalação

1. **Clone o repositório**:

   ```bash
   git clone <url-do-repositorio>
   cd node-chat-live
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

## ▶️ Como Executar

Inicie o servidor com o comando:

```bash
npm run dev
```

O servidor será executado na porta **3000** (ou na porta definida pela variável de ambiente `PORT`).

### 🧪 Teste Básico

Acesse `http://localhost:3000` no navegador para verificar se o servidor está rodando. Você verá a mensagem "Testando".

## 📁 Estrutura do Projeto

```
node-chat-live/
├── 📄 package.json          # Configurações e dependências do projeto
├── 📄 README.md             # Este arquivo
└── 📁 src/
    ├── 📄 server.js         # Servidor principal Express + Socket.IO
    └── 📁 socket/
        └── 📄 socketHandler.js # Lógica de manipulação de eventos Socket.IO
```

## 🔧 Como Usar

### Conectando ao Chat

Para integrar com um cliente (ex.: frontend), use Socket.IO no lado do cliente:

```javascript
import io from "socket.io-client";

const socket = io("http://localhost:3000");

// Receber boas-vindas
socket.on("server:welcome", (data) => {
  console.log(data.msg, "Seu ID:", data.id);
});

// Enviar mensagem
socket.emit("chat:msg", "Olá, mundo!");

// Receber mensagens
socket.on("chat:msg", (data) => {
  console.log(`${data.from}: ${data.text}`);
});
```

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

- 🐛 Reportar bugs
- 💡 Sugerir novas funcionalidades
- 🔧 Enviar pull requests

Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença **ISC**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Autor

**Marcéllo Belém**

📍 **Localização**: Juazeiro do Norte - CE  
💻 **GitHub**: [@MarcelloBelem](https://github.com/MarcelloBelem)  
📚 **Estudando**: HTML5, CSS3, JavaScript, React, Next.js  
🚀 **Projetos**: Desenvolvimento Full-Stack com foco em aplicações modernas

Feito com ❤️ por Marcéllo Belém usando Next.js e Supabase

⭐ **Dê uma estrela se este projeto te ajudou!** ⭐
