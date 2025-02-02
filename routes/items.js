const express = require('express')
const router = express.Router()
const category = require("../data.json")


// Create , Get , Update Api for Items

router.get("/category/subCategory/items", (req,res) => {
    const subproducts = category.flatMap(category => category.Subcategories || [])
    .flatMap(sub => sub.items||[])
    res.send(subproducts)
})


router.get("/category/subCategory/items/:itemid", (req,res) => {
    const itemid = req.params.itemid
    const subproducts = category.flatMap(category => category.Subcategories || [])
    .flatMap(sub => sub.items||[]).find(c => c.id == itemid)
    res.send(subproducts)
})

router.post("/category/:id/subCategory/:subid/items", (req, res)=> {
    const product = req.body;
    const id = req.params.id;
    const subid = req.params.subid
    const categoryIndex = category.findIndex(c =>c.id == id )
    const subcategoryIndex = category[categoryIndex].Subcategories.findIndex(s => s.id == subid)

    if (!category[categoryIndex].Subcategories[subcategoryIndex].items) {
        category[categoryIndex].Subcategories[subcategoryIndex].items = [];
        category[categoryIndex].Subcategories[subcategoryIndex].items.push(product)
    } else {
    category[categoryIndex].Subcategories[subcategoryIndex].items.push(product)
    }
    res.send(category)
})



router.patch('/category/:id/subCategory/:subid/items/:itemid' , (req, res) => {
    const id = req.params.id
    const subid = req.params.subid
    const itemid = req.params.itemid
    const categoryIndex = category.findIndex(c => c.id == id)
    const subcategoryIndex = category[categoryIndex].Subcategories.findIndex(s=> s.id == subid)
    const itemIndex = category[categoryIndex].Subcategories[subcategoryIndex].items.findIndex(i => i.id == itemid)
    const cat3 = category[categoryIndex].Subcategories[subcategoryIndex].items[itemIndex]
    category[categoryIndex].Subcategories[subcategoryIndex].items.splice(itemIndex, 1, {...cat3 , ...req.body})
    res.send(category)

})



module.exports = router