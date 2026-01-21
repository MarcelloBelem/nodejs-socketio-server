import express from "express";
import http from "http";
import { Server } from "socket.io";
import socketHandler from "./socket/socketHandler.js";

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const io = new Server(server, {
  cors: { origin: "https://devchaton.netlify.app/" },
});

socketHandler(io);

app.use("/", (req, res) => {
  res.send("Testando");
});

server.listen(PORT, () => {
  console.log("rodando na porta " + PORT);
});
