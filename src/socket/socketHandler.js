export default (io) => {
  io.on("connection", (socket) => {
    console.log(`Cliente conectado: ${socket.id}`);
    //Mensagem de Boas-Vindas
    socket.emit("server:welcome", {
      msg: "Convide um amigo e interaja em tempo real! 🚀 (O histórico apaga ao reiniciar)",
      id: socket.id,
    });

    //Teste de Ping Pong
    socket.on("client:ping", (data) => {
      console.log("Pong recebido:", data);
      socket.emit("server:pong", {
        received: data,
        at: new Date().toISOString(),
      });
    });

    //Broadcast de Mensagens
    socket.on("chat:msg", (text, clientUser) => {
      io.emit("chat:msg", {
        from: socket.id,
        clientUser,
        text,
        at: Date.now(),
      });
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectou:", socket.id);
    });
  });
};
