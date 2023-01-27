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

app.post("/", (req, res) => {
  res.json({msg: "gooooooo"});
});


// io.on("connection", (socket) => {
//   console.log(socket);
// })

httpserver.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  
})


// // Ajoutez un écouteur d'événement pour réceptionner les données de mouvement de souris envoyées par l'autre fichier
// Socket.on("mousemove", (data) => {
//   console.log(`Mouse moved at x: ${data.x}, y: ${data.y}`);
// });