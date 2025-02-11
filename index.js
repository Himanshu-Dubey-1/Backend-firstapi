const express = require("express")
const connectDB = require('./config/db')
const categoryapi = require('./routes/category')
const subCategory = require('./routes/subCategory')
const items = require('./routes/items')
const user = require('./routes/user')
const cookieParser = require('cookie-parser')
const HandleLoggedUser = require('./middleware/auth')


connectDB()

const server = express()
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cookieParser())


server.use('/', user)
server.use('/',HandleLoggedUser, categoryapi)
server.use('/',HandleLoggedUser, subCategory)
server.use('/',HandleLoggedUser ,items)



server.listen("5000" , (req, res) => {
    console.log("server is listening on port 5000...."); 
}) 