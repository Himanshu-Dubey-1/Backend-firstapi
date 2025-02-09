const mongoose = require('mongoose')
const {Schema} = mongoose;


const subcategorySchema = new Schema({
    Name: String,
    Image: String,
    Description: String,
    TaxApplicability: Boolean,
    Tax: Number,
    Category: String
})

exports.subcategory = mongoose.model('subcategory', subcategorySchema)