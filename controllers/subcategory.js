const asyncHandler = require('express-async-handler')
const model = require('../models/subcategory')
const SubCategory = model.subcategory

const getSubCategory = asyncHandler(async (req, res) => {
    try {
        const subcategory = await SubCategory.find()
        res.send(subcategory)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message) 
    }
})

const getSubCategoryById = asyncHandler(async (req, res) => {
    try {
        const id = req.params.subid
        const subcategorybyid = await SubCategory.findById(id)
        res.send(subcategorybyid)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const getSubCategoryByCategory = asyncHandler(async (req, res) => {
    try {
        const category = req.params.category
        const subcategory = await SubCategory.find({Category: category})
        res.send(subcategory)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const postSubCategory = asyncHandler(async (req, res) => {  
    const subcategory = new SubCategory(req.body)
    try {
        await subcategory.save()
        res.send(subcategory)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

const updateSubCategory = asyncHandler(async (req, res) => {
    try {
        const id = req.params.subid
        const subcategory = await SubCategory.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(subcategory)
    } catch (error) {
        res.status(400);
        console.log(error)
        throw new Error (error.message)
    }
})

module.exports = {getSubCategory, getSubCategoryById, getSubCategoryByCategory, postSubCategory, updateSubCategory}