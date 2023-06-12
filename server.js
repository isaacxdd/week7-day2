//imports

const express = require("express")
const drinks =require("./models/drinks")

const app = express()
const port = 3000

//routes
app.get("/", (req, res)=>{
    res.send("welcome to the gitpub app")
})

app.get("/drinks", (req, res)=>{
    res.render("index.ejs")
})

app.listen(port,()=>{
    console.log(`This ${port} port is working`);
})

