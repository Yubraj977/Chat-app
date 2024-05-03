require('dotenv').config()
const express = require('express');
const http = require('http');
const connectDb = require('./helper/dbconnect')
const message = require('./models/message')

const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});



app.get('/', (req, res) => {
    res.send("hi");
});




io.on('connection', (socket) => {
    console.log(`Connection success ${socket.id}`);
    
    socket.on('messageFromClient',(payload)=>{
        socket.broadcast.emit('messageFromServer',payload)
    })
    socket.on('disconnect', (soc) => {
        console.log(`user ${socket.id} disconnected ${soc}`)
    })
});

server.listen(4000, () => {
    console.log(`listening at 4000`);
    connectDb(process.env.MONGODB_URI)

});
