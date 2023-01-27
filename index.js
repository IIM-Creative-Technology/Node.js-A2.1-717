const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
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