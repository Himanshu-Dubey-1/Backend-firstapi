const express = require('express')
const router = express.Router()
const { getCategories, getCategoryById, createCategory, updateCategory } = require("../controllers/category")

// create , get , update api for category 

router.get("/category" , getCategories)

router.get("/category/:id" , getCategoryById)

router.post("/category" , createCategory)

router.patch('/category/:id' , updateCategory)

module.exports = router