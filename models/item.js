const mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new mongoose.Schema({
    Name: String,
    Image: String,
    Description: String,
    Baseamount: Number,
    Discount: Number,
    Totalamount: Number,
    TaxApplicability: Boolean,
    Tax: Number,
    Category: String,
    Subcategory: String
})

exports.item = mongoose.model('item', itemSchema)
