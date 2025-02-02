const express = require("express")
const categoryapi = require('./routes/category')
const subCategory = require('./routes/subCategory')
const items = require('./routes/items')
const mongoose = require('mongoose');


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/firstProject');
    //   console.log('database connected');
}
main().then(() => console.log("MongoDB Connected!")).catch(err => console.log(err));

const server = express()
server.use(express.json())


server.use('/', categoryapi)
server.use('/', subCategory)
server.use('/', items)



server.listen("5000" , (req, res) => {
    console.log("server is listening on port 5000...."); 
}) 