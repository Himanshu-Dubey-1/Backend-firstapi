const express = require('express')
const router = express.Router()
const category = require("../data.json")

// Create , Get , Update Api for sub categories 

router.post("/category/:id/subCategory", (req, res)=> {
    const product = req.body;
    const id = req.params.id;
    const categoryIndex = category.findIndex(c =>c.id == id )
    if (!category[categoryIndex].Subcategories) {
        category[categoryIndex].Subcategories = [];
        category[categoryIndex].Subcategories.push(product)
    } else {
    category[categoryIndex].Subcategories.push(product)
    }
    res.send(category)
})

router.get("/category/subCategory", (req,res) => {
    const subproducts = category.flatMap(category => category.Subcategories || []).flatMap(({items , ...rest})=> rest||[])
    // const subproducts = category.map(category => category.Subcategories || [])
    // .reduce((acc, sub)=> acc.concat(sub), [])
    res.send(subproducts)
})

router.get("/category/subCategory/:subid", (req, res) => {
    const subid = req.params.subid
    const product = category.flatMap(category => category.Subcategories || [])
    .flatMap(({items , ...rest})=> rest||[]).find(c=>c.id == subid)
    res.send(product)

})

router.patch('/category/:id/subCategory/:subid' , (req, res) => {
    // const id = +req.params.id;
    // const subid = +req.params.subid
    // const subcategory1 = category.find(c => c.id == id);
    // const subcategoryIndex = subcategory1.Subcategories.findIndex(s => s.id == subid)
    // const cat2 = category.Subcategories[subcategoryIndex]
    // category.Subcategories.splice(subcategoryIndex,1,{...cat2 , ...req.body})
    // res.status(201).json()

    const id = req.params.id
    const subid = req.params.subid
    const newcategoryIndex = category.findIndex(c=> c.id == id)
    const newsubcategoryIndex = category[newcategoryIndex].Subcategories.findIndex(s => s.id == subid)
    const cat2 = category[newcategoryIndex].Subcategories[newsubcategoryIndex]
    category[newcategoryIndex].Subcategories.splice(newsubcategoryIndex,1,{...cat2 , ...req.body})
    res.send(category)

    // const subid = +req.params.subid
    // const subproducts = category.map(category => category.Subcategories || [])
    // .reduce((acc, sub)=> acc.concat(sub), [])
    // const subproductIndex = subproducts.findIndex(s => s.id == subid)
    // const cat2 = subproducts[subproductIndex]
    // subproducts.splice(subproductIndex,1,{...cat2 , ...req.body})
    // res.send(subproducts)
})

module.exports = router