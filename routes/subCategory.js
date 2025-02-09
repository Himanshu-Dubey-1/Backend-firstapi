const express = require('express')
const router = express.Router()

const model = require('../models/subcategory')
const SubCategory = model.subcategory

// const category = require("../data.json")

// Create , Get , Update Api for sub categories 


router.get("/subCategory", async (req,res) => {

    const subcategory = await SubCategory.find()
    res.send(subcategory)
    // const subproducts = category.flatMap(category => category.Subcategories || []).flatMap(({items , ...rest})=> rest||[])
    // const subproducts = category.map(category => category.Subcategories || [])
    // .reduce((acc, sub)=> acc.concat(sub), [])
    // res.send(subproducts)
})

router.get("/:category/subCategory", async (req, res) => {

    const subcategory = await SubCategory.find({Category: req.params.category})
    res.send(subcategory)

    // const subid = req.params.subid
    // const product = category.flatMap(category => category.Subcategories || [])
    // .flatMap(({items , ...rest})=> rest||[]).find(c=>c.id == subid)
    // res.send(product)

})

router.get("/:category/subCategory/:subid", async (req, res) => {

    const subcategory = await SubCategory.findById(req.params.subid)
    res.send(subcategory)

    // const subid = req.params.subid
    // const product = category.flatMap(category => category.Subcategories || [])
    // .flatMap(({items , ...rest})=> rest||[]).find(c=>c.id == subid)
    // res.send(product)

})

router.post("/subCategory", async (req, res)=> {

    const subcategory = new SubCategory(req.body)
    try {
        await subcategory.save()
        // const product = req.body;
        // category.push(product)
        res.send(subcategory)
        
    } catch (error) {
        console.log(error)
    }
    // const product = req.body;
    // const id = req.params.id;
    // const categoryIndex = category.findIndex(c =>c.id == id )
    // if (!category[categoryIndex].Subcategories) {
    //     category[categoryIndex].Subcategories = [];
    //     category[categoryIndex].Subcategories.push(product)
    // } else {
    // category[categoryIndex].Subcategories.push(product)
    // }
    // res.send(category)
})


router.patch('/:category/subCategory/:subid' , async (req, res) => {

    const id = req.params.subid;
    try {
        const subcategory =await SubCategory.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(subcategory)
    } catch (error) {
        res.send(error)
    }
    // const id = req.params.id
    // const subid = req.params.subid
    // const newcategoryIndex = category.findIndex(c=> c.id == id)
    // const newsubcategoryIndex = category[newcategoryIndex].Subcategories.findIndex(s => s.id == subid)
    // const cat2 = category[newcategoryIndex].Subcategories[newsubcategoryIndex]
    // category[newcategoryIndex].Subcategories.splice(newsubcategoryIndex,1,{...cat2 , ...req.body})
    // res.send(category)

    // const subid = +req.params.subid
    // const subproducts = category.map(category => category.Subcategories || [])
    // .reduce((acc, sub)=> acc.concat(sub), [])
    // const subproductIndex = subproducts.findIndex(s => s.id == subid)
    // const cat2 = subproducts[subproductIndex]
    // subproducts.splice(subproductIndex,1,{...cat2 , ...req.body})
    // res.send(subproducts)
})

module.exports = router