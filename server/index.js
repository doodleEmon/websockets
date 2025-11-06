const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: ''
  }
});

io.on("connection", (socket) => {
  console.log(socket);
});

httpServer.listen(3000, () => {
  console.log('Server is connected.')
});