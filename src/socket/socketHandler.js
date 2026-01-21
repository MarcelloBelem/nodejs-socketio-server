export default (io) => {
  io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);
    //Mensagem de Boas-Vindas
    socket.emit("server:welcome", { msg: "Seja Bem-Vindo", id: socket.id });

    //Teste de Ping Pong
    socket.on("client:ping", (data) => {
      console.log("Pong recebido:", data);
      socket.emit("server:pong", {
        received: data,
        at: new Date().toISOString(),
      });
    });

    //Broadcast de Mensagens
    socket.on("chat:msg", (text) => {
      io.emit("chat:msg", { from: socket.id, text, at: Date.now() });
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectou:", socket.id);
    });
  });
};
