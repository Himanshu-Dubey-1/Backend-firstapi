const mongoose = require('mongoose');
const connectDB = async() =>{

    MONGODB_URI = "mongodb://127.0.0.1:27017/firstProject"

    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`error : ${error.message}`);
        process.exit();
        throw error
    }
}

module.exports = connectDB;

