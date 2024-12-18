require("dotenv").config();
const express = require("express")
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000

const server = require('http').Server(app);
const io = require('socket.io')(server);
const players = [];

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('join-room', (name) => {
    players.push(name);
    io.emit('update-players', players); 
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    const index = players.findIndex((player) => player === socket.id);
    if (index !== -1) {
      players.splice(index, 1);
    }
    io.emit('update-players', players); 
  });
});

app.use(express.json())
app.use(require("morgan")("dev"))

app.use(require("./api/auth").router)
app.use("/subjects", require("./api/subjects"))
app.use("/user", require("./api/users"))

app.use((req, res, next) => {
  next({status:404, message:"Endpoint Not Found"})
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status) ?? 500
  res.json(err.message) ?? "Sorry, something wentn wrong"
})

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})