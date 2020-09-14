const express =require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const mongoose=require('mongoose')
const http=require('http')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const server=http.createServer(app)
const io=require('socket.io')(server)

const socketIO=require('./Socket/serverSocket')
io.on('connection',socket=>{
    // console.log('hellp')
    socketIO(io,socket)
})

const userRoute=require('./routes/user')
const chatRoute=require('./routes/chat')

mongoose.set('useFindAndModify',false)

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({origin:true}))
app.use('/chat',chatRoute)
app.use('/user',userRoute)
app.use((err,req,res,next)=>{
    console.log(err)
    const status=err.statusCode || 500
    const message=err.message
    res.status(status).json({message:message})
})
mongoose.set('useCreateIndex', true);
mongoose.connect(`mongodb+srv://mauwia12:${process.env.ATLAS_USER_PWD}@cluster0-0rb9n.mongodb.net/test?retryWrites=true&w=majority`,{ useUnifiedTopology: true,useNewUrlParser: true })
// console.log(mongoose)
port=process.env.PORT||8000
server.listen(port)
