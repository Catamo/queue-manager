const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const getApiAndEmit = async socket => {
  try {
    const res = true;
    socket.emit("FromAPI", res);
  } catch (err) {
    console.error(`Error: ${error.code}`);
  }
};

io.on("connection", socket => {
  console.log("New client connected");

  getApiAndEmit(socket);

  socket.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
