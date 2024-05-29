require('dotenv').config()
const express = require('express');
const http = require('http');
const cors=require('cors')
const cookieParser = require('cookie-parser')
const connectDb = require('./helper/dbconnect')
const { Server } = require('socket.io');
const checkAuth=require('./middlewares/checkauth')
const {createUser}=require('./seeders/seed')
const multer  = require('multer')
const {attachmentsMulter}=require('./middlewares/multer')
// Importing Routes
const userRoute=require('./routers/user.route')
const authRoute=require('./routers/auth.route')
const chatRoute=require('./routers/chat.route')


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
app.use(express.urlencoded({ extended: false }));
// Routes
app.use('/api',authRoute)
app.use('/api/user',checkAuth,userRoute)
app.use('/api/chat',checkAuth,chatRoute)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })
  
app.post('/multer',attachmentsMulter,(req,res)=>{
   console.log(req.file);
   res.send("i am ok")
})
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
    // createUser(10)


});
