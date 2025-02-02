const express = require('express')
const router = express.Router()
// const category = require("../data.json")

const model = require('../models/category')
const Category = model.category

// create , get , update api for category 

router.get("/category" ,async (req, res)=> {
    // const product = category.map(({Subcategories, ...rest}) => rest)
    const product = await Category.find() 
    res.send(product)
    // res.send(category)
})

router.get("/category/:id" ,async (req, res) => {
    const id = req.params.id
    const product = await Category.findById(id)
    // const product = category.map(({Subcategories, ...rest}) => rest).find(c => c.id == id)
    res.send(product)
})

router.post("/category" , (req, res)=> {

    const category = new Category(req.body)
    try {
        category.save()
        // const product = req.body;
        // category.push(product)
        res.send(category)
        
    } catch (error) {
        console.log(error)
    }
})

router.patch('/category/:id' ,async (req, res) => {
    const id = req.params.id;
    try {
        const doc =await Category.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(doc)
    } catch (error) {
        res.send(error)
    }
    // const categoryIndex = category.findIndex(c => c.id == id);
    // const cat1 = category[categoryIndex]
    // category.splice(categoryIndex,1,{...cat1 , ...req.body})
    // res.status(201).json()
})

module.exports = router