require('dotenv').config()
const express = require('express');
const http = require('http');
const cors=require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./helper/dbconnect')
const { Server } = require('socket.io');
const checkAuth=require('./middlewares/checkauth')

// Importing Routes
const userRoute=require('./routers/user.route')
const authRoute=require('./routers/auth.route')
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// Middlewares
app.use(cors({
    origin: "http://localhost:5173", // Specify the allowed origin
    credentials: true // Allow credentials (cookies)
}));
app.use(express.json())
app.use(cookieParser())
// Routes
app.use('/api',authRoute)
app.use('/api/user',checkAuth,userRoute)
app.post('/', (req, res) => {
    console.log(req.cookies);
    res.cookie('hello','hi').json({message:"I am jsut working fine "});
   
});

// last handler
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500
    const message= err.message || "Internal yubraj server error"
    res.status(statusCode).json({
        sucess:false,
        statusCode,
        message
    })
})


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
