const exp = require('express')

const router = exp.Router()

const book = require("../Model/model")

//Reading all the data
router.get('/', async(req,res) => 
{
    try{
        const x = await book.find()
        res.json(x)
    }catch (err) {
        res.send("Error: "+err)
    }
})

//Reading by id
router.get('/:id', async(req,res) => 
{
    try {
        const x = await book.findById(req.params.id)
        res.json(x)
    }catch (err) {
        res.send("Error: "+err)
    }
})

//Creating a new instance
router.post('/', async(req,res) => 
{
    const bk1 = new book(
        {
            Title : req.body.Title,
            Author : req.body.Author,
            Price : req.body.Price
        })
    try {
        const x = await bk1.save()
        res.json(x)
    }catch (err) {
        res.send("Error: "+err)           
    }
})

//updating an instance
router.put('/:id', async(req,res) => 
{
    try {
        const temp = await book.findById(req.params.id)
        temp.Title = req.body.Title
        temp.Author = req.body.Author
        temp.Price = req.body.Price
          const y = await temp.save()
          res.json(y)
    }catch (err) {
        res.send("Error: "+err)                  
    }
})

//updating partial info of an instance
router.patch('/:id', async(req,res) => 
{
    try {
        const temp = await book.findById(req.params.id)
        temp.Price = req.body.Price
          const y = await temp.save()
          res.json(y)
    }catch (err) {
        res.send("Error: "+err)                  
    }
})

//deleting an instance 
router.delete('/:id', async(req,res) =>
{
    try {
        const y = await book.findById(req.params.id)
        await y.remove()
        res.send("Record deleted successfully!")
    }catch (err) {
        res.send("Error: "+err)
    }
})

module.exports = router