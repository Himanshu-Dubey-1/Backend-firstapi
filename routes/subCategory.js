const express = require('express')
const router = express.Router()
const {getSubCategory, getSubCategoryByCategory, getSubCategoryById, postSubCategory, updateSubCategory} = require('../controllers/subcategory')

// const category = require("../data.json")

// Create , Get , Update Api for sub categories 


router.get("/subCategory", getSubCategory)

router.get("/:category/subCategory", getSubCategoryByCategory)

router.get("/:category/subCategory/:subid", getSubCategoryById)

router.post("/subCategory", postSubCategory)

router.patch('/:category/subCategory/:subid' , updateSubCategory)

module.exports = router