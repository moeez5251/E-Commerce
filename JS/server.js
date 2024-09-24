const express = require('express')
const fs = require("fs");
const cors=require("cors")
const app = express()
const path=require("path");
const port = 3000
app.use(cors());
  

app.get('/', (req, res) => {
  let a= fs.readdirSync("../assets/images/")
  res.send(a)
})
app.get('/:slug', (req, res) => {
    try {
        
        const slug = req.params.slug
        res.json(fs.readdirSync(`../assets/images/${slug}`))
    }
    catch {
        res.send("Unable to Find that color")
    }
})


app.listen(port, () => {
    console.log(`Server app listening on port ${port}`)
})