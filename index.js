const { Socket } = require("dgram");
const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const cors = require("cors");


const app  = express()

const port = 3000;

const httpserver = http.createServer(app);

const io = new Server(httpserver, {
  cors: {
    origin: "*",
  }
});

app.use(cors());

app.get("/", (req, res) => {
  res.json({msg: "ok"});
});

app.get("/admin", (req, res) => {
  res.json({msg: "vous êtes dans l'admin"});
});

app.get("/user", (req, res) => {
  res.json({msg: "vous êtes un user"});
});

app.post("/", (req, res) => {
  res.json({msg: "gooooooo"});
});


io.on("connection", (socket) => {
  console.log(socket);
})

httpserver.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  
})