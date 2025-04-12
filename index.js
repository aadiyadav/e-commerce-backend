const express = require('express')
const cors = require('cors')
const cookieParser = require("cookie-parser")
require('dotenv').config()
const router = require('./routes')

const app = express()
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))
app.use(express.json())

app.use('/api', router)

const PORT = process.env.PORT

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)

app.listen(PORT, ()=>{
    console.log("server is running")
})