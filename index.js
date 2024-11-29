import express from 'express'
import http from 'http'
import cors from 'cors'

import {Server} from 'socket.io'

const app = express()
app.use(cors())
const httpServer = http.createServer(app)

const io = new Server(httpServer,{
    cors:{
        origin:"*"
    }
})

io.on("connection",(socket)=>{
    console.log("Someone Connected")
})


httpServer.listen(8000,()=>{
    console.log("Server is up")
})