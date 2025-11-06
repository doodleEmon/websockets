const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173'
  }
});

let playerScores = [];

io.on("connection", (socket) => {
  socket.on("scores", (scores) => {
    playerScores.push({ ...scores, userSocketId: socket.id })
  });

  setInterval(() => {
    socket.emit("playerScores", playerScores);
  }, 1000)
});

httpServer.listen(3000, () => {
  console.log('Server is connected.')
});