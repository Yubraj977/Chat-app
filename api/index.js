const express = require('express');
const http = require('http');

const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server,{cors:{
    origin:"*"
}});



app.get('/', (req, res) => {
    res.send("hi");
});

io.on('connection', (socket) => {
    console.log(`Connection success ${socket.id}`);
    socket.on('message',(msg)=>{
       console.log(msg)
    })
});

server.listen(4000, () => {
    console.log(`listening at 4000`);
});
