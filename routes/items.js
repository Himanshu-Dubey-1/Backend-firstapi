const express = require('express')
const router = express.Router()
// const category = require("../data.json")


const model = require("../models/item")
const Item = model.item

// Create , Get , Update Api for Items

router.get("/items", async (req,res) => {
    const name = req.query.name
    const items = await Item.find()
    const allitem = [...items]
    const filteredItems = allitem.filter(item => item.Name.toLowerCase().startsWith(name.toLowerCase()))
    res.send(filteredItems)
})

router.get("/items", async (req,res) => {

    const Items = await Item.find()
    res.send(Items)
    // const subproducts = category.flatMap(category => category.Subcategories || [])
    // .flatMap(sub => sub.items||[])
    // res.send(subproducts)
})

router.get("/:category/items", async (req,res) => {

    const items = await Item.find({Category: req.params.category})
    res.send(items)

    // const itemid = req.params.itemid
    // const subproducts = category.flatMap(category => category.Subcategories || [])
    // .flatMap(sub => sub.items||[]).find(c => c.id == itemid)
    // res.send(subproducts)
})

router.get("/:category/:subCategory/items", async (req,res) => {

    const items = await Item.find({Subcategory: req.params.subCategory , Category: req.params.category})
    res.send(items)

    // const itemid = req.params.itemid
    // const subproducts = category.flatMap(category => category.Subcategories || [])
    // .flatMap(sub => sub.items||[]).find(c => c.id == itemid)
    // res.send(subproducts)
})

router.get("/:category/:subCategory/items/:itemid", async (req,res) => {

    const item = await Item.findById(req.params.itemid)
    res.send(item)

    // const itemid = req.params.itemid
    // const subproducts = category.flatMap(category => category.Subcategories || [])
    // .flatMap(sub => sub.items||[]).find(c => c.id == itemid)
    // res.send(subproducts)
})

router.post("/item",async (req, res)=> {

    const item = new Item(req.body)
    try {
        await item.save()
        res.send(item)
    } catch (error) {
        console.log(error)
    }

    // const product = req.body;
    // const id = req.params.id;
    // const subid = req.params.subid
    // const categoryIndex = category.findIndex(c =>c.id == id )
    // const subcategoryIndex = category[categoryIndex].Subcategories.findIndex(s => s.id == subid)

    // if (!category[categoryIndex].Subcategories[subcategoryIndex].items) {
    //     category[categoryIndex].Subcategories[subcategoryIndex].items = [];
    //     category[categoryIndex].Subcategories[subcategoryIndex].items.push(product)
    // } else {
    // category[categoryIndex].Subcategories[subcategoryIndex].items.push(product)
    // }
    // res.send(category)
})

router.patch('/:category/:subCategory/items/:itemid' , (req, res) => {

    const id = req.params.itemid
    try {
        const item = Item.findOneAndUpdate({_id:id}, req.body , {new: true})
        res.send(item)
    } catch (error) {
        res.send(error)
    }
    
    // const id = req.params.id
    // const subid = req.params.subid
    // const itemid = req.params.itemid
    // const categoryIndex = category.findIndex(c => c.id == id)
    // const subcategoryIndex = category[categoryIndex].Subcategories.findIndex(s=> s.id == subid)
    // const itemIndex = category[categoryIndex].Subcategories[subcategoryIndex].items.findIndex(i => i.id == itemid)
    // const cat3 = category[categoryIndex].Subcategories[subcategoryIndex].items[itemIndex]
    // category[categoryIndex].Subcategories[subcategoryIndex].items.splice(itemIndex, 1, {...cat3 , ...req.body})
    // res.send(category)

})



module.exports = router