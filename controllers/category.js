const asyncHandler = require('express-async-handler')
const model = require('../models/category')
const Category = model.category

const getCategories = asyncHandler(async (req, res) => {
    try {
        const categories = await Category.find()
        res.send(categories)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const getCategoryById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        const categorybyid = await Category.findById(id)
        res.send(categorybyid)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const createCategory = asyncHandler(async (req, res) => {
    const category = new Category(req.body)
    try {
        await category.save()
        res.send(category)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)    
    }
})

const updateCategory = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(category)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message) 
    }
})

module.exports = {getCategories, getCategoryById, createCategory, updateCategory}