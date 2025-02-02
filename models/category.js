const mongoose = require('mongoose')
const {Schema} = mongoose;


const categorySchema = new Schema({
    Name: String,
    Image: String,
    Description: String,
    TaxApplicability: Boolean,
    Tax: Number,
    TaxType: String,
    Subcategories: [String]
})

exports.category = mongoose.model('category', categorySchema)