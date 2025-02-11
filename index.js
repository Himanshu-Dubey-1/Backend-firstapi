const express = require("express")
const categoryapi = require('./routes/category')
const subCategory = require('./routes/subCategory')
const items = require('./routes/items')
const connectDB = require('./config/db')


connectDB()

const server = express()
server.use(express.json())


server.use('/', categoryapi)
server.use('/', subCategory)
server.use('/', items)



server.listen("5000" , (req, res) => {
    console.log("server is listening on port 5000...."); 
}) 