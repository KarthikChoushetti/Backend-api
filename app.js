require('dotenv').config()
const express=require('express')
const connectoDb=require('./config/db.js')
const cors=require('cors')
const app=express()
connectoDb() // function call to connect to db 
app.use(express.json()) // to make it to receive json data
app.use(express.urlencoded({extended:true})) // to make it to accept data comming from url 
app.use(cors())
const userRoutes=require('./routes/userRoutes.js')
app.use('/',userRoutes)
module.exports=app
